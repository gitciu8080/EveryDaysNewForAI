# AI 晨报 · EveryDay's New For AI

每日 AI 情报站：AI 大事、本地模型动态、模型排行榜与新闻速览。

- 界面：液态玻璃（Liquid Glass / HarmonyOS 风格）+ Canvas 粒子背景 + 流动光斑
- 多设备自适应（桌面 / 平板 / 手机），遵循 `prefers-reduced-motion`
- 支持 RSS 订阅：[`feed.xml`](./feed.xml)（`/feed`、`/rss` 均可访问）
- 纯静态、零构建，可直接部署到 **Cloudflare Pages**

## 目录结构

```
├── index.html            # 主页面
├── assets/css/style.css  # 液态玻璃样式
├── assets/js/main.js     # 当日数据 + 渲染 + 粒子引擎
├── feed.xml              # RSS 2.0 订阅源
├── data/                 # 每日结构化数据（JSON）
├── _headers              # Cloudflare Pages 响应头
└── _redirects            # Cloudflare Pages 重定向
```

## 每日更新流程

1. 编辑 `assets/js/main.js` 中的 `DAILY` 数据对象；
2. 同步更新 `feed.xml`（新增 `<item>` 与 `<lastBuildDate>`）；
3. 在 `data/` 下留档当天的 JSON；
4. 提交并以当天日期打 tag：`git tag 2026-09-15 && git push --tags`。

## 部署到 Cloudflare Pages

1. GitHub 关联：Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git；
2. 选择本仓库，框架预设选 **None**，构建命令留空，输出目录填 `/`（根目录）；
3. 保存后每次 push 自动部署。

## 本地预览

```bash
python3 -m http.server 8080
# 打开 http://localhost:8080
```
