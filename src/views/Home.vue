<template>
<!-- <div class="container">
<div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</div> -->
<nav class="navbar navbar-expand-lg bg-primary py-0 fixed-top">
    <div class="container">
      <a class="navbar-brand">
        <router-link to="/index" class="text-white fw-bold">
        <img src="../assets/Climbing.svg" width="50" alt="">
        </router-link>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto mb-0 mb-lg-0 pt-2">
          <li class="nav-item">
            <router-link to="/index" class="h6 nav-link">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="h6 nav-link">關於我們</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="h6 nav-link">產品列表</router-link>
          </li>
      </ul>
      <div class="d-flex">
          <router-link to="/login" class="h4 nav-link">
            <!-- <button type="button" class="loginBtn btn me-2"> -->
              <i class="fas fa-user-alt"></i>
            <!-- </button> -->
          </router-link>
        <router-link to="/cart" class="h4 fw-bold nav-link">
          <!-- <button type="button" class="cartBtn btn"> -->
            <i class=" fas fa-cart-plus"></i>
          <!-- </button> -->
        </router-link>
      </div>
    </div>
    </div>
</nav>
<router-view></router-view>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="scss">
  .nav-link{
    color: #fff; //#000;
   &:hover{
     border-bottom: 3px solid #000; // rgb(25, 77, 51);
     padding-bottom: 3px;
    }
  }
</style>
