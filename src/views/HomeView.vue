<template>
  <div class="c-home-view">
    <table class="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">name</th>
        <th scope="col">phone</th>
        <th scope="col">emial</th>
        <th scope="col">education</th>
        <th scope="col">graduationschool</th>
        <th scope="col">profile</th>
        <th scope="col"><font size="0.2rem">USER DETAIL</font></th>
      </tr>
      </thead>
      <tbody>

      <tr v-for="user of users" :key="user.id">
        <th scope="row">{{ user.id }}</th>
        <td>{{ user.name }}</td>
        <td>{{ user.phone }}</td>
        <td>{{ user.emial }}</td>
        <td>{{ user.education }}</td>
        <td>{{ user.graduationschool }}</td>
        <td>{{ user.profile }}</td>
        <td>
          <router-link :to="'/details/' + user.id">详细</router-link>
        </td>
      </tr>
      </tbody>
    </table>

  </div>

</template>

<script lang="ts">
import {IUser} from "../utils/type";

const users = ref<IUser[]>([]);

import {defineComponent, ref} from "vue";
import axios from "axios";

export default defineComponent({
  name: "HomeView",
  data() {
    return {
      users
    }
  },
  async mounted() {
    const res = await axios.get("http://localhost:3000/users")
    console.info(res);
    users.value = res.data;
  }

})

</script>

<style scoped>
.c-home-view {
  display: flex;
}
</style>