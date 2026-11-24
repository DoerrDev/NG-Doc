# NG-Doc

[NextGestures](https://github.com/DoerrDev/NextGestures) 的使用文档，基于 [VitePress](https://vitepress.dev/) 构建。

在线访问：<https://doerrdev.github.io/NG-Doc/>

## 本地预览

```powershell
npm.cmd ci
npm.cmd run dev
```

打开 <http://127.0.0.1:4175/>。用 `Ctrl + C` 停止预览。

## 构建

```powershell
npm.cmd run build
npm.cmd run preview
```

静态站点会生成到 `.vitepress/dist/`，`preview` 会在同一地址预览构建结果。

> Windows 下请在盘符大写的路径（如 `D:\...`）中构建，小写盘符（`d:\...`）会因路径大小写不一致而构建失败。

## 部署

推送到 `main` 后，GitHub Actions（[docs.yml](.github/workflows/docs.yml)）会自动构建并发布到 GitHub Pages。站点位于子路径 `/NG-Doc/`，对应 [.vitepress/config.mts](.vitepress/config.mts) 里的 `base`；如果改用自定义域名，需把 `base` 改回 `/`。
