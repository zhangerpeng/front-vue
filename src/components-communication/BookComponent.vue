<template>
<div class="child-container">
    <li class="list-group-item">{{ book.name }}</li>
    <li class="list-group-item">{{ book.author }}</li>
</div>
<div>
  <h1>添加新的书籍</h1>
  <label>name</label> <input type="text" v-model="newBook.name"/>
  <br>
  <label>author</label><input type="text" v-model="newBook.author"/>
  <br>
  <button @click="changeMessage">ChangeMessage</button>
</div>
</template>
<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {IBook} from "./book";
const newBook:IBook= {
  name: '',
  author: ''
}
export default defineComponent({
  // 启用了类型推导
  name:"BookComponent",
  props: {
    book: Object as PropType<IBook>
  },

  data(){
    return {
      newBook
    }
  },
  methods:{
    changeMessage() {
      this.$emit("changeMsg","this message from child component")
    }
  }
})

</script>
<style scoped>

</style>