<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import 장바구니 from './views/장바구니.vue'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/home2">Home2</RouterLink>
        <RouterLink to="/deCoffee">deCoffee</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/post">Post</RouterLink>        
      </nav>
    </div>
  </header>
  <RouterView />
  <!-- <장바구니쓰/> -->
</template>

<style scoped>
header{
  display: flex;
  flex-direction: column;
  align-items: center;
}
a{
  margin-left: 10px;
  font-size: 20px;
}
</style>
