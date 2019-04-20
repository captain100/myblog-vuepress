### 使用typescript 开发npm包

#### 为什么要用typescript 编写函数库
typescript是由类型定义的JavaScript的超级，使用typescript编写函数库，不仅可是使开发者带来开发效率的提高和静态检查的好处，还能对使用方带来用户开发体现

#### 开发步骤
```javascript
// 1、创建项目文件
mkdir npm-ts-demo
// 2、初始化 npm 引入package.json
npm init
// 3、配置tsconfig.json
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "moduleResolution": "node",
        "outDir": "dist/cmjs",
        "rootDir": "./src",
        "declaration": true,
        "sourceMap": true,
        "lib": ["dom", "es6"]
    },
}
// 4、设置执行指令和外部引用
修改package.json 文件a
  "main": "dist/cmjs/index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build:cmjs": "tsc -P tsconfig.json",
    "build:es6": "tsc -P tsconfig.json --module ES6 --outDir dist/es6",
    "clear": "rm -rf dist/",
    "build": "npm run clear; npm run build:cmjs; npm run build:es6"
  },  
// 5、 npm link 调试

// 6、 发布

```