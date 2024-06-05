# wsl2日常使用

## 使用指南

WSL2 可以让您在 Windows 上运行 Linux 环境，方便您进行前端开发。以下是一个可能的 WSL2 的日常使用指南：

- 安装 WSL2。您可以参考[这篇文章](https://learn.microsoft.com/en-us/windows/wsl/install)来了解如何在 Windows 10 或 11 上安装 WSL2。
- 选择一个 Linux 发行版。WSL2 支持多种 Linux 发行版，如 Ubuntu、Debian、Fedora 等。您可以从 Microsoft Store 中下载并安装您喜欢的发行版。
- 设置 WSL2 的默认用户和密码。当您第一次启动 WSL2 时，它会要求您创建一个默认用户和密码，这将用于登录和执行 sudo 命令。
- 更新 WSL2 的系统和软件包。为了保持 WSL2 的稳定性和安全性，建议您定期更新系统和软件包。您可以使用 apt 命令来执行更新操作，例如：

sudo apt update
sudo apt upgrade

- 安装前端开发所需的工具和环境。根据您的开发需求，您可能需要安装不同的工具和环境，如 Node.js、npm、yarn、webpack、React 等。您可以使用 apt 命令或其他方式来安装它们，例如：

sudo apt install nodejs
sudo apt install npm
npm install -g yarn
yarn global add webpack
npx create-react-app my-app

- 配置 Visual Studio Code 或 Visual Studio 来连接 WSL2。如果您想使用 Visual Studio Code 或 Visual Studio 来编辑和调试代码，那么您需要安装相应的扩展或组件来连接 WSL2，并在其中打开文件夹或项目。例如：

- 对于 Visual Studio Code，您需要安装 Remote - WSL 扩展，并在左下角的状态栏中选择 “Open Folder in WSL” 或 “Open Workspace in WSL”。
- 对于 Visual Studio 2019 或更高版本，您需要安装 C++/C# for Linux Development 组件，并在创建或打开项目时选择 “Linux Console Application” 或 “Linux Dynamic Library”。

- 配置 Git 和 Windows 凭据管理器来管理代码版本和身份验证。如果您想使用 Git 来管理代码版本并与远程仓库交互，那么您需要在 WSL2 中配置 Git，并使用 Windows 凭据管理器来存储凭据信息。例如：

git config --global user.name "Your Name"
git config --global user.email "Your Email"
git config --global credential.helper "/mnt/c/Program\ Files/Git/mingw64/libexec/git-core/git-credential-manager.exe"

- 配置数据库如 MongoDB 或 MySQL 来存储数据。如果您的前端开发涉及到数据库操作，那么您需要在 WSL2 中配置数据库，并设置相应的连接字符串和权限。例如：

sudo apt install mongodb
sudo service mongodb start
mongo --eval 'db.runCommand({ connectionStatus: 1 })'
mongo -u root -p password

以上就是一个简单的 WSL2 的日常使用指南，希望对你有帮助。

源: 与必应的对话， 2023/3/21(1) Set up a WSL development environment | Microsoft Learn. <https://learn.microsoft.com/en-us/windows/wsl/setup/environment> 访问时间 2023/3/21.
(2) Windows Subsystem for Linux Documentation | Microsoft Learn. <https://learn.microsoft.com/en-us/windows/wsl/> 访问时间 2023/3/21.
(3) WSL2: The Complete Guide for Windows 10 & 11 — SitePoint. <https://www.sitepoint.com/wsl2/> 访问时间 2023/3/21.



## WSL代理配置(NAT&镜像)

### NAT
WSL目前主要有NAT和Mirror两种方式实现对外部的网络连接, 前者在大多数虚拟机中都用使用, 仅需在~/.bashrc文件中添加相应的环境变量即可(将下面的IP地址和端口号替换为自己的即可).

注意完成对~/.bashrc文件的修改之后, 通过source ~/.bashrc命令执行使配置生效.

```sh
hostip=$(cat /etc/resolv.conf |grep -oP '(?<=nameserver\ ).*')
export https_proxy="http://${hostip}:10809"
export http_proxy="http://${hostip}:10809"
export all_proxy="socks5://${hostip}:10808

```

但是需要注意的是, 采用NAT方案的确能够在WSL中直接使用宿主机提供的代理. 但是由于NAT屏蔽了内网信息, 因此从外部是无法直接访问WSL的, 这对于将WSL用作服务器的场景非常致命.

### 镜像
此时可采用WSL2提供的镜像网络, 此方法不需要将WSL作为宿主机的局域网成员, 而使用完全相同的IP地址, 理论上只要宿主机能够连接被其他网络发现, WSL也必然能够被发现. 相应的配置也非常简单, 在用户根目录(C:\Users\<username>)下创建.wslconfig文件, 并在其中写入networkingMode=mirrored即可.

注意配置之前需要先将WSL关闭, 相应命令为wsl --shutdown.

```sh
# Settings apply across all Linux distros running on WSL 2
[wsl2]
# Limits VM memory to use no more than 4 GB, this can be set as whole numbers using GB or MB
memory=16GB
# Sets the VM to use two virtual processors
processors=8
[experimental]
autoMemoryReclaim=gradual # 开启自动回收内存，可在 gradual, dropcache, disabled 之间选择
networkingMode=mirrored # 开启镜像网络
dnsTunneling=true # 开启 DNS Tunneling
firewall=true # 开启 Windows 防火墙
autoProxy=true # 开启自动同步代理
sparseVhd=true # 开启自动释放 WSL2 虚拟硬盘空间
```
之后直接在WSL中将代理设置为本地即可(端口号根据代理客户端的不同请自行修改), 完成之后即可正常使用代理访问外部网络.

```sh
hostip=$(cat /etc/resolv.conf |grep -oP '(?<=nameserver\ ).*')
export https_proxy="http://${hostip}:10809"
export http_proxy="http://${hostip}:10809"
export all_proxy="socks5://${hostip}:10808

```

### 测试

请注意, 部分网址因为各种原因无法回应ICMP回显请求, 因此可能ping不通, 但是实际上代理已经配置完成, 推荐使用curl google.com命令进行测试, 出现下面结果表示代理配置成功.

## 如何在手机上访问 WSL 中的 node 服务

### 问题描述

- 在 Windows 11 中，使用 WSL 运行了一个 node 服务，端口为 3005
- 想用手机访问该端口，手机和电脑在同一局域网
- 但是却访问不通，提示连接超时或拒绝

### 原因分析

- WSL 2 有一个虚拟的以太网适配器，它有自己独特的 IP 地址
- 手机无法直接访问 WSL 的 IP 地址，需要通过 Windows 的 IP 地址进行转发

### 解决方法

- 在 Windows 上打开端口，并设置端口代理
- 在 PowerShell 中以管理员权限运行以下命令：

```sh
netsh interface portproxy add v4tov4 listenport=3005 listenaddress=0.0.0.0 connectport=3005 connectaddress=192.168.x.x
```

其中，connectaddress 是 WSL 2 的 IP 地址，可以用 ifconfig 命令查看

- 然后在手机上输入 Windows 的 IP 地址和端口号（如 <http://192.168.y.y:3005）即可访问> node 服务

### 参考资料

- [Accessing network applications with WSL | Microsoft Learn](https://learn.microsoft.com/en-us/windows/wsl/networking)
- [WSL を使用したネットワーク アプリケーションへのアクセス ...](https://learn.microsoft.com/ja-jp/windows/wsl/networking)
- [node.js - WSL2, Cannot reach localhost nodejs server on ...](https://stackoverflow.com/questions/63393092/wsl2-cannot-reach-localhost-nodejs-server-on-windows-browser)

```
