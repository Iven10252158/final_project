<template>
    <nav class="navbar navbar-expand-lg navbar-dark py-0 fixed-top z-index-3"
    :class="[classList.navBarTop,{'bg-primary': isPutColor}]">
        <div class="container">
        <a class="navbar-brand">
            <router-link to="/" class="text-white fw-bold d-flex align-items-center">
            <img src="../assets/Climbing.svg" width="50" alt="">
            <span class="h3 text-white ps-2 mb-0">CLIMBER</span>
            </router-link>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" @click="isPutColor = !isPutColor">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-0 mb-lg-0 pt-2">
            <li class="nav-item text-center">
                <router-link to="/index" class="h6 nav-link">首頁</router-link>
            </li>
            <li class="nav-item text-center">
                <router-link to="/about" class="h6 nav-link">關於我們</router-link>
            </li>
            <li class="nav-item text-center">
                <router-link to="/products" class="h6 nav-link">產品列表</router-link>
            </li>
        </ul>
        <div class="d-flex justify-content-center">
            <a href="#" class="h4 nav-link" @click.prevent="openCanvas">
              <i class="fas fa-bookmark"></i>
            </a>
             <div class="position-relative">
                <span class="favoriteQty rounded-pill position-absolute badge bg-warning text-white" >
                  {{favoriteNum}}
                </span>
            </div>
            <router-link to="/login" class="h4 nav-link">
                <i class="fas fa-user-alt"></i>
            </router-link>
            <router-link to="/cart" class="h4 fw-bold nav-link">
                <i class=" fas fa-cart-plus"></i>
            </router-link>
            <div class="position-relative" v-if="cart.carts">
                <span class="cartQty rounded-pill position-absolute badge bg-warning text-white" >
                  {{cart.carts.length}}
                </span>
              </div>
            <Canvas ref="canvas"></Canvas>
        </div>
        </div>
        </div>
    </nav>
</template>

<script>

import Canvas from '@/components/Canvas.vue'
export default {
  components: {
    Canvas
  },
  props: ['carts'],
  inject: ['emitter'],
  data () {
    return {
      isPutColor: false,
      cart: {},
      classList: {
        navBarTop: true
      },
      mainFavoritsList: JSON.parse(localStorage.getItem('MyFavorite')) || [],
      favoriteNum: 0
    }
  },
  methods: {
    openCanvas () {
      const data = JSON.parse(localStorage.getItem('MyFavorite')) || []
      this.$refs.canvas.showCanvas(data)
    },
    getCartList () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(api)
        .then(res => {
          this.isLoading = false
          this.cart = res.data.data
          // console.log('購物車', res)
          console.log(this.cart)
        })
    }
  },
  mounted () {
    this.getCartList()
    window.addEventListener('scroll', () => {
    // console.log(window.scrollY)
      const windowY = window.scrollY
      if (windowY > 1) {
        this.classList = {
          navBarTop: 'bg-primary'
        }
      } else {
        this.classList = {
          navBarTop: ''
        }
      }
    })
    this.emitter.on('update-qty', () => {
      this.getCartList()
    })
    this.emitter.on('favorite-qty', (data) => {
      this.favoriteNum = data.length
      console.log('favorite-qty', data.length)
    })
  }
}
</script>

<style lang="scss" scoped>
  .cartQty{
    bottom:35px;
    right:-3px;
  }
  .favoriteQty{
    bottom:35px;
    right:-3px;
  }
</style>
