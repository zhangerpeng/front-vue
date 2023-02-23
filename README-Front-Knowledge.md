# Front knowledge
## VUE
### 组建通信
1. 父组件->子组件\
1.1. 父组件通过将数据绑定到子组件的props属性上进行数据的有效传递。\

```
// 子组件的TEMPLATE PART
<template>
<div class="child-container">
    <li class="list-group-item">{{ book.name }}</li>
    <li class="list-group-item">{{ book.author }}</li>
</div>
</template>
```

```
// 子组件声明属性JS PART
export default defineComponent({
  // 启用了类型推导
  name:"BookComponent",
  props: {
    // 解决错误提示 book need a type not a value.使用as进行转化
    book: Object as PropType<IBook>
  },
})
```

父组件中，通过将数据绑定到子组件的属性book上实现数据的传输
```
// JS part
// 要传递给子组件的数据
const bookList: IBook[] = [{
  id:0,
  name: "数学",
  author: "于海"
}, {
  id:1,
  name: "语文",
  author: "余华"
}
]

export default defineComponent({
  // 启用了类型推导
  name: "BooksComponent",
  data() {
     return {
       bookList
     }
  },
  components:{
   // 局部组件注册
    BookComponent
  }
})
```


```
// template part 
<template>
<div class="c-books-container">
  <ul class="list-group" v-for="book in bookList" :key="book.id">
     // 绑定子组件的：book 属性进行数据传输
    <BookComponent :book="book"></BookComponent>
  </ul>
</div>
</template>

```
2. 子组件-》父组件
子组件向父组件的消息传递，依赖子组件触发父组件中的方法句柄，而后进行数据的有效传输。\
key thing: 在子组件中使用this.emit('父组件的绑定事件'，'要传递的数据信息')
```
// 子组件中,点击按钮时间触发方法changeMessage,从而父组件的changeMsg绑定事件从而触发其绑定的方法
<button @click="createNewBook">ChangeMessage</button>

methods:{
    changeMessage() {
      this.$emit("changeMsg","this message from child component")
    }
  }
```

```
// 父组件中的@changMsg，从而调用方法 msgChangByChild
<h1>{{msg}}</h1>
 <ul class="list-group" v-for="book in bookList" :key="book.id">
    <BookComponent :book="book" @changeMsg="msgChangByChild"></BookComponent>
 </ul>
 
 methods:{
    msgChangByChild(cmsg:string){
       this.msg = cmsg;
    }
  },
 
 
```





3. v-for中：key 的作用
在使用v-for进行的数据渲染中，如果有数据发生变更， 
则dom 的底层算法可以确保通过数据列表的key快速定位数据，
只重新渲染变更数据。而不必进行全量的对比判断.

4. SSR与CSR 服务器端的渲染与客户端端的渲染\
4.1. SSR【serve-side-render】
服务器端直接返回一个完整的HTML 给前端浏览器进行解析。
页面上的任何变更都是需要与后台进行交互，从而响应变更。
极大增加了服务器端的压力。同时，因需要传输完整的页面，也加大了网络负载。\
4.2. CSR [client-side-render] 
客户端渲染，就是通过js的方式，当页面状态信息发生变更时，
由客户端进行diff比较，只重新渲染器变更点内容从而减轻服务端的压力。\
[SSR-CSR](https://zhuanlan.zhihu.com/p/60975107)

