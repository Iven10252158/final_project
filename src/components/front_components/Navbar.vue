<template>
    <nav class="navbar navbar-expand-lg py-0 navbar-dark fixed-top z-index-3"
      :class="[{'bg-primary':classList.navBarTop}]">
        <div class="container">
            <h1 class="logo navbar-brand mb-0">
                <router-link to="/" class="mb-0 text-white fw-bold d-flex align-items-center" @click="closeNav">
                    <img src="@/assets/Climbing.svg" width="50" alt="CLIMBERLogo">
                    <h3 class="text-white ps-2 mb-0">CLIMBER</h3>
                </router-link>
            </h1>
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" @click="openNav">
                  <span class="navbar-toggler-icon"></span>
            </button>
          <div class="navbar-collapse" :class="{ active : toggleNav }">
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
                    <a href="#" class="h4 nav-link" @click.prevent="openCanvas">
                        <i class="fas fa-bookmark"></i>
                    </a>
                  <div class="position-relative" v-if="myFavorite">
                      <span class="navBarQty rounded-pill position-absolute badge bg-warning text-white" >
                        {{ myFavorite.length }}
                      </span>
                  </div>
                  <div v-if="cart.carts">
                      <router-link v-if="cart.carts.length !== 0" to="/cart" class="h4 nav-link" @click="closeNav">
                          <i class=" fas fa-cart-plus"></i>
                      </router-link>
                      <a href="#" v-if="cart.carts.length === 0">
                          <Dropdown ref="dropdown" class="h4 nav-btn"></Dropdown>
                      </a>
                  </div>
                  <div class="position-relative" v-if="cart.carts">
                      <span class="navBarQty rounded-pill position-absolute badge bg-warning text-white" >
                        {{ cart.carts.length }}
                      </span>
                  </div>
                  <Canvas ref="canvas"></Canvas>
              </div>
          </div>
        </div>
    </nav>
</template>

<script>
import Canvas from '@/components/front_components/Canvas.vue'
import Dropdown from '@/components/front_components/CartDropdown.vue'
export default {
  components: {
    Canvas,
    Dropdown
  },
  props: ['carts'],
  inject: ['emitter'],
  data () {
    return {
      cart: {},
      classList: {
        navBarTop: false
      },
      mainFavoritsList: JSON.parse(localStorage.getItem('MyFavorite')) || [],
      myFavorite: '',
      toggleNav: false
    }
  },
  methods: {
    openNav () {
      if (window.innerWidth < 992) {
        this.toggleNav = !this.toggleNav
      }
    },
    closeNav () {
      if (window.innerWidth < 992) {
        this.toggleNav = false
      }
    },
    getFavorite () {
      this.myFavorite = JSON.parse(localStorage.getItem('MyFavorite')) || []
    },
    openCanvas () {
      const data = JSON.parse(localStorage.getItem('MyFavorite')) || []
      console.log('openCanvas', data)
      this.$refs.canvas.showCanvas(data)
    },
    getCartList () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(api)
        .then(res => {
          if (res.data.success) {
            this.isLoading = false
            this.cart = res.data.data
          }
        }).catch(err => {
          this.$swal({
            icon: 'error',
            title: `${err.data.message}`
          })
        })
    }
  },
  mounted () {
    this.getFavorite()
    this.getCartList()
    window.addEventListener('scroll', () => {
      const windowY = window.scrollY
      if (windowY > 1) {
        this.classList = {
          navBarTop: true
        }
      } else {
        this.classList = {
          navBarTop: false
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
  unmounted () {
    // 為了提升效能所以有用 emitter.on ＆  window.addEventListener，就要再unmounted來移除事件
    window.removeEventListener('scroll', () => {
      const windowY = window.scrollY
      if (windowY > 1) {
        this.classList = {
          navBarTop: true
        }
      } else {
        this.classList = {
          navBarTop: false
        }
      }
    })
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
$primary-pc-bg:#4d695d;
$primary-bg:rgba(0, 0, 0,0.1);
$text-color:#fff;
$nav-textActive:#ede2a6;
    .nav-link{
      position: relative;
      color: $text-color;
      transition: 0.25s linear;
      &::before{
        content: "";
        width: 0%;
        height: 100%;
        display: block;
        position: absolute;
        border-bottom: 2px solid $nav-textActive;
        top: 0;
        left: 0;
        transition: all .3s ease;
        }
      &:hover {
        color:$nav-textActive;
        &::before {
          width: 100%;
        }
      }
    }
    .nav-btn{
      transition: 0.5s ease-in-out;
      background-color:transparent;
        &:hover{
        transform: scale(1.2);
        }
    }
    .navbar-collapse{
      @media(max-width: 992px){
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease-in-out;
      }
    }
    .active{
        max-height: 300px;
      }
    .navbar{
      background-color: $primary-bg;
      @media (max-width: 992px) {
        background-color: $primary-pc-bg;
      }
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
