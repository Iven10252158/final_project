<template>
  <nav class="navbar navbar-expand-lg py-0 navbar-dark fixed-top z-index-3"
  :class="[classList.navBarTop,{'bg-primary': isPutColor}]">
    <div class="container">
      <a href="#" class="navbar-brand">
        <router-link to="/" class="text-white fw-bold d-flex align-items-center">
        <h1 class="logo mb-0">
          <img src="../assets/Climbing.svg" width="50" alt="">
        </h1>
        <h3 class="text-white ps-2 mb-0">CLIMBER</h3>
        </router-link>
      </a>
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" @click="openNav">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" :class="[ toggleNav ? 'show' :'' ] " id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-0 mb-lg-0 pt-2">
          <li class="nav-item text-center">
              <router-link to="/about" class="h5 nav-link" @click="closeNav">關於我們</router-link>
          </li>
          <li class="nav-item text-center">
              <router-link to="/products" class="h5 nav-link" @click="closeNav">產品列表</router-link>
          </li>
          <li class="nav-item text-center">
              <router-link to="/articles" class="h5 nav-link" @click="closeNav">登山小知識</router-link>
          </li>
        </ul>
        <div class="d-flex justify-content-center mt-2">
          <a href="#" class="h4 nav-link nav-btn" @click.prevent="openCanvas">
            <i class="fas fa-bookmark"></i>
          </a>
          <div class="position-relative" v-if="myFavorite">
            <span class="navBarQty rounded-pill position-absolute badge bg-warning text-white" >
              {{ myFavorite.length }}
            </span>
          </div>
          <!-- <router-link to="/login" class="h4 nav-link">
              <i class="fas fa-user-alt"></i>
          </router-link> -->
          <div v-if="cart.carts">
            <router-link v-if="cart.carts.length !== 0" to="/cart" class="h4 nav-link nav-btn">
              <i class=" fas fa-cart-plus"></i>
            </router-link>
            <a href="#" class="h4 nav-link" v-if="cart.carts.length === 0">
              <Dropdown ref="dropdown"></Dropdown>
            </a>
          </div>
          <div class="position-relative" v-if="cart.carts">
            <span class="navBarQty rounded-pill position-absolute badge bg-warning text-white" >
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
import Dropdown from '@/components/CartDropdown.vue'
export default {
  components: {
    Canvas,
    Dropdown
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
      myFavorite: '',
      toggleNav: false
    }
  },
  methods: {
    openNav () {
      this.isPutColor = !this.isPutColor
      this.toggleNav = !this.toggleNav
    },
    closeNav () {
      this.isPutColor = !this.isPutColor
      this.toggleNav = false
    },
    getFavorite () {
      this.myFavorite = JSON.parse(localStorage.getItem('MyFavorite')) || []
    },
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
        })
    }
  },
  mounted () {
    this.getFavorite()
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
    this.emitter.on('favorite-qty', () => {
      this.getFavorite()
    })
  },
  numounted () {
    this.emitter.off('update-qty', () => {
      this.getCartList()
    })
    this.emitter.off('favorite-qty', () => {
      this.getFavorite()
    })
  }
}
</script>

<style lang="scss" scoped>
$primary-bg:rgba(0, 0, 0,0.1);
$text-color:#fff;
$nav-textActive:#eadfa4;
  .nav-link{
    color: $text-color;
    transition: 0.5s ease-in-out;
    &:hover{
      padding-bottom: 3px;
      transform: scale(1.2);
    }
  }
  .navbar-collapse{
    transition: 0.3s ease-in-out;
  }

  .navbar{
    background-color: $primary-bg;
  }
  .navBarQty{
    bottom:35px;
    right:-3px;
  }
  .logo{
    img{
      display: block;
      text-indent: 101%;
      overflow: hidden;
      white-space: nowrap;
    }
  }
</style>
