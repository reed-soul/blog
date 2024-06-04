# windows环境开发经验积累

## WinGet 包管理工具

```bash
winget install

winget upgrade

winget list
```

## powerShell

### powershell 使用代理
    
    ```sh
    $env:http_proxy="http://127.0.0.1:10809 "// v2ray 的http代理  一般是 127.0.0.1:10809
    $env:https_proxy="socks://127.0.0.1:10808 " // v2ray 的http代理  一般是 127.0.0.1:10808
    ```   
 一次性生效，下次打开需要重新输入 可以看 [这里](https://blog.csdn.net/weixin_45637036/article/details/127484977)

### 命令行升级 PowerShell

```sh
iex "& { $(irm https://aka.ms/install-powershell.ps1) } -UseMSI"
```

### powershell 脚本执行

* remove-item

### path

将执行文件bin 放到path中
