[简体中文](README.md) | [English](README.en.md)

# DeepSeek API 余额

<img src="icon.svg" alt="插件图标" width="64" height="64">

一个 DeepSeek Harness 的 Web UI 插件：输入 DeepSeek 开放平台的 API Key，在侧边栏显示这个 Key 的余额。

> 这里查询的是 `api.deepseek.com` 的 **API Key 余额**，不是已登录 DeepSeek 账号的钱包余额。

## 功能

- 侧边栏底部、设置按钮上方显示「API 余额」徽标。
- 展开侧边栏时显示可用余额；点击徽标立即刷新。
- 折叠侧边栏时只显示钥匙图标，鼠标悬停可看金额。
- 设置 → **API 余额** 页面可以输入、验证、更换、清除 API Key。
- 分别显示可用余额、充值余额、赠金余额（按币种）。
- Key 保存在本机凭据文件中，页面不会拿回 Key。
- Key 无效时不会保存；网络失败会提示重试。

## 安装

### 从 GitHub 安装（推荐）

在 DSH 中打开 **Plugins → Add plugin → Install a third-party plugin**，填入：

```text
https://github.com/java-zcm/dsh-deepseek-api-balance
```

Host 会先用 `git ls-remote` 检查仓库；公开仓库不需要额外认证。安装完成后，如果 bundle 没有自动启用，在 Plugins 页打开它。

### 从 tgz 安装

下载 Release 里的 `deepseek-api-balance-1.0.0.tgz`，在同一个安装对话框里填这个文件的绝对路径。

### 从文件夹安装

解压 zip，在安装对话框里填 **包含 `package.json` 的文件夹路径**（不是 zip 文件本身）。

## 使用

1. 打开左下角 **设置**。
2. 进入 **API 余额**。
3. 粘贴 DeepSeek API Key（以 `sk-` 开头）。
4. 点 **保存并验证**。
5. 验证成功后，侧边栏底部会显示余额；点击徽标刷新。

清除 Key：在同一页面点 **清除专用 Key**。

## Key 存在哪里

- 专用 Key 保存在本机凭据文件中的 `DEEPSEEK_BALANCE_API_KEY`。
- 如果没有设置专用 Key，会自动回退使用 `DEEPSEEK_API_KEY`。
- Windows 默认凭据文件：`%USERPROFILE%\.dsh\.credentials.yaml`。
- 页面只收到余额和状态，不会拿回 Key；Host 直接请求 `https://api.deepseek.com/user/balance`。

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
| `index.js` | Host 半：读取凭据、请求 DeepSeek 余额、提供 `/api/deepseek-balance/balance` 路由 |
| `client.js` | Client 半：侧边栏徽标 + 设置页表单 |
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
