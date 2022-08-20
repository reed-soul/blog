# 包管理工具

## 文章

* [很多人上来就删除的package-lock.json，还有这么多你不知道的（深度内容）](https://mp.weixin.qq.com/s/9H7T-m0TEwg-WjwAW4cqJA)

## 安装

### node-sass 下载失败 解决方案

在项目根目录下添加一个.npmrc

```js
sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
registry=https://registry.npm.taobao.org
```
