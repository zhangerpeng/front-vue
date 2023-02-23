<template>
<div class="c-books-container">
  <h1>{{msg}}</h1>
  <ul class="list-group" v-for="book in bookList" :key="book.id">
    <BookComponent :book="book" @changeMsg="msgChangByChild"></BookComponent>
  </ul>
</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {IBook} from "./book";
import BookComponent from "./BookComponent.vue";

const bookList: IBook[] = [{
  id:0,
  name: "数学",
  author: "于海"
}
]

export default defineComponent({
  // 启用了类型推导
  name: "BooksComponent",
  data() {
     return {
       bookList,
       msg:''
     }
  },
  methods:{
    msgChangByChild(cmsg:string){
       this.msg = cmsg;
    }
  },
  components:{
    BookComponent
  }
})
</script>

<style scoped>

</style>