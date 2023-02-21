<script setup lang="ts">
</script>

<template>
  <div class="c-app-container">
   <div class="c-app-header">
     <nav style="--bs-breadcrumb-divider: '|';" aria-label="breadcrumb">
       <ol class="breadcrumb" style="--bs-breadcrumb-margin-bottom:0">
         <li class="breadcrumb-item" ><router-link to="/home">HOME</router-link></li>
         <li class="breadcrumb-item"><router-link to="/create">MAIN PAGE</router-link></li>
         <li class="breadcrumb-item active"><router-link to="/">ABOUT US</router-link></li>
       </ol>
     </nav>
     <router-link to="/create" class="btn btn-outline-success">CREATE USER</router-link>
   </div>
    <router-view></router-view>
   </div>
</template>

<style scoped>
.c-app-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3.4rem;
  background: lightgray;
}
</style>
