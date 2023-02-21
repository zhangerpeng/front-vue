<template>
  <div class="c-detail-view-container">
    <div class="c-detail-view-header">
      <router-link class="btn btn-success" to="/home">返回</router-link>
      <div class="c-detail-view-ed-de">
        <router-link class="btn btn-primary" to="" style="margin-right: 2rem">编辑</router-link>
        <button class="btn btn-danger" @click="delteUser()">删除</button>
      </div>
    </div>

    <div class="c-detail-view-body">
      <ul class="list-group">
        <li class="list-group-item">{{ user.id }}</li>
        <li class="list-group-item">{{ user.name }}</li>
        <li class="list-group-item">{{ user.phone }}</li>
        <li class="list-group-item">{{ user.email }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">

import {onMounted, ref} from "vue";
import {IUser} from "../utils/type";
import {useRoute, useRouter} from "vue-router";
import axios from "axios";

const route = useRoute();
const router = useRouter();

const user = ref<IUser>({
  name: "",
  phone: "",
  emial: "",
  education: "",
  graduationschool: "",
  profession: "",
  profile: "",
  id: 0
});

onMounted(async () => {
  const res = await axios.get("http://localhost:3000/users/" + route.params.id)
  user.value = res.data;
})

const delteUser = async () => {
  await axios.delete('http://localhost:3000/users/' + route.params.id)
  // 页面跳转
  router.push({path:"/home",query:{alert:'用户信息删除成功'}})
}
</script>

<style scoped>
.c-detail-view-header {
  display: flex;
  margin-top: 2rem;
  justify-content: space-between;
  margin-bottom: 2.8rem;
}

.c-detail-view-ed-de {
  display: flex;
  justify-content: flex-end;
}


</style>