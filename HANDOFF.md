# Handoff

## 当前状态

- 统一项目展厅首版已发布至 `https://fandral2008.github.io/`，并通过线上浏览器验收。
- 项目筛选、锚点导航、外部链接和响应式布局已经接入；桌面 1440×1000 与移动端 390×844 已检查。
- 远程公开仓库为 `fandral2008/fandral2008.github.io`，GitHub Pages 使用 Actions 工作流发布并强制 HTTPS。
- 首次线上部署成功；GitHub Actions 对部分官方 Pages action 给出 Node.js 20 兼容性提示，但已自动使用 Node.js 24 运行，不阻塞发布。

## 下一步

1. 后续为私有项目补充经脱敏审查的案例页，再开放对应入口。
2. 新增项目时同步检查公开边界、外链与移动端布局。
