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


## Business Implement
### Use json-server to build the DB Server
1. 创建数据文件
```
{
  "users": [
    {
      "name": "何演员",
      "phone": "51223633535",
      "email": "7253265@qq.com",
      "education": "本科",
      "graduationschool": "清华大学",
      "profession": "软件工程",
      "profile": "清华计算机系,在校成绩优异,ACM算法大赛一等奖",
      "id": 3
    },
    {
      "name": "张晓梅",
      "phone": "12273624215",
      "email": "7253265@qq.com",
      "education": "本科",
      "graduationschool": "哈佛大学",
      "profession": "软件工程",
      "profile": "哈佛大学算机系,在校成绩优异,ACM算法大赛一等奖",
      "id": 4
    },
    {
      "name": "六哈哈",
      "phone": "12273633535",
      "email": "7253265@qq.com",
      "education": "本科",
      "graduationschool": "清华大学",
      "profession": "软件工程",
      "profile": "清华计算机系,在校成绩优异,ACM算法大赛一等奖",
      "id": 5
    },
    {
      "name": "杨科",
      "phone": "17636355254",
      "email": "7125372@qq.com",
      "education": "研究生",
      "graduationschool": "江南大学",
      "profession": "影视传媒",
      "profile": "影视传媒第一人",
      "id": 7
    }
  ],
  "companies": [
    {
      "id": 1,
      "name": "阿里巴巴",
      "description": "互联网"
    },
    {
      "id": 2,
      "name": "腾讯",
      "description": "互联网"
    },
    {
      "id": 3,
      "name": "恒大集团",
      "description": "房地产"
    },
    {
      "id": 4,
      "name": "碧桂园",
      "description": "房地产"
    }
  ]
}
```
2. 安装json-server 依赖
```
npm install -g json-server

```
3. 启动db服务
```
 json-server --watch --port 3000 generation.json

```

## 构建Vue组建
### HomeView
### 问题
* 在定义routes 时，导入HomeView 提示找不到模块../views/HomeView.vue
解决方案：
  1. 在src 目录下创建 .d.ts结尾的文件，如vue.d.ts  或  shime.d.ts  等均可。
  2. 添加下边内容至1创建的文件中

```
declare module "*.vue" {
import Vue from "@/vue";
export default Vue;
}         
```
3. 在函数定义外初始化的 route 无效

```
# 报错，route is undefine,the reason need to Analyzes
const route= useRoute();
async mounted() {
    const res = await axios.get("http://localhost:3000/users/" + route.params.id )
    user.value = res.data;
  },
```

4. 关于JS中阻止默认事件-Submit.prevent
5. JS语法中的解构
6. JS中的闭包