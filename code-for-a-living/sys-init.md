# 开发环境安装

## 初始化
### 安装 zsh
```shell
sudo apt-get install zsh
```

### 安装 oh-my-zsh
```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# 安装插件
# zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

# zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

```


### 安装git
```shell
sudo apt-get install git
```

### 安装nvm
```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash


# 如果命令找不到，在.bash，或者.zsh添加以下命令
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

```

### lazygit

```shell
LAZYGIT_VERSION=$(curl -s "https://api.github.com/repos/jesseduffield/lazygit/releases/latest" | grep -Po '"tag_name": "v\K[^"]*')
curl -Lo lazygit.tar.gz "https://github.com/jesseduffield/lazygit/releases/latest/download/lazygit_${LAZYGIT_VERSION}_Linux_x86_64.tar.gz"
tar xf lazygit.tar.gz lazygit
sudo install lazygit /usr/local/bin

```

## 常用代码仓库

### self

```shell
#blog
git clone git@github.com:reed-soul/blog.git

#chrome-plugin-monorepo
git clone git@github.com:reed-soul/chrome-plugins-monorepo.git


# work-sutpc
git clone git@github.com:reed-soul/work-sutpc.git

# work-aomi
git clone git@github.com:reed-soul/work-aomi.git


# eslint-plugin-chinese
git clone git@github.com:reed-soul/eslint-plugin-chinese.git

# novels
git clone git@github.com:reed-soul/novels.git

# poems
git clone git@github.com:reed-soul/poems.git 

# LeetCode-Record
git clone git@github.com:reed-soul/LeetCode-Record.git
```

### library

```shell
# easings.net Easing Functions Cheat Sheet
 git clone git@github.com:ai/easings.net.git  


# Orillusion is a pure Web3D rendering engine which is fully developed based on the WebGPU standard.
 git clone git@github.com:Orillusion/orillusion.git 

# CSS-Tip
 git clone git@github.com:Afif13/CSS-Tip.git  

# css-examples
 git clone git@github.com:mdn/css-examples.git

# webgpu
 git clone git@github.com:webgpu/webgpufundamentals.git

# webgpu-for-beginners
 git clone git@github.com:amengede/webgpu-for-beginners.git
 ```