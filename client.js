window.__ModuleLoader__.load({
  id: '@local/deepseek-api-balance',
  factory(require) {
    const React = require('react');
    const h = React.createElement;

    const NS = 'deepseek-api-balance';
    const PLUGIN = '@local/deepseek-api-balance';
    const STALE_MS = 60 * 1000;

    const en = {
      nav: 'API Balance',
      label: 'API Balance',
      title: 'DeepSeek API Balance',
      description: 'Enter a DeepSeek API key to show the balance of that key. The key is stored in the local credential file and is never sent back to the page.',
      keyLabel: 'API Key',
      keyPlaceholder: 'sk-...',
      keyHint: 'Use a DeepSeek Platform API key. It starts with sk-.',
      save: 'Save and verify',
      saving: 'Verifying…',
      clear: 'Clear key',
      clearing: 'Clearing…',
      saved: 'Saved and verified.',
      cleared: 'The plugin key was cleared.',
      clearFailed: 'Could not clear the key. Try again.',
      invalidKey: 'The API key is invalid, so it was not saved.',
      invalidInput: 'Enter a valid API key.',
      saveFailed: 'Could not verify the key (network or service error), so it was not saved.',
      getKey: 'Get an API key',
      balanceTitle: 'Balance',
      available: 'Available',
      toppedUp: 'Topped up',
      granted: 'Granted',
      unavailable: 'This key has no available balance.',
      noWallets: 'The API returned no wallet information.',
      loading: 'Loading…',
      unconfigured: 'No API key',
      unconfiguredHint: 'Enter an API key below to show its balance.',
      invalid: 'Invalid API key',
      invalidHint: 'Check the key, or confirm it on the DeepSeek Platform.',
      failed: 'Unavailable',
      failedHint: 'Could not read the balance. Click to retry.',
      retry: 'Retry',
      source: 'Using {ref}',
      refreshHint: 'Click to refresh',
      aria: 'DeepSeek API balance: {amount}. Click to refresh.',
      ariaNoKey: 'No API key is set. Open API Balance in Settings to set one.',
      ariaInvalid: 'The API key is invalid. Open API Balance in Settings to update it.',
      ariaFailed: 'The DeepSeek API balance is unavailable. Click to retry.',
      ariaLoading: 'Reading the DeepSeek API balance…',
      badgeNoKey: 'No key',
      badgeInvalid: 'Invalid key',
      dsLabel: 'DeepSeek',
      // Kimi coding plan
      kimiLabel: 'Kimi',
      kimiTitle: 'Kimi Coding Plan',
      kimiDescription: 'Enter a Kimi (Moonshot) API key to show its coding-plan usage. The key is stored in the local credential file and is never sent back to the page.',
      kimiKeyLabel: 'Kimi API Key',
      kimiKeyPlaceholder: 'sk-...',
      kimiKeyHint: 'Use a Kimi coding-plan API key (platform.moonshot.cn). If dsh-subusage is configured, the same key is reused.',
      kimiSaved: 'Saved and verified.',
      kimiCleared: 'The Kimi key was cleared.',
      kimiInvalidKey: 'The Kimi key is invalid, so it was not saved.',
      kimiGetKey: 'Get a Kimi key',
      kimiUsageTitle: 'Coding plan usage',
      kimiWindow5h: '5-hour window',
      kimiWindowWeek: 'Weekly window',
      kimiWindowMonth: 'Monthly window',
      kimiUsedPct: '{percent}% used',
      kimiRemainingPct: '{percent}% left',
      kimiResetsAt: 'resets {time}',
      kimiUnconfigured: 'No Kimi key',
      kimiUnconfiguredHint: 'Enter a Kimi API key below to show its coding-plan usage.',
      kimiInvalid: 'Invalid Kimi key',
      kimiInvalidHint: 'Check the key on the Moonshot platform.',
      kimiFailed: 'Unavailable',
      kimiFailedHint: 'Could not read the Kimi usage. Click to retry.',
      kimiNoWindows: 'No usage windows were reported for this account.',
      kimiPlan: 'Plan: {plan}',
      kimiAria: 'Kimi coding plan: {summary}. Click to refresh.',
      kimiAriaNoKey: 'No Kimi key is set. Open API Balance in Settings to set one.',
      kimiAriaInvalid: 'The Kimi key is invalid. Open API Balance in Settings to update it.',
      kimiAriaFailed: 'The Kimi usage is unavailable. Click to retry.',
      kimiAriaLoading: 'Reading the Kimi usage…',
      kimiBadgeNoKey: 'No key',
      kimiBadgeInvalid: 'Invalid key',
    };

    const zh = {
      nav: 'API 余额',
      label: 'API 余额',
      title: 'DeepSeek API 余额',
      description: '输入 DeepSeek API Key，查询该 Key 的余额。Key 保存在本机凭据文件中，不会回传到页面。',
      keyLabel: 'API Key',
      keyPlaceholder: 'sk-...',
      keyHint: '填写 DeepSeek 开放平台的 API Key（以 sk- 开头）。',
      save: '保存并验证',
      saving: '验证中…',
      clear: '清除专用 Key',
      clearing: '清除中…',
      saved: '已保存并验证。',
      cleared: '已清除专用 Key。',
      clearFailed: '清除失败，请重试。',
      invalidKey: 'API Key 无效，未保存。',
      invalidInput: '请输入有效的 API Key。',
      saveFailed: '无法验证该 Key（网络或服务异常），未保存。',
      getKey: '获取 API Key',
      balanceTitle: '余额',
      available: '可用余额',
      toppedUp: '充值余额',
      granted: '赠金余额',
      unavailable: '该 Key 当前没有可用余额。',
      noWallets: '接口没有返回钱包信息。',
      loading: '读取中…',
      unconfigured: '未设置 API Key',
      unconfiguredHint: '在下方输入 API Key，保存后即可显示余额。',
      invalid: 'API Key 无效',
      invalidHint: '请检查 Key 是否正确，或到 DeepSeek 开放平台确认。',
      failed: '读取失败',
      failedHint: '暂时无法读取余额，点击重试。',
      retry: '重试',
      source: '当前使用：{ref}',
      refreshHint: '点击刷新',
      aria: 'DeepSeek API 余额：{amount}。点击刷新。',
      ariaNoKey: '尚未设置 API Key。请在设置的 API 余额中填写。',
      ariaInvalid: 'API Key 无效。请在设置的 API 余额中更新。',
      ariaFailed: '无法读取 DeepSeek API 余额，点击重试。',
      ariaLoading: '正在读取 DeepSeek API 余额…',
      badgeNoKey: '未设置',
      badgeInvalid: 'Key 无效',
      dsLabel: 'DeepSeek',
      // Kimi 编程套餐
      kimiLabel: 'Kimi',
      kimiTitle: 'Kimi 编程套餐',
      kimiDescription: '输入 Kimi（月之暗面）API Key，查询 Coding 套餐的用量。Key 保存在本机凭据文件中，不会回传到页面。',
      kimiKeyLabel: 'Kimi API Key',
      kimiKeyPlaceholder: 'sk-...',
      kimiKeyHint: '填写 Kimi 编程套餐的 API Key（platform.moonshot.cn）。如果已配置 dsh-subusage，会直接复用同一把 Key。',
      kimiSaved: '已保存并验证。',
      kimiCleared: '已清除 Kimi 专用 Key。',
      kimiInvalidKey: 'Kimi Key 无效，未保存。',
      kimiGetKey: '获取 Kimi Key',
      kimiUsageTitle: 'Coding 套餐用量',
      kimiWindow5h: '5 小时窗口',
      kimiWindowWeek: '每周窗口',
      kimiWindowMonth: '每月窗口',
      kimiUsedPct: '已用 {percent}%',
      kimiRemainingPct: '剩 {percent}%',
      kimiResetsAt: '{time} 重置',
      kimiUnconfigured: '未设置 Kimi Key',
      kimiUnconfiguredHint: '在下方输入 Kimi API Key，保存后即可显示套餐用量。',
      kimiInvalid: 'Kimi Key 无效',
      kimiInvalidHint: '请检查 Key 是否正确，或到 Moonshot 开放平台确认。',
      kimiFailed: '读取失败',
      kimiFailedHint: '暂时无法读取 Kimi 用量，点击重试。',
      kimiNoWindows: '该账号没有返回用量窗口。',
      kimiPlan: '套餐：{plan}',
      kimiAria: 'Kimi 编程套餐：{summary}。点击刷新。',
      kimiAriaNoKey: '尚未设置 Kimi Key。请在设置的 API 余额中填写。',
      kimiAriaInvalid: 'Kimi Key 无效。请在设置的 API 余额中更新。',
      kimiAriaFailed: '无法读取 Kimi 用量，点击重试。',
      kimiAriaLoading: '正在读取 Kimi 用量…',
      kimiBadgeNoKey: '未设置',
      kimiBadgeInvalid: 'Key 无效',
    };

    const CSS = [
      '.dsab_layer{flex:none;align-items:stretch;width:100%;margin:8px 0 0;display:flex;flex-direction:column;gap:2px;position:relative}',
      '.dsab_badge{width:100%;height:34px;color:var(--dsw-alias-label-primary);cursor:pointer;background:0 0;border:none;border-radius:10px;align-items:center;gap:8px;margin:0;padding:0 10px 0 8px;font-family:inherit;font-size:13px;display:inline-flex;overflow:hidden;text-align:left}',
      '.dsab_badge:hover{background:var(--dsw-alias-bg-layer-2)}',
      '.dsab_badge:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}',
      '.dsab_badge:disabled{cursor:default;opacity:.72}',
      '.dsab_icon{flex:none;display:inline-flex;color:var(--dsw-alias-label-secondary)}',
      '.dsab_badge[data-state=invalid] .dsab_icon,.dsab_badge[data-state=failed] .dsab_icon{color:var(--dsw-alias-state-error-primary)}',
      '.dsab_label{color:var(--dsw-alias-label-secondary);white-space:nowrap;min-width:0;overflow:hidden;text-overflow:ellipsis}',
      '.dsab_amount{color:var(--dsw-alias-label-primary);font-variant-numeric:tabular-nums;flex:none;margin-left:auto;font-size:13px;line-height:16px;max-width:55%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}',
      '.dsab_amount[data-state=error]{color:var(--dsw-alias-state-error-primary)}',
      '.dsab_amount[data-state=warn]{color:var(--dsw-alias-state-warn-primary)}',
      '.dsab_amount[data-state=muted]{color:var(--dsw-alias-label-secondary);font-size:12px}',
      '.dsab_layer.dsab_rail{width:36px;height:36px;margin:0}',
      '.dsab_rail .dsab_badge{border-radius:50%;justify-content:center;gap:0;width:36px;height:36px;padding:0}',
      '.dsab_section{color:var(--dsw-alias-label-primary);flex-direction:column;gap:16px;padding:8px 0;font-size:13px;line-height:22px;display:flex}',
      '.dsab_header{flex-direction:column;gap:4px;display:flex}',
      '.dsab_title{margin:0;font-size:15px;font-weight:500;line-height:22px}',
      '.dsab_description{margin:0;color:var(--dsw-alias-label-secondary);font-size:13px;line-height:20px}',
      '.dsab_form{flex-direction:column;gap:8px;display:flex}',
      '.dsab_formLabel{color:var(--dsw-alias-label-secondary);font-size:12px;line-height:16px}',
      '.dsab_row{display:flex;align-items:center;gap:8px;flex-wrap:wrap}',
      '.dsab_input{box-sizing:border-box;flex:1 1 220px;min-width:0;height:36px;padding:0 12px;border:.5px solid var(--dsw-alias-border-l2);border-radius:8px;background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary);font:inherit;font-size:14px}',
      '.dsab_input:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:1px}',
      '.dsab_input:disabled{opacity:.7}',
      '.dsab_button{box-sizing:border-box;height:36px;padding:0 14px;border:.5px solid var(--dsw-alias-border-l2);border-radius:8px;background:0 0;color:var(--dsw-alias-label-primary);font:inherit;font-size:14px;line-height:22px;white-space:nowrap;cursor:pointer}',
      '.dsab_button:hover:not(:disabled){background:var(--dsw-alias-bg-layer-2)}',
      '.dsab_button:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}',
      '.dsab_button:disabled{opacity:.6;cursor:default}',
      '.dsab_button[data-primary]{border-color:var(--dsw-alias-brand-primary);color:var(--dsw-alias-brand-primary)}',
      '.dsab_hint{margin:0;color:var(--dsw-alias-label-secondary);font-size:12px;line-height:18px}',
      '.dsab_feedback{margin:0;font-size:13px;line-height:20px}',
      '.dsab_feedback[data-kind=ok]{color:var(--dsw-alias-state-success-primary)}',
      '.dsab_feedback[data-kind=error]{color:var(--dsw-alias-state-error-primary)}',
      '.dsab_card{flex-direction:column;gap:8px;border:.5px solid var(--dsw-alias-border-l1);border-radius:12px;background:var(--dsw-alias-bg-layer-1);padding:12px 16px;display:flex}',
      '.dsab_cardTitle{margin:0;font-size:14px;font-weight:500;line-height:20px}',
      '.dsab_wallet{flex-direction:column;gap:4px;display:flex}',
      '.dsab_wallet + .dsab_wallet{border-top:.5px solid var(--dsw-alias-border-l1);padding-top:8px;margin-top:4px}',
      '.dsab_balanceRow{display:flex;align-items:baseline;justify-content:space-between;gap:16px}',
      '.dsab_balanceLabel{color:var(--dsw-alias-label-secondary)}',
      '.dsab_balanceValue{color:var(--dsw-alias-label-primary);font-variant-numeric:tabular-nums}',
      '.dsab_balanceValue[data-warn=true]{color:var(--dsw-alias-state-warn-primary)}',
      '.dsab_windowRow{display:flex;align-items:baseline;justify-content:space-between;gap:16px}',
      '.dsab_windowLabel{color:var(--dsw-alias-label-secondary)}',
      '.dsab_windowValue{color:var(--dsw-alias-label-primary);font-variant-numeric:tabular-nums;text-align:right}',
      '.dsab_windowValue[data-warn=true]{color:var(--dsw-alias-state-warn-primary)}',
      '.dsab_windowReset{color:var(--dsw-alias-label-tertiary);font-size:12px;font-variant-numeric:tabular-nums}',
      '.dsab_warn{margin:0;color:var(--dsw-alias-state-warn-primary);font-size:13px}',
      '.dsab_error{margin:0;color:var(--dsw-alias-state-error-primary);font-size:13px}',
      '.dsab_link{color:var(--dsw-alias-brand-primary);text-decoration:none}',
      '.dsab_link:hover{text-decoration:underline}',
    ].join('');

    function KeyIcon({ size }) {
      return h('svg', {
        viewBox: '0 0 24 24',
        width: size,
        height: size,
        fill: 'none',
        'aria-hidden': true,
        focusable: 'false',
        style: { display: 'block' },
      },
        h('circle', { cx: 8.5, cy: 8.5, r: 4.5, stroke: 'currentColor', strokeWidth: 1.7 }),
        h('path', { d: 'M11.8 11.8 19 19', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round' }),
        h('path', { d: 'M15.8 15.8l2.4-2.4M18.2 18.2l2.4-2.4', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round' })
      );
    }

    function MoonIcon({ size }) {
      return h('svg', {
        viewBox: '0 0 24 24',
        width: size,
        height: size,
        fill: 'none',
        'aria-hidden': true,
        focusable: 'false',
        style: { display: 'block' },
      },
        h('path', {
          d: 'M20 12.6A8 8 0 1 1 11.4 4a6.4 6.4 0 0 0 8.6 8.6Z',
          stroke: 'currentColor',
          strokeWidth: 1.7,
          strokeLinejoin: 'round',
        })
      );
    }

    function currencySymbol(currency) {
      if (currency === 'USD') return '$';
      if (currency === 'CNY') return '¥';
      return '';
    }

    function withCommas(value) {
      const parts = value.split('.');
      const integer = Number(parts[0]).toLocaleString('en-US');
      return parts.length > 1 ? `${integer}.${parts[1]}` : integer;
    }

    function truncateCents(value) {
      return (Math.floor(value * 100) / 100).toFixed(2);
    }

    function formatAmount(amount, currency) {
      const symbol = currencySymbol(currency);
      const value = Number(amount);
      if (!Number.isFinite(value)) return `${symbol}${amount}`;
      if (value === 0) return `${symbol}0.00`;
      if (value < 0) {
        const magnitude = Math.abs(value);
        const shown = magnitude < 0.01 ? '0.01' : truncateCents(magnitude);
        return `-${symbol}${withCommas(shown)}`;
      }
      if (value < 0.01) return `<${symbol}0.01`;
      return `${symbol}${withCommas(truncateCents(value))}`;
    }

    function isWallet(value) {
      return value !== null
        && typeof value === 'object'
        && (value.currency === 'CNY' || value.currency === 'USD')
        && typeof value.total === 'string'
        && typeof value.toppedUp === 'string'
        && typeof value.granted === 'string';
    }

    function isKimiWindow(value) {
      return value !== null
        && typeof value === 'object'
        && ['5h', '7d', 'week', 'month'].includes(value.kind)
        && typeof value.percentUsed === 'number'
        && Number.isFinite(value.percentUsed);
    }

    function requestCarrier() {
      const transport = globalThis.__DSH_TRANSPORT__;
      if (typeof location !== 'undefined'
        && location.protocol === 'file:'
        && transport !== undefined
        && typeof transport.fetch === 'function') {
        return transport.fetch;
      }
      return (input, init) => fetch(input, init);
    }

    async function callHost(endpoint, payload) {
      try {
        const doFetch = requestCarrier();
        const response = await doFetch('api/deepseek-api-balance/balance', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ endpoint, payload: payload === undefined ? null : payload }),
          cache: 'no-store',
        });
        if (!response.ok) {
          return {
            ok: false,
            error: {
              code: `deepseek-api-balance/http-${response.status}`,
              message: `HTTP ${response.status}`,
              details: {},
            },
          };
        }
        const result = await response.json();
        if (result === null || typeof result !== 'object' || typeof result.ok !== 'boolean') {
          return {
            ok: false,
            error: {
              code: 'deepseek-api-balance/invalid-response',
              message: 'Invalid response',
              details: {},
            },
          };
        }
        return result;
      } catch (error) {
        return {
          ok: false,
          error: {
            code: 'deepseek-api-balance/transport',
            message: 'Transport failure',
            details: {},
          },
        };
      }
    }

    function createStore(viewOf) {
      return (readEndpoint, saveEndpoint, clearEndpoint) => (call) => {
        let snapshot = { status: 'loading' };
        const listeners = new Set();
        let revision = 0;
        let inFlight;

        const publish = (next) => {
          snapshot = next;
          for (const listener of [...listeners]) {
            try {
              listener();
            } catch (error) {
              console.error('[deepseek-api-balance] listener failed', error);
            }
          }
        };

        const invalidate = () => {
          revision += 1;
          inFlight = undefined;
        };

        const read = () => {
          if (inFlight !== undefined) return inFlight;
          const generation = ++revision;
          const request = call(readEndpoint).then((result) => {
            if (generation === revision) publish(viewOf(result));
            return snapshot;
          }).catch(() => {
            if (generation === revision) publish(viewOf(null));
            return snapshot;
          }).finally(() => {
            if (inFlight === request) inFlight = undefined;
          });
          inFlight = request;
          return request;
        };

        const save = async (key) => {
          let view;
          try {
            view = viewOf(await call(saveEndpoint, { key }));
          } catch (error) {
            view = viewOf(null);
          }
          if (view.status === 'ready') {
            invalidate();
            publish(view);
          }
          return view;
        };

        const clear = async () => {
          try {
            await call(clearEndpoint);
          } catch (error) {
            return viewOf(null);
          }
          invalidate();
          return read();
        };

        return {
          getSnapshot: () => snapshot,
          subscribe: (listener) => {
            listeners.add(listener);
            return () => listeners.delete(listener);
          },
          read,
          save,
          clear,
        };
      };
    }

    function viewApiBalance(result) {
      if (result === null || result === undefined || result.ok !== true) {
        return { status: 'failed', wallets: [] };
      }
      const value = result.value;
      if (value === null || typeof value !== 'object') {
        return { status: 'failed', wallets: [] };
      }
      if (value.status === 'unconfigured') return { status: 'unconfigured', wallets: [] };
      if (value.status === 'invalid') return { status: 'invalid', wallets: [] };
      if (value.status === 'invalid-input') return { status: 'invalid-input', wallets: [] };
      if (value.status === 'ready') {
        const wallets = Array.isArray(value.wallets) ? value.wallets.filter(isWallet) : [];
        return {
          status: 'ready',
          wallets,
          isAvailable: value.isAvailable !== false,
          ref: typeof value.ref === 'string' ? value.ref : undefined,
        };
      }
      return { status: 'failed', wallets: [] };
    }

    function viewKimiBalance(result) {
      if (result === null || result === undefined || result.ok !== true) {
        return { status: 'failed', windows: [] };
      }
      const value = result.value;
      if (value === null || typeof value !== 'object') {
        return { status: 'failed', windows: [] };
      }
      if (value.status === 'unconfigured') return { status: 'unconfigured', windows: [] };
      if (value.status === 'invalid') return { status: 'invalid', windows: [] };
      if (value.status === 'invalid-input') return { status: 'invalid-input', windows: [] };
      if (value.status === 'ready') {
        const windows = Array.isArray(value.windows) ? value.windows.filter(isKimiWindow) : [];
        return {
          status: 'ready',
          windows,
          plan: typeof value.plan === 'string' ? value.plan : undefined,
          ref: typeof value.ref === 'string' ? value.ref : undefined,
        };
      }
      return { status: 'failed', windows: [] };
    }

    const createApiBalanceStore = createStore(viewApiBalance)('balance', 'save', 'clear');
    const createKimiBalanceStore = createStore(viewKimiBalance)('kimi-balance', 'kimi-save', 'kimi-clear');

    function describeBadge(snapshot, t) {
      if (snapshot.status === 'loading') {
        return { amount: t('loading'), muted: true, title: t('ariaLoading'), aria: t('ariaLoading') };
      }
      if (snapshot.status === 'unconfigured') {
        return { amount: t('badgeNoKey'), muted: true, title: t('unconfiguredHint'), aria: t('ariaNoKey') };
      }
      if (snapshot.status === 'invalid') {
        return { amount: t('badgeInvalid'), error: true, title: t('invalidHint'), aria: t('ariaInvalid') };
      }
      if (snapshot.status === 'failed') {
        return { amount: t('failed'), error: true, title: t('failedHint'), aria: t('ariaFailed') };
      }
      const primary = snapshot.wallets[0];
      if (primary === undefined) {
        return { amount: t('noWallets'), muted: true, title: t('refreshHint'), aria: t('ariaFailed') };
      }
      const amount = formatAmount(primary.total, primary.currency);
      const parts = snapshot.wallets.map((wallet) => (
        `${t('available')} ${formatAmount(wallet.total, wallet.currency)} · ${t('toppedUp')} ${formatAmount(wallet.toppedUp, wallet.currency)} · ${t('granted')} ${formatAmount(wallet.granted, wallet.currency)}`
      ));
      return {
        amount,
        warn: snapshot.isAvailable === false || Number(primary.total) <= 0,
        title: `${parts.join(' / ')} · ${t('refreshHint')}`,
        aria: t('aria', { amount }),
      };
    }

    const KIMI_WINDOW_ORDER = { month: 0, '7d': 1, week: 1, '5h': 2 };

    function kimiWindowLabel(kind, t) {
      if (kind === '5h') return t('kimiWindow5h');
      if (kind === 'month') return t('kimiWindowMonth');
      return t('kimiWindowWeek');
    }

    function formatResetTime(iso, t) {
      const time = Date.parse(iso);
      if (!Number.isFinite(time)) return '';
      try {
        return t('kimiResetsAt', { time: new Date(time).toLocaleString() });
      } catch (error) {
        return '';
      }
    }

    function sortedKimiWindows(windows) {
      return [...windows].sort((a, b) => (KIMI_WINDOW_ORDER[a.kind] ?? 3) - (KIMI_WINDOW_ORDER[b.kind] ?? 3));
    }

    function describeKimiBadge(snapshot, t) {
      if (snapshot.status === 'loading') {
        return { amount: t('loading'), muted: true, title: t('kimiAriaLoading'), aria: t('kimiAriaLoading') };
      }
      if (snapshot.status === 'unconfigured') {
        return { amount: t('kimiBadgeNoKey'), muted: true, title: t('kimiUnconfiguredHint'), aria: t('kimiAriaNoKey') };
      }
      if (snapshot.status === 'invalid') {
        return { amount: t('kimiBadgeInvalid'), error: true, title: t('kimiInvalidHint'), aria: t('kimiAriaInvalid') };
      }
      if (snapshot.status === 'failed') {
        return { amount: t('failed'), error: true, title: t('kimiFailedHint'), aria: t('kimiAriaFailed') };
      }
      const windows = sortedKimiWindows(snapshot.windows);
      if (windows.length === 0) {
        return { amount: t('kimiNoWindows'), muted: true, title: t('refreshHint'), aria: t('kimiAriaFailed') };
      }
      const primary = windows[0];
      const remaining = Math.max(0, Math.round((100 - primary.percentUsed) * 10) / 10);
      const amount = t('kimiRemainingPct', { percent: String(remaining) });
      const parts = windows.map((w) => `${kimiWindowLabel(w.kind, t)} ${t('kimiUsedPct', { percent: String(w.percentUsed) })}`);
      const plan = snapshot.plan ? ` · ${t('kimiPlan', { plan: snapshot.plan })}` : '';
      return {
        amount,
        warn: remaining <= 10 || primary.percentUsed >= 100,
        title: `${parts.join(' · ')}${plan} · ${t('refreshHint')}`,
        aria: t('kimiAria', { summary: `${parts.join(' · ')}${plan}` }),
      };
    }

    function useAutoRefresh(refresh) {
      const lastReadAt = React.useRef(0);
      React.useEffect(() => {
        refresh();
      }, [refresh]);
      React.useEffect(() => {
        lastReadAt.current = Date.now();
      });
      React.useEffect(() => {
        const refreshIfStale = () => {
          if (Date.now() - lastReadAt.current > STALE_MS) refresh();
        };
        const onVisibilityChange = () => {
          if (document.visibilityState === 'visible') refreshIfStale();
        };
        document.addEventListener('visibilitychange', onVisibilityChange);
        window.addEventListener('focus', refreshIfStale);
        return () => {
          document.removeEventListener('visibilitychange', onVisibilityChange);
          window.removeEventListener('focus', refreshIfStale);
        };
      }, [refresh]);
    }

    function ProviderRow({ icon: Icon, state, text, t, onClick }) {
      const amountState = text.error ? 'error' : text.warn ? 'warn' : text.muted ? 'muted' : undefined;
      return h('button', {
        type: 'button',
        className: 'dsab_badge',
        'data-state': state,
        title: text.title,
        'aria-label': text.aria,
        onClick,
      },
        h('span', { className: 'dsab_icon' }, h(Icon, { size: 14 })),
        h('span', { className: 'dsab_label' }, text.label),
        h('span', { className: 'dsab_amount', 'data-state': amountState }, text.amount)
      );
    }

    function BalanceBadge({ wide, t, useApiBalance, useKimiBalance, refreshApi, refreshKimi }) {
      const apiSnapshot = useApiBalance((value) => value);
      const kimiSnapshot = useKimiBalance((value) => value);
      useAutoRefresh(refreshApi);
      useAutoRefresh(refreshKimi);

      const apiText = describeBadge(apiSnapshot, t);
      const kimiText = describeKimiBadge(kimiSnapshot, t);

      if (!wide) {
        const combined = `${t('dsLabel')}: ${apiText.amount} · ${t('kimiLabel')}: ${kimiText.amount} · ${t('refreshHint')}`;
        return h('div', { className: 'dsab_layer dsab_rail' },
          h('button', {
            type: 'button',
            className: 'dsab_badge',
            'data-state': apiSnapshot.status,
            title: combined,
            'aria-label': combined,
            onClick: () => { refreshApi(); refreshKimi(); },
          },
            h('span', { className: 'dsab_icon' }, h(KeyIcon, { size: 18 })),
            h('span', { className: 'dsab_icon', style: { marginLeft: '-6px' } }, h(MoonIcon, { size: 14 }))
          )
        );
      }

      return h('div', { className: 'dsab_layer' },
        h(ProviderRow, {
          icon: KeyIcon,
          state: apiSnapshot.status,
          text: { ...apiText, label: t('dsLabel') },
          t,
          onClick: refreshApi,
        }),
        h(ProviderRow, {
          icon: MoonIcon,
          state: kimiSnapshot.status,
          text: { ...kimiText, label: t('kimiLabel') },
          t,
          onClick: refreshKimi,
        })
      );
    }

    function renderBalance(snapshot, t, refresh) {
      if (snapshot.status === 'loading') {
        return [h('p', { key: 'state', className: 'dsab_hint' }, t('loading'))];
      }
      if (snapshot.status === 'unconfigured') {
        return [h('p', { key: 'state', className: 'dsab_hint' }, t('unconfiguredHint'))];
      }
      if (snapshot.status === 'invalid') {
        return [h('p', { key: 'state', className: 'dsab_error', role: 'alert' }, t('invalidHint'))];
      }
      if (snapshot.status === 'failed') {
        return [
          h('p', { key: 'state', className: 'dsab_error', role: 'alert' }, t('failedHint')),
          h('button', { key: 'retry', type: 'button', className: 'dsab_button', onClick: refresh }, t('retry')),
        ];
      }
      const body = [];
      for (const wallet of snapshot.wallets) {
        body.push(h('div', { className: 'dsab_wallet', key: wallet.currency },
          h('div', { className: 'dsab_balanceRow' },
            h('span', { className: 'dsab_balanceLabel' }, t('available')),
            h('span', {
              className: 'dsab_balanceValue',
              'data-warn': snapshot.isAvailable === false || Number(wallet.total) <= 0 ? 'true' : undefined,
            }, formatAmount(wallet.total, wallet.currency))
          ),
          h('div', { className: 'dsab_balanceRow' },
            h('span', { className: 'dsab_balanceLabel' }, t('toppedUp')),
            h('span', { className: 'dsab_balanceValue' }, formatAmount(wallet.toppedUp, wallet.currency))
          ),
          h('div', { className: 'dsab_balanceRow' },
            h('span', { className: 'dsab_balanceLabel' }, t('granted')),
            h('span', { className: 'dsab_balanceValue' }, formatAmount(wallet.granted, wallet.currency))
          )
        ));
      }
      if (body.length === 0) {
        body.push(h('p', { key: 'none', className: 'dsab_hint' }, t('noWallets')));
      }
      if (snapshot.isAvailable === false) {
        body.push(h('p', { key: 'warn', className: 'dsab_warn' }, t('unavailable')));
      }
      if (snapshot.ref !== undefined) {
        body.push(h('p', { key: 'source', className: 'dsab_hint' }, t('source', { ref: snapshot.ref })));
      }
      return body;
    }

    function renderKimiUsage(snapshot, t, refresh) {
      if (snapshot.status === 'loading') {
        return [h('p', { key: 'state', className: 'dsab_hint' }, t('loading'))];
      }
      if (snapshot.status === 'unconfigured') {
        return [h('p', { key: 'state', className: 'dsab_hint' }, t('kimiUnconfiguredHint'))];
      }
      if (snapshot.status === 'invalid') {
        return [h('p', { key: 'state', className: 'dsab_error', role: 'alert' }, t('kimiInvalidHint'))];
      }
      if (snapshot.status === 'failed') {
        return [
          h('p', { key: 'state', className: 'dsab_error', role: 'alert' }, t('kimiFailedHint')),
          h('button', { key: 'retry', type: 'button', className: 'dsab_button', onClick: refresh }, t('retry')),
        ];
      }
      const body = [];
      const windows = sortedKimiWindows(snapshot.windows);
      for (const window_ of windows) {
        const remaining = Math.max(0, Math.round((100 - window_.percentUsed) * 10) / 10);
        body.push(h('div', { className: 'dsab_windowRow', key: window_.kind },
          h('span', { className: 'dsab_windowLabel' }, kimiWindowLabel(window_.kind, t)),
          h('span', {
            className: 'dsab_windowValue',
            'data-warn': remaining <= 10 ? 'true' : undefined,
          }, `${t('kimiRemainingPct', { percent: String(remaining) })} / ${t('kimiUsedPct', { percent: String(window_.percentUsed) })}`)
        ));
        if (window_.resetsAt !== undefined) {
          const resetText = formatResetTime(window_.resetsAt, t);
          if (resetText !== '') {
            body.push(h('div', { className: 'dsab_windowRow', key: `${window_.kind}-reset` },
              h('span', { className: 'dsab_windowLabel' }, ''),
              h('span', { className: 'dsab_windowReset' }, resetText)
            ));
          }
        }
      }
      if (body.length === 0) {
        body.push(h('p', { key: 'none', className: 'dsab_hint' }, t('kimiNoWindows')));
      }
      if (snapshot.plan !== undefined) {
        body.push(h('p', { key: 'plan', className: 'dsab_hint' }, t('kimiPlan', { plan: snapshot.plan })));
      }
      if (snapshot.ref !== undefined) {
        body.push(h('p', { key: 'source', className: 'dsab_hint' }, t('source', { ref: snapshot.ref })));
      }
      return body;
    }

    function ApiBalanceSection({ t, useApiBalance, refresh, save, clear }) {
      const snapshot = useApiBalance((value) => value);
      const [draft, setDraft] = React.useState('');
      const [busy, setBusy] = React.useState(undefined);
      const [feedback, setFeedback] = React.useState(undefined);
      const mounted = React.useRef(false);

      React.useEffect(() => {
        mounted.current = true;
        refresh();
        return () => {
          mounted.current = false;
        };
      }, [refresh]);

      const onSave = async (event) => {
        event.preventDefault();
        if (busy !== undefined) return;
        const key = draft.trim();
        if (key === '') {
          setFeedback({ kind: 'error', text: t('invalidInput') });
          return;
        }
        setBusy('save');
        setFeedback(undefined);
        const result = await save(key);
        if (!mounted.current) return;
        setBusy(undefined);
        if (result.status === 'ready') {
          setDraft('');
          setFeedback({ kind: 'ok', text: t('saved') });
          return;
        }
        if (result.status === 'invalid') {
          setFeedback({ kind: 'error', text: t('invalidKey') });
          return;
        }
        if (result.status === 'invalid-input') {
          setFeedback({ kind: 'error', text: t('invalidInput') });
          return;
        }
        setFeedback({ kind: 'error', text: t('saveFailed') });
      };

      const onClear = async () => {
        if (busy !== undefined) return;
        setBusy('clear');
        setFeedback(undefined);
        const result = await clear();
        if (!mounted.current) return;
        setBusy(undefined);
        if (result.status === 'failed') {
          setFeedback({ kind: 'error', text: t('clearFailed') });
          return;
        }
        setFeedback({ kind: 'ok', text: t('cleared') });
      };

      return h('section', { className: 'dsab_section', 'aria-label': t('nav') },
        h('div', { className: 'dsab_header' },
          h('h2', { className: 'dsab_title' }, t('title')),
          h('p', { className: 'dsab_description' }, t('description'))
        ),
        h('form', { className: 'dsab_form', onSubmit: onSave },
          h('label', { className: 'dsab_formLabel', htmlFor: 'dsab-api-key' }, t('keyLabel')),
          h('div', { className: 'dsab_row' },
            h('input', {
              id: 'dsab-api-key',
              className: 'dsab_input',
              type: 'password',
              value: draft,
              onChange: (event) => setDraft(event.target.value),
              placeholder: t('keyPlaceholder'),
              autoComplete: 'off',
              spellCheck: false,
              disabled: busy !== undefined,
            }),
            h('button', {
              type: 'submit',
              className: 'dsab_button',
              'data-primary': 'true',
              disabled: busy !== undefined || draft.trim() === '',
            }, busy === 'save' ? t('saving') : t('save')),
            h('button', {
              type: 'button',
              className: 'dsab_button',
              onClick: onClear,
              disabled: busy !== undefined,
            }, busy === 'clear' ? t('clearing') : t('clear'))
          ),
          h('p', { className: 'dsab_hint' }, t('keyHint'))
        ),
        feedback !== undefined
          ? h('p', { className: 'dsab_feedback', 'data-kind': feedback.kind, role: 'status' }, feedback.text)
          : null,
        h('div', { className: 'dsab_card' },
          h('h3', { className: 'dsab_cardTitle' }, t('balanceTitle')),
          ...renderBalance(snapshot, t, refresh)
        ),
        h('p', { className: 'dsab_hint' },
          h('a', {
            className: 'dsab_link',
            href: 'https://platform.deepseek.com/api_keys',
            target: '_blank',
            rel: 'noreferrer',
          }, t('getKey'))
        )
      );
    }

    function KimiSection({ t, useKimiBalance, refresh, save, clear }) {
      const snapshot = useKimiBalance((value) => value);
      const [draft, setDraft] = React.useState('');
      const [busy, setBusy] = React.useState(undefined);
      const [feedback, setFeedback] = React.useState(undefined);
      const mounted = React.useRef(false);

      React.useEffect(() => {
        mounted.current = true;
        refresh();
        return () => {
          mounted.current = false;
        };
      }, [refresh]);

      const onSave = async (event) => {
        event.preventDefault();
        if (busy !== undefined) return;
        const key = draft.trim();
        if (key === '') {
          setFeedback({ kind: 'error', text: t('invalidInput') });
          return;
        }
        setBusy('save');
        setFeedback(undefined);
        const result = await save(key);
        if (!mounted.current) return;
        setBusy(undefined);
        if (result.status === 'ready') {
          setDraft('');
          setFeedback({ kind: 'ok', text: t('kimiSaved') });
          return;
        }
        if (result.status === 'invalid') {
          setFeedback({ kind: 'error', text: t('kimiInvalidKey') });
          return;
        }
        if (result.status === 'invalid-input') {
          setFeedback({ kind: 'error', text: t('invalidInput') });
          return;
        }
        setFeedback({ kind: 'error', text: t('saveFailed') });
      };

      const onClear = async () => {
        if (busy !== undefined) return;
        setBusy('clear');
        setFeedback(undefined);
        const result = await clear();
        if (!mounted.current) return;
        setBusy(undefined);
        if (result.status === 'failed') {
          setFeedback({ kind: 'error', text: t('clearFailed') });
          return;
        }
        setFeedback({ kind: 'ok', text: t('kimiCleared') });
      };

      return h('section', { className: 'dsab_section', 'aria-label': t('kimiTitle') },
        h('div', { className: 'dsab_header' },
          h('h2', { className: 'dsab_title' }, t('kimiTitle')),
          h('p', { className: 'dsab_description' }, t('kimiDescription'))
        ),
        h('form', { className: 'dsab_form', onSubmit: onSave },
          h('label', { className: 'dsab_formLabel', htmlFor: 'dsab-kimi-key' }, t('kimiKeyLabel')),
          h('div', { className: 'dsab_row' },
            h('input', {
              id: 'dsab-kimi-key',
              className: 'dsab_input',
              type: 'password',
              value: draft,
              onChange: (event) => setDraft(event.target.value),
              placeholder: t('kimiKeyPlaceholder'),
              autoComplete: 'off',
              spellCheck: false,
              disabled: busy !== undefined,
            }),
            h('button', {
              type: 'submit',
              className: 'dsab_button',
              'data-primary': 'true',
              disabled: busy !== undefined || draft.trim() === '',
            }, busy === 'save' ? t('saving') : t('save')),
            h('button', {
              type: 'button',
              className: 'dsab_button',
              onClick: onClear,
              disabled: busy !== undefined,
            }, busy === 'clear' ? t('clearing') : t('clear'))
          ),
          h('p', { className: 'dsab_hint' }, t('kimiKeyHint'))
        ),
        feedback !== undefined
          ? h('p', { className: 'dsab_feedback', 'data-kind': feedback.kind, role: 'status' }, feedback.text)
          : null,
        h('div', { className: 'dsab_card' },
          h('h3', { className: 'dsab_cardTitle' }, t('kimiUsageTitle')),
          ...renderKimiUsage(snapshot, t, refresh)
        ),
        h('p', { className: 'dsab_hint' },
          h('a', {
            className: 'dsab_link',
            href: 'https://platform.moonshot.cn/console/api-keys',
            target: '_blank',
            rel: 'noreferrer',
          }, t('kimiGetKey'))
        )
      );
    }

    function ApiBalancePage(props) {
      return h(React.Fragment, null,
        h(ApiBalanceSection, props.apiProps),
        h(KimiSection, props.kimiProps)
      );
    }

    function apply(ctx) {
      ctx.effect(() => ctx.locale.register(NS, { en, zh }), 'deepseek-api-balance: dictionaries');

      ctx.effect(() => {
        const tag = document.createElement('style');
        tag.dataset.plugin = PLUGIN;
        tag.dataset.pluginCss = `${PLUGIN}/balance.css`;
        tag.textContent = CSS;
        document.head.appendChild(tag);
        return () => tag.remove();
      }, 'deepseek-api-balance: styles');

      const call = (endpoint, payload) => callHost(endpoint, payload);
      const apiStore = createApiBalanceStore(call);
      const kimiStore = createKimiBalanceStore(call);
      const t = ctx.locale.bind(NS);

      ctx.slots.inject('sidebar.footer.action', () => ctx.slots.register({
        name: 'sidebar.footer.action',
        id: 'deepseek-api-balance',
        order: 10,
        locale: NS,
        inject: () => ({
          hooks: { apiBalance: apiStore, kimiBalance: kimiStore },
          refreshApi: () => apiStore.read(),
          refreshKimi: () => kimiStore.read(),
        }),
      }, BalanceBadge));

      ctx.slots.inject('settings.section', () => ctx.slots.register({
        name: 'settings.section',
        id: 'deepseek-api-balance',
        order: 12,
        label: () => t('nav'),
        locale: NS,
        inject: () => ({
          apiProps: {
            t,
            useApiBalance: (selector) => useStoreSelector(apiStore, selector),
            refresh: () => apiStore.read(),
            save: (key) => apiStore.save(key),
            clear: () => apiStore.clear(),
          },
          kimiProps: {
            t,
            useKimiBalance: (selector) => useStoreSelector(kimiStore, selector),
            refresh: () => kimiStore.read(),
            save: (key) => kimiStore.save(key),
            clear: () => kimiStore.clear(),
          },
        }),
      }, ApiBalancePage));
    }

    function useStoreSelector(store, selector) {
      const select = typeof selector === 'function' ? selector : (value) => value;
      const [slice, setSlice] = React.useState(() => select(store.getSnapshot()));
      React.useEffect(() => {
        const check = () => {
          const next = select(store.getSnapshot());
          setSlice((previous) => (Object.is(previous, next) ? previous : next));
        };
        check();
        return store.subscribe(check);
      }, [store, select]);
      return slice;
    }

    return { inject: ['slots', 'locale'], apply };
  },
});
