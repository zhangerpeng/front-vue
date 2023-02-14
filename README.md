# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.


## Vue 项目构建【Vite 需要node version>12.0】
### Vite 是一个web 项目开发构建工具，由其原生的的ES模块导入。快速的热冷启动
```
npm init vite@latest project-name --template vue
```

### 安装初始依赖
```
cd project-name
# 安装项目依赖
npm install 
npm run dev
```

### 添加相关插件
1. axios 
```
npm install axios
```
安装成功后，文件package.json 的dependencies 项目中存在axios

2. vue-router
```
npm install vue-router@next

```
安装成功后，文件package.json 的dependencies 项目中存在vue-router
3. less 【less 是css的预处理语言，其对于css进行了有效的扩充，增加了变量，函数等功能】
```
npm install less -D

```
4. 若项目在创建过程中未及时选中其typescript 选项，可使用命令安装开发插件
```
npm install typescript -D
```
并需要将`vite.config.js` 文件变更为 `vite.config.ts`
```
import { UserConfig } from 'vite'
const path = require('path')
import vue from '@vitejs/plugin-vue'

const config: UserConfig = {
  plugins: [vue()],
  optimizeDeps: {
    include: [ 'axios' ]
  },
  resolve: {
    alias: {
    '/@': path.resolve( __dirname, './src' )
    },
  },
}

export default config
```

5. 集成boostrap5.xx 
```
npm i --save bootstrap @popperjs/core
npm i --save-dev sass
npm i bootstrap-icons
```

5.1. main.ts 文件中导入
```
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css"
```

