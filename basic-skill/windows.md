# windows环境开发经验积累

## WinGet 包管理工具

```bash
winget install

winget upgrade

winget list
```

## powerShell

### 命令行升级 PowerShell

```sh
iex "& { $(irm https://aka.ms/install-powershell.ps1) } -UseMSI"
```

### powershell 脚本执行

* remove-item

### path

将执行文件bin 放到path中
