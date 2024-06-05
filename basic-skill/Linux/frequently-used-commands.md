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

- 开启端口

```BASH
iptables -A INPUT -p tcp --dport 8080 -j ACCEPT
```

## 解决方案

1. /usr/bin/env: ‘python’: No such file or directory

```sh
 sudo apt install python-is-python3
```

## 提取 code 目录下的所有子仓库，并且保存层级结构

```bash

#!/bin/bash

# 创建一个空的shell脚本文件
echo "#!/bin/bash" > restore_git_repos.sh

# 遍历"code"目录下的所有子目录
find ./code -type d -name ".git" | while read -r gitdir; do
    # 获取父目录路径
    parentdir=$(dirname "$gitdir")
    # 获取相对于"code"目录的路径
    relative_path=${parentdir#./code/}
    # 进入该目录
    cd "$parentdir" || exit
    # 获取远程仓库URL
    remote_url=$(git config --get remote.origin.url)
    # 将创建目录和克隆命令写入"restore_git_repos.sh"文件
    echo "mkdir -p $relative_path" >> ../../restore_git_repos.sh
    echo "git clone $remote_url $relative_path" >> ../../restore_git_repos.sh
    # 返回原始目录
    cd - || exit
done

```
