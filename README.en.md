[简体中文](README.md) | English

# DeepSeek API Balance

<img src="icon.svg" alt="Plugin icon" width="64" height="64">

A Web UI plugin for DeepSeek Harness that shows the balance of a DeepSeek API key.

> This reads the **API key balance** at `api.deepseek.com`, not the wallet balance of a signed-in DeepSeek account.

## Features

- A sidebar badge beside Settings shows the key's available balance.
- Click the badge to refresh; returning to the page also refreshes stale data.
- Collapsed sidebar shows only the key icon; hover for the amount.
- Settings → **API Balance** page to paste, verify, replace, or clear a key.
- Shows available, topped-up, and granted amounts per currency.
- The key stays in the local credential store and is never sent back to the page.
- An invalid key is not saved; a network failure shows a retryable error.

## Install

### From GitHub (recommended)

In DSH, open **Plugins → Add plugin → Install a third-party plugin** and enter:

```text
https://github.com/java-zcm/dsh-deepseek-api-balance
```

The Host checks the repository with `git ls-remote` first; a public repository needs no extra authentication. After installation, enable the bundle on the Plugins page if it is not enabled automatically.

### From a tgz

Download `deepseek-api-balance-1.0.0.tgz` from a release and enter the absolute path to that file in the same install dialog.

### From a folder

Extract the zip and enter the **folder that contains `package.json`** (not the zip file itself) in the install dialog.

## Usage

1. Open **Settings** at the bottom of the sidebar.
2. Open **API Balance**.
3. Paste a DeepSeek API key (starts with `sk-`).
4. Click **Save and verify**.
5. The sidebar badge shows the balance; click it to refresh.

To remove the key, click **Clear key** on the same page.

## Where the key is stored

- The dedicated key is stored in the local credential store under `DEEPSEEK_BALANCE_API_KEY`.
- If no dedicated key is set, the plugin falls back to `DEEPSEEK_API_KEY`.
- Default credential file on Windows: `%USERPROFILE%\.dsh\.credentials.yaml`.
- The page only receives balance amounts and a status; the Host calls `https://api.deepseek.com/user/balance` directly.

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
| `index.js` | Host half: read the credential, query DeepSeek, serve `/api/deepseek-balance/balance` |
| `client.js` | Client half: sidebar badge + settings page form |
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
