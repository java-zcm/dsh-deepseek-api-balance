[简体中文](README.md) | English

# DeepSeek API Balance / Kimi Usage

<img src="icon.svg" alt="Plugin icon" width="64" height="64">

A Web UI plugin for DeepSeek Harness: enter a DeepSeek Platform API key to show its balance, and a Kimi (Moonshot) API key to show its coding-plan usage — both in the bottom-left sidebar.

> The DeepSeek side reads the **API key balance** at `api.deepseek.com` (not a signed-in account wallet). The Kimi side reads the **coding-plan usage windows** (5-hour / weekly / monthly) at `api.kimi.com`, using the same contract as dsh-subusage's `kimi-coding` route, so an existing key can be reused.

## Features

- Two badge rows beside Settings at the sidebar foot: DeepSeek balance + Kimi usage.
- Click a row to refresh it; stale data refreshes when the page regains focus after 60s.
- Collapsed sidebar merges both into one icon; hover shows both summaries.
- Settings → **API Balance** has separate forms to enter, verify, replace, and clear each key.
- DeepSeek shows available / topped-up / granted amounts per currency; Kimi shows used vs remaining percent per window, reset times, and the plan name.
- Keys stay in the local credential store and never reach the page.

## Install

### From GitHub (recommended)

In DSH, open **Plugins → Add plugin → Install a third-party plugin** and enter:

```text
https://github.com/java-zcm/dsh-deepseek-api-balance
```

The Host checks the repository with `git ls-remote` first; a public repository needs no extra authentication. After installation, enable the bundle on the Plugins page if it is not enabled automatically.

### From a tgz

Download `deepseek-api-balance-1.1.0.tgz` from a release and enter the absolute path to that file in the same install dialog.

### From a folder

Extract the zip and enter the **folder that contains `package.json`** (not the zip file itself) in the install dialog.

## Usage

1. Open **Settings** at the bottom of the sidebar, then open **API Balance**.
2. DeepSeek: paste an API key (starts with `sk-`) and click **Save and verify**.
3. Kimi: paste a Kimi coding-plan API key and click **Save and verify**.
4. The two sidebar rows show the DeepSeek balance and the Kimi remaining usage; click a row to refresh it.

To remove a key, click its **Clear key** button on the same page.

## Where the keys are stored

- DeepSeek dedicated key: `DEEPSEEK_BALANCE_API_KEY`, falling back to `DEEPSEEK_API_KEY`; the Host calls `https://api.deepseek.com/user/balance`.
- Kimi dedicated key: `KIMI_CODING_API_KEY`, falling back to `KIMI_API_KEY`; the Host calls `https://api.kimi.com/coding/v1/usages` (plan name from `/coding/v1/me`).
- If dsh-subusage is installed and already has a Kimi key, this plugin reuses the same credential — no need to enter it again.
- Default credential file on Windows: `%USERPROFILE%\.dsh\.credentials.yaml`.

**Never** commit `.credentials.yaml` or send it to anyone. This repository contains no API key.

## Status

| Display | Meaning |
| --- | --- |
| No key | No API key is configured yet |
| Invalid key | The API returned 401/403; the key is wrong or expired |
| Unavailable | Network/service error, or a non-200 response |
| ¥x.xx | The available balance was read successfully |

## Compatibility

- Written against the DSH `0.2.1-rc.2` plugin APIs.
- Uses the Host Connection exact Fetch route, the local credential service, and Web Client slots.
- A significantly different DSH version may fail to activate; check the diagnostic on the Plugins page.

## Project layout

| File | Purpose |
| --- | --- |
| `index.js` | Host half: credential IO, DeepSeek balance + Kimi usage requests, `/api/deepseek-api-balance/balance` route |
| `client.js` | Client half: two-row sidebar badge + two settings cards |
| `cordis.patch.yml` | Loader patch for the plugin bundle |
| `locale/*.json` | English and Chinese titles/descriptions shown by Plugin Manager |
| `icon.svg` | Plugin icon |

## Development

After changing `client.js` / `index.js`, reinstall the bundle or restart DSH to load the new code. There is no build step; the project is plain JavaScript.

The package name is currently `@local/deepseek-api-balance`; the GitHub repository name can differ. Before publishing to npm, rename the package and update:

- `name` in `package.json`
- `name` in `cordis.patch.yml`
- the `id` in `window.__ModuleLoader__.load` in `client.js`

## License

MIT License. See [LICENSE](LICENSE).

Copyright (c) 2026 java-zcm
