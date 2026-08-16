# Fandral / Projects

Fandral 的统一个人项目展厅，面向公开项目体验、开源仓库入口和不暴露内部实现的私有案例介绍。

## 本地预览

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

打开 `http://127.0.0.1:4173/`。

## 发布目标

仓库名称使用 `fandral2008.github.io`，通过 GitHub Pages 发布至：

<https://fandral2008.github.io/>

推送到 `main` 后，`.github/workflows/deploy-pages.yml` 自动发布静态网站。

## 内容边界

- 公开项目可以提供在线体验和源码链接。
- 私有项目只展示能力说明，不提供仓库地址。
- 不在页面中放置真实临床数据、患者图像、身份信息或内部系统截图。
