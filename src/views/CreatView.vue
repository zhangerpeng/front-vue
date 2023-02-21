<template>
  <div class="c-create-container">
    <form @submit.prevent="createUser">
      <div class="row mb-3">
        <label for="inputId" class="col-sm-2 col-form-label">Id</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputId" v-model="user.id">
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputName" class="col-sm-2 col-form-label">name</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputName" v-model="user.name">
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputPhone" class="col-sm-2 col-form-label">phone</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputPhone" v-model="user.phone">
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputEmail" class="col-sm-2 col-form-label">email</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputEmail" v-model="user.email">
        </div>
      </div>

      <div class="row mb-3">
        <label for="inputEducation" class="col-sm-2 col-form-label">education</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputEducation" v-model="user.education">
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputGraduationschool" class="col-sm-2 col-form-label">graduationschool</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputGraduationschool" v-model="user.graduationschool">
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputProfession" class="col-sm-2 col-form-label">profession</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputProfession" v-model="user.profession">
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">

import {ref} from "vue";
import {IUser} from "../utils/type";
import axios from "axios";
import {useRoute, useRouter} from "vue-router";

const route = useRoute();
const router = useRouter();

const user = ref<IUser>({
  name: "",
  phone: "",
  email: "",
  education: "",
  graduationschool: "",
  profession: "",
  profile: "",
  id: 0
});

const createUser = async () => {
  let newUser = {
    name: user.value.name,
    phone: user.value.phone,
    email: user.value.email,
    education: user.value.education,
    graduationschool: user.value.graduationschool,
    profession: user.value.profession,
    profile: user.value.profile,
    id: user.value.id
  }
  await axios.post("http://localhost:3000/users", newUser)
  // 页面跳转，并添加参数
  router.push({path:"/home",query:{alert:'用户信息添加成功'}})
}

</script>

<style scoped>
.c-create-container {
  margin-top: 2rem;
}

</style>