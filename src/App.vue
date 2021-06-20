
<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto mb-0 mb-lg-0">
          <li class="nav-item">
            <router-link to="/index" class="nav-link fw-bold">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link fw-bold">關於我們</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link fw-bold">產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link fw-bold">登入</router-link>
          </li>
      </ul>
      <div class="d-flex">
        <router-link to="/cart" class="fw-bold">
          <button type="button" class="btn btn-outline-white btn-lg border-0">
            <i class="fas fa-cart-plus"></i>
          </button>
        </router-link>
      </div>
    </div>
  </div>
  </nav>
  <router-view/>
</template>

<style lang="scss">
  @import "./assets/all";
  .nav-link:hover{
    border-radius:5px;
    border: 3px solid #fff; // rgb(25, 77, 51);
    padding: 5px;
  }
</style>
