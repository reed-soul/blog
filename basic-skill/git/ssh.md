# SSH

## 生成公钥

```shell
ssh-keygen -m PEM -t ed25519 -C "lsqup0702@hotmail.com"  // 创建新的 SSH 私钥与公钥密钥对，输入你的邮箱作为标签
Enter file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]  // 推荐使用默认地址
Enter passphrase (empty for no passphrase):  // 此处直接回车即可；若设置密码，则每次使用 SSH 方式推送代码时都会要求输入密码
Enter same passphrase again:  // 同前，此处直接回车即可

```


若你需要使用多个 SSH 密钥对，在 Enter file in which to save the key 步骤时，输入一个新的文件名称就可以避免覆盖已有的密钥对

## 添加 SSH 公钥
对应.pub后缀文件的内容即为公钥，将其添加到你的 GitLab 或 GitHub 账户中

```shell
cat ~/.ssh/id_ed25519.pub  // 查看公钥内容
```

## 如何有多个 SSH 密钥对时，需要配置config文件

```shell
touch ~/.ssh/config  // 创建config文件
```

```shell

# gitlab
Host gitlab.com
  HostName gitlab.com
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/id_ed25519

# github
Host github.com
  HostName github.com
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/id_ed25519_github

```