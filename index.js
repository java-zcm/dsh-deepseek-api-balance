/**
 * Host half of the DeepSeek API balance bundle.
 *
 * The browser never receives the API key: it saves one through this plugin's
 * authenticated Connection Fetch route, the key lands in the local credential
 * store, and this half performs the DeepSeek Platform request.
 */

const ROUTE = '/api/deepseek-balance/balance';
const PLUGIN_REF = 'DEEPSEEK_BALANCE_API_KEY';
const FALLBACK_REF = 'DEEPSEEK_API_KEY';
const BALANCE_URL = 'https://api.deepseek.com/user/balance';
const REQUEST_TIMEOUT_MS = 15000;
const MAX_KEY_LENGTH = 512;
const MAX_BODY_BYTES = 64 * 1024;

/** The exact Fetch route needs the authenticated browser carrier and the credential store. */
export const inject = ['connection', 'credentials'];

/**
 * Register the private Fetch route used by the bundle's Client half.
 * @param ctx - Host plugin context.
 */
export function apply(ctx) {
  ctx.effect(
    () => ctx.connection.fetch.register({
      path: ROUTE,
      methods: ['POST'],
      requestBody: 'buffered',
      fetch: (request) => handleRequest(ctx, request),
    }),
    'deepseek-api-balance: fetch route',
  );
}

async function handleRequest(ctx, request) {
  const declaredLength = Number(request.headers.get('content-length') ?? '0');
  if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
    return new Response('payload too large', { status: 413 });
  }
  let body;
  try {
    body = await request.json();
  } catch (error) {
    return new Response('bad request', { status: 400 });
  }
  const endpoint = body !== null && typeof body === 'object' && typeof body.endpoint === 'string'
    ? body.endpoint
    : '';
  const payload = body !== null && typeof body === 'object' ? body.payload : undefined;
  const result = await handle(ctx, endpoint, payload, request.signal);
  return new Response(JSON.stringify(result), {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });
}

async function handle(ctx, endpoint, payload, signal) {
  try {
    if (endpoint === 'balance') return await readBalance(ctx, signal);
    if (endpoint === 'save') return await saveKey(ctx, payload, signal);
    if (endpoint === 'clear') return await clearKey(ctx);
    return failure('deepseek-api-balance/unknown-endpoint', `Unknown endpoint: ${endpoint}`);
  } catch (error) {
    console.error('[deepseek-api-balance] request failed', {
      endpoint,
      reason: error instanceof Error ? error.message : 'unknown',
    });
    return failure('deepseek-api-balance/internal', 'The balance request failed.');
  }
}

function success(value) {
  return { ok: true, value };
}

function failure(code, message) {
  return { ok: false, error: { code, message, details: {} } };
}

async function readBalance(ctx, signal) {
  const resolved = await resolveKey(ctx);
  if (resolved === undefined) return success({ status: 'unconfigured' });
  const probe = await queryBalance(resolved.value, signal);
  return success({ ...probe, ref: resolved.ref });
}

async function saveKey(ctx, payload, signal) {
  const key = payload !== null && typeof payload === 'object' && typeof payload.key === 'string'
    ? payload.key.trim()
    : '';
  if (key === '' || key.length > MAX_KEY_LENGTH || /[\s\u0000-\u001F\u007F]/.test(key)) {
    return success({ status: 'invalid-input' });
  }
  const probe = await queryBalance(key, signal);
  if (probe.status !== 'ready') return success(probe);
  await ctx.credentials.set(PLUGIN_REF, key);
  return success({ ...probe, ref: PLUGIN_REF });
}

async function clearKey(ctx) {
  await ctx.credentials.unset(PLUGIN_REF);
  return success({ status: 'unconfigured' });
}

/**
 * Prefer the key entered for this plugin, then the deployment's standard
 * DeepSeek key, so an already-configured environment needs no second copy.
 * @param ctx - Host plugin context.
 * @returns the key and the reference that supplied it, or undefined.
 */
async function resolveKey(ctx) {
  for (const ref of [PLUGIN_REF, FALLBACK_REF]) {
    const hit = await ctx.credentials.resolve(ref);
    if (hit !== undefined && typeof hit.value === 'string' && hit.value.trim() !== '') {
      return { ref, value: hit.value.trim() };
    }
  }
  return undefined;
}

async function queryBalance(key, signal) {
  const controller = new AbortController();
  const abort = () => controller.abort();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  if (signal !== undefined) {
    if (signal.aborted) controller.abort();
    else signal.addEventListener('abort', abort, { once: true });
  }
  try {
    const response = await fetch(BALANCE_URL, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${key}`,
        accept: 'application/json',
      },
      signal: controller.signal,
    });
    if (response.status === 401 || response.status === 403) return { status: 'invalid' };
    if (!response.ok) return { status: 'failed', httpStatus: response.status };
    const data = await response.json();
    return parseBalance(data);
  } catch (error) {
    return { status: 'failed' };
  } finally {
    clearTimeout(timer);
    if (signal !== undefined) signal.removeEventListener('abort', abort);
  }
}

function parseBalance(data) {
  const infos = data !== null && typeof data === 'object' && Array.isArray(data.balance_infos)
    ? data.balance_infos
    : [];
  const wallets = [];
  for (const info of infos) {
    if (info === null || typeof info !== 'object') continue;
    const currency = info.currency === 'USD' ? 'USD' : info.currency === 'CNY' ? 'CNY' : undefined;
    if (currency === undefined) continue;
    wallets.push({
      currency,
      total: amountText(info.total_balance),
      toppedUp: amountText(info.topped_up_balance),
      granted: amountText(info.granted_balance),
    });
  }
  return {
    status: 'ready',
    isAvailable: data !== null && typeof data === 'object' ? data.is_available !== false : false,
    wallets,
  };
}

function amountText(value) {
  if (typeof value === 'string' && value.trim() !== '') return value.trim();
  if (typeof value === 'number' && Number.isFinite(value)) return String(value);
  return '0';
}
