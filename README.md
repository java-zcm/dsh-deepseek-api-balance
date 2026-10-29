[简体中文](README.md) | [English](README.en.md)

# DeepSeek API 余额 / Kimi 用量

<img src="icon.svg" alt="插件图标" width="64" height="64">

一个 DeepSeek Harness 的 Web UI 插件：输入 DeepSeek 开放平台的 API Key 显示余额，输入 Kimi（月之暗面）API Key 显示 Coding 套餐用量，都在侧边栏左下角展示。

> DeepSeek 查的是 `api.deepseek.com` 的 **API Key 余额**（不是已登录账号的钱包）；Kimi 查的是 `api.kimi.com` 的 **Coding 套餐用量窗口**（5 小时 / 每周 / 每月），与 dsh-subusage 的 `kimi-coding` 路由同契约，Key 可直接复用。

## 功能

- 侧边栏底部、设置按钮上方显示两行徽标：DeepSeek 余额 + Kimi 用量。
- 每行点击单独刷新；切回页面超过 60 秒自动刷新。
- 折叠侧边栏时合并成一个图标，悬停看两项摘要。
- 设置 → **API 余额** 页面可以分别输入、验证、更换、清除两个 Key。
- DeepSeek 显示可用 / 充值 / 赠金余额（按币种）；Kimi 显示各窗口已用与剩余百分比、重置时间和套餐名。
- Key 保存在本机凭据文件中，页面不会拿回 Key。

## 安装

### 从 GitHub 安装（推荐）

在 DSH 中打开 **Plugins → Add plugin → Install a third-party plugin**，填入：

```text
https://github.com/java-zcm/dsh-deepseek-api-balance
```

Host 会先用 `git ls-remote` 检查仓库；公开仓库不需要额外认证。安装完成后，如果 bundle 没有自动启用，在 Plugins 页打开它。

### 从 tgz 安装

下载 Release 里的 `deepseek-api-balance-1.1.0.tgz`，在同一个安装对话框里填这个文件的绝对路径。

### 从文件夹安装

解压 zip，在安装对话框里填 **包含 `package.json` 的文件夹路径**（不是 zip 文件本身）。

## 使用

1. 打开左下角 **设置**，进入 **API 余额**。
2. DeepSeek：粘贴 API Key（以 `sk-` 开头），点 **保存并验证**。
3. Kimi：粘贴 Kimi 编程套餐的 API Key，点 **保存并验证**。
4. 验证成功后，侧边栏底部两行徽标分别显示 DeepSeek 余额和 Kimi 剩余用量；点击对应行刷新。

清除 Key：在同一页面点对应的 **清除** 按钮。

## Key 存在哪里

- DeepSeek 专用 Key：`DEEPSEEK_BALANCE_API_KEY`，未设置时回退 `DEEPSEEK_API_KEY`；Host 请求 `https://api.deepseek.com/user/balance`。
- Kimi 专用 Key：`KIMI_CODING_API_KEY`，未设置时回退 `KIMI_API_KEY`；Host 请求 `https://api.kimi.com/coding/v1/usages`（套餐名取 `/coding/v1/me`）。
- 如果已安装 dsh-subusage 并配过 Kimi，这里会自动复用同一把 Key，不用重新填。
- Windows 默认凭据文件：`%USERPROFILE%\.dsh\.credentials.yaml`。

**不要**把 `.credentials.yaml` 提交到 Git 或发给别人。插件仓库本身不含任何 Key。

## 状态说明

| 显示 | 含义 |
| --- | --- |
| 未设置 | 还没有配置 API Key |
| Key 无效 | 接口返回 401/403，Key 不正确或已失效 |
| 读取失败 | 网络/服务异常，或接口返回了非 200 |
| ¥x.xx | 正常读取到的可用余额 |

## 兼容性

- 按 DSH `0.2.1-rc.2` 的插件接口编写。
- 使用 Host 的 Connection 精确 Fetch 路由、本机凭据服务和 Web Client 槽位。
- DSH 版本差异较大时可能无法激活；以 Plugins 页的诊断为准。

## 项目结构

| 文件 | 作用 |
| --- | --- |
| `index.js` | Host 半：凭据读写、DeepSeek 余额与 Kimi 用量请求、`/api/deepseek-api-balance/balance` 路由 |
| `client.js` | Client 半：双行侧边栏徽标 + 设置页两个表单卡片 |
| `cordis.patch.yml` | 插件 bundle 的 Loader patch |
| `locale/*.json` | 插件管理器里显示的中英文标题和描述 |
| `icon.svg` | 插件图标 |

## 开发

修改 `client.js` / `index.js` 后，重新安装 bundle 或重启 DSH 以加载新代码。项目是纯 JavaScript，没有构建步骤。

包名目前是 `@local/deepseek-api-balance`；GitHub 仓库名可以不同。如果要发布到 npm，需要改成自己的包名，并同步修改：

- `package.json` 的 `name`
- `cordis.patch.yml` 里的 `name`
- `client.js` 中 `window.__ModuleLoader__.load` 的 `id`

## License

本项目使用 [MIT License](LICENSE)。

Copyright (c) 2026 java-zcm
