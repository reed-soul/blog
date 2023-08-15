# Frequently used commands

## 账号

```sh
# 切换root账号
sudo su
```

## 权限

1. 更改文件所有者 `chown -R 账号:组名 文件或目录`
2. 更改文件目录权限，设置所有者，组，其它用户允许读写执行 `chmod -R 777 *`

## 查看安装目录

```BASH
which node
```

## 端口

* 开启端口

```BASH
iptables -A INPUT -p tcp --dport 8080 -j ACCEPT
```

## 解决方案

1. /usr/bin/env: ‘python’: No such file or directory

```sh
 sudo apt install python-is-python3
```
