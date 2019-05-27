flutter for web 项目环境搭建
=======

> 个人使用习惯原因，操作系统 macos 是flutter使用的的是`flutter for macos` ，终端使用`item2` 样式是`zsh`，编辑器`vscode` 基于上述环境配置

### 安装flutter sdk
 
这里有官方的下载地址[flutter官方官网](https://flutterchina.club/setup-macos/) 考虑到flutter还是在不断更新迭代为了快速跟进新功能并且有时需要查看源码方便所以通过git clone 将仓库clone到本地通过 git checkout 控制flutter的版本
```shell
// 下载flutter sdk
git clone -b master https://github.com/flutter/flutter.git

// 指定flutter 运行版本
git checkout v1.6.3
```

### 配置环境变量

```
// 设置zshrc的配置文件
vim .zshrc

// 添加环境变量
export PATH_TO_FLUTTER_GIT_DIRECTORY=/Users/qiushi/worksplace/flutter // 设置flutter sdk 本地地址
export PUB_HOSTED_URL=https://pub.flutter-io.cn //国内用户需要设置
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn //国内用户需要设置
export PATH=PATH_TO_FLUTTER_GIT_DIRECTORY/flutter/bin:$PATH

// 使环境变量生效
source ~/.zshrc
```

### vscode 安装插件
添加vscode的扩展插件  flutter
Visual Studio Code (VS Code) 安装
VS Code: 轻量级编辑器，支持Flutter运行和调试.
```
// 安装 VS Code
VS Code, 安装1.20.1或更高版本.
// 安装Flutter插件
1.启动 VS Code
2. 调用 View>Command Palette… 或 F1
3. 输入 `install extension`,
4. 在搜索框输入 flutter , 在搜索结果列表中选择 ‘Flutter’, 然后点击 Install
5. 选择 ‘OK’ 重新启动 VS Code
// 通过Flutter Doctor验证您的设置
1. 调用 View>Command Palette… 
2. 输入 ‘doctor’, 然后选择 ‘Flutter: Run Flutter Doctor’ action
3. 查看“OUTPUT”窗口中的输出是否有问题

``` 


    

