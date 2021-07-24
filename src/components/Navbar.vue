<template>
    <nav class="navbar navbar-expand-lg py-0 fixed-top z-index-3"
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
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" @click="isPutColor = !isPutColor">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-0 mb-lg-0 pt-2">
            <!-- <li class="nav-item text-center">
                <router-link to="/index" class="h5 nav-link">首頁</router-link>
            </li> -->
            <li class="nav-item text-center">
                <router-link to="/about" class="h5 nav-link">關於我們</router-link>
            </li>
            <li class="nav-item text-center">
                <router-link to="/products" class="h5 nav-link">產品列表</router-link>
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
              <router-link v-if="cart.carts.length !== 0" to="/cart" class="h4 nav-link">
                <i class=" fas fa-cart-plus"></i>
              </router-link>
              <div class="h4 nav-link" v-if="cart.carts.length === 0">
                <dropdown ref="dropdown"></dropdown>
              </div>
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
import dropdown from '@/components/CartDropdown.vue'
export default {
  components: {
    Canvas,
    dropdown
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
      myFavorite: ''
    }
  },
  methods: {
    getFavorite () {
      this.myFavorite = JSON.parse(localStorage.getItem('MyFavorite')) || []
      // console.log('getFavorite', this.myFavorite)
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
          // console.log('購物車', res)
          console.log(this.cart)
        })
    }
    // payOrder () {
    //   const url = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/pay/${this.orderID}`
    //   this.$http.post(url)
    //     .then(res => {
    //       console.log(res)
    //       if (res.data.success) {
    //         this.getCartList()
    //       }
    //     })
    // }
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
      // this.payOrder()
      this.getCartList()
    })
    this.emitter.on('favorite-qty', () => {
      this.getFavorite()
      // console.log('getFavorite', this.myFavorite.length)
      // console.log('favorite-qty', data.length)
    })
  }
}
</script>

<style lang="scss" scoped>
  $primary-bg:rgba(0, 0, 0,0.1);
  $text-color:#fff;
  $nav-textActive:#eadfa4;
  // $nav-btn-color:#E6c35c;
  .nav-link{
    color: $text-color;
    transition: 0.5s ease-in-out;
    &:hover{
    //  border-bottom: 3px solid $nav-textActive;
      padding-bottom: 3px;
      color:$nav-textActive;
      transform: scale(1.2);
    }
  }
  .nav-btn{
    color: $text-color;
    transition: 0.5s ease-in-out;
    &:hover{
      transform: scale(1.4);
    }
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
