<template>
    <Loading :active="isLoading">
        <div class="loadingio-spinner-dual-ring-7s087i3q3b3"><div class="ldio-us6frdv3wm">
        <div></div><div><div></div></div>
        </div></div>
    </Loading>
    <!-- header -->
    <div class="banner bg-cover d-flex justify-content-center align-items-center" style="background-image:url('https://storage.googleapis.com/vue-course-api.appspot.com/iven_vue3_course/1627615134814.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=PMQQk6pbNyAtESd828Cny9woEZ6Z3b2zWk5CvL04q9Ymf4cS9dK6abpugaCOA4l0rrSlBL2lARn5myoJdFoNEaqo5FUrgu8FybI1I%2FRsfMQiy%2FpnZDbslgso0nyiz1Tbxh3sgD6rDHYj68ihIjjja4BxJWG%2F%2BgNreqRBRF0KTOwThcMyLCK5JrypKIwRbi7tM%2BUdX435WTxZM65fwRq3ak2DX%2BmDHTL8k3TPEvQtK6Qg3Sp3egqI3MgFqikG%2F8WDkm%2B3wcXFgtmBaS671l36XPehn%2BMFWLr%2F3ewlVio0G2pge6WDcL8HM70SOYHvJsBsErNxUCephQkDQaw9eVCUIw%3D%3D');height:500px">
        <div class="banner-text text-white">
            <div class="fs-1">產品列表</div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="mt-4">
                    <input type="text" class="form-control rounded-1" placeholder="請輸入關鍵字" v-model="search"
                    @input="searchProduct(search)">
                </div>
                <div class="row sticky-md-top">
                    <div class="mt-3">
                        <ul class="list-group pe-auto siderBarLeft rounded-1" :class="siderBarLeft.beLeft">
                            <li class="list-group-item list-group-item-action" @click="changeProduct(item,index)"
                            :class="{'bg-primary':'total' === productValue , 'text-white':'total' === productValue}">
                            全部商品
                            </li>
                            <li class="list-group-item list-group-item-action" v-for="(item, index) in productName" :key="index"
                            @click="changeProduct(item)" :class="{'bg-primary':item === productValue, 'text-white':item === productValue }">{{ item }}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-9">
                <div class="row">
                  <div class="col-md-6 col-xl-4 my-4" v-for="item in typeProduct" :key="item.id">
                    <div class="card h-100">
                      <div class="bg-cover product_image position-relative" :style="{backgroundImage:'url(' +item.imageUrl+ ')',height:'200px' }">
                        <router-link class="mask text-white text-center fs-4 fw-bold position-absolute" :to="`/product/${ item.id }`">
                            查看更多
                        </router-link>
                      </div>
                      <div class="card-body pb-2">
                        <h6 class="card-title text-hidden">
                          <router-link class="text-grey products_title" :to="`/product/${item.id}`">
                            {{ item.title }}
                          </router-link>
                        </h6>
                        <div class="card-text d-flex justify-content-between" >
                          <div v-if="item.origin_price !== item.price">
                            <del class="text-primary">NT{{ $filters.currency(item.origin_price) }}</del>
                          </div>
                            <h6 class="text-color">NT {{ $filters.currency(item.price) }}</h6>
                        </div>
                        <div class="d-flex justify-content-between mt-3">
                          <button type="button" class="styleBtn favoBtn btn btn-outline-favorite border-0 ps-0"
                            @click="addMyFavorite(item)">
                            <span v-if="myFavorite.includes(item.id)">
                              <i class="fas fa-heart"></i>
                            </span>
                            <span v-else>
                              <i class="far fa-heart"></i>
                            </span>
                          </button>
                          <button type="button" class="styleBtn cartBtn btn btn-outline-primary border-0 pe-0"
                            @click="addToCart(item)" :class="{'disabled':productId.includes(item.id)}">
                            <span v-if="productId.includes(item.id)">
                              <i class="fas fa-shopping-cart"></i>
                            </span>
                            <span v-else>
                              <i class="fas fa-cart-plus"></i>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <Pagination :pages="pagination" @change-page="getProducts"></Pagination>
        </div>
    </div>
    <Footer/>
    <router-view></router-view>
</template>

<script>
import Pagination from '@/components/Pagination.vue'
import Footer from '@/components/front_components/Footer.vue'

// localStorage轉型
const storageMethods = {
  setItem (MyFavorite) {
    const favoriteString = JSON.stringify(MyFavorite)
    localStorage.setItem('MyFavorite', favoriteString)
  },
  getItem () {
    return JSON.parse(localStorage.getItem('MyFavorite'))
  }
}

export default {
  inject: ['emitter'],
  components: {
    Pagination,
    Footer
  },
  data () {
    return {
      num: 1,
      allProducts: [],
      products: [],
      productId: [],
      pagination: {},
      cart: [],
      typeProduct: [],
      productName: [],
      productValue: '',
      isLoading: false,
      search: '',
      // 讀取localStorage的內容
      // myFavorite有東西的話就讀取，沒東西的話讀空陣列
      myFavorite: storageMethods.getItem() || [],
      siderBarLeft: {
        beLeft: true
      }

    }
  },
  methods: {
    getFavorite () {
      this.myFavorite = storageMethods.getItem() || []
    },
    addMyFavorite (item) {
      if (this.myFavorite.includes(item.id)) {
        this.myFavorite.splice(this.myFavorite.indexOf(item.id), 1)
        storageMethods.setItem(this.myFavorite)
        this.$swal({ icon: 'warning', title: '已從最愛中移除' })
      } else {
        this.myFavorite.push(item.id)
        storageMethods.setItem(this.myFavorite)
        this.$swal({ icon: 'success', title: '儲存成功！' })
      }
      this.emitter.emit('favorite-qty')
    },
    getAllProducts () {
      this.$http.get(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/products/all`)
        .then(res => {
          if (res.data.success) {
            this.allProducts = res.data.products
          }
        }).catch(err => {
          this.$swal({
            icon: 'error',
            title: `${err.data.message}`
          })
        })
    },
    searchProduct (value) {
      this.productValue = 'total'
      this.typeProduct = this.allProducts.filter(item => {
        if (item.title.match(value)) {
          return item
        }
        this.productValue = ''
      })
    },
    changeProduct (item) {
      this.typeProduct = this.products.filter((element, index) => {
        if (item === element.category) {
          this.productValue = item
          return element
        } else if (item === undefined) {
          this.productValue = 'total'
          return this.products
        }
      })
    },
    getProducts (page = 1) {
      this.isLoading = true
      this.$http.get(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/products?page=${page}`)
        .then(res => {
          if (res.data.success) {
            this.isLoading = false
            const { products, pagination } = res.data
            this.products = products
            // 為了讓一進到產品列表就有產品資料
            this.typeProduct = this.products
            this.pagination = pagination
            this.products.filter(item => {
              if (this.productName.indexOf(item.category) === -1) {
                this.productName.push(item.category)
              }
            })
          }
        }).catch(err => {
          this.$swal({
            icon: 'error',
            title: `${err.data.message}`
          })
        })
    },
    addToCart (item, qty = 1) {
      this.isLoading = true
      const cart = {
        product_id: item.id,
        qty
      }
      this.$http.post(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`, { data: cart })
        .then(res => {
          if (res.data.success) {
            this.isLoading = false
            this.getCartList()
            this.cart = res.data.data
            this.$swal({
              icon: 'success',
              title: `${res.data.data.product.title} <br/>${res.data.message}`
            })
            this.emitter.emit('update-qty')
          }
        }).catch(err => {
          this.$swal({
            icon: 'error',
            title: `${err.data.message}`
          })
        })
    },
    getCartList () {
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(api)
        .then(res => {
          if (res.data.success) {
            this.cart = res.data.data
            this.cart.carts.forEach(item => {
              this.productId.push(item.product_id)
            })
          }
        }).catch(err => {
          this.$swal({
            icon: 'error',
            title: `${err.data.message}`
          })
        })
    }
  },
  unmounted () {
    // 有使用emitter.on接收資料時，就要在unmounted使用emitter.off關閉資料接收
    this.emitter.off('remove-data', (data) => {
      this.getFavorite()
    })
    window.removeEventListener('scroll', () => {
      const windowY = window.scrollY
      if (windowY > 395) {
        this.siderBarLeft = {
          beLeft: 'pt-6'
        }
      } else {
        this.siderBarLeft = {
          beLeft: ''
        }
      }
    })
  },
  mounted () {
    this.getAllProducts()
    this.getCartList()
    this.emitter.on('remove-data', (data) => {
      this.getFavorite()
    })
    this.emitter.emit('favorite-qty', this.myFavorite)
    this.getProducts()
    this.productValue = 'total'
    window.addEventListener('scroll', () => {
      // console.log(window.scrollY)
      const windowY = window.scrollY
      if (windowY > 395) {
        this.siderBarLeft = {
          beLeft: 'pt-6'
        }
      } else {
        this.siderBarLeft = {
          beLeft: ''
        }
      }
    })
  }
}
</script>

<style lang="scss" scoped>
$banner-text-bg-color:rgba(0, 0, 0,0.3);
$Maintext-color:#fff;
$text-color:#e35d6a;
$hover-color:#E6c35c;
    @keyframes shake{
      15%{
      transform: translateY(-10px);
      }
      30% {
      transform: translateY(0px);
      }
      45% {
      transform: translateY(-10px);
      }
      60% {
      transform: translateY(0px);
      }
      75% {
      transform: translateY(-5px);
      }
      90% {
      transform: translateY(-2px);
      }
      100% {
      transform: translateY(0px);
      }
    }
    .text-color{
      color:$text-color;
    }
    .products_title{
      &:hover{
        text-decoration: underline;
      }
    }
    .favoBtn{
      font-size: 24px;
      &:hover{
        animation:shake 1s ;
      }
    }
    .styleBtn{
      border:transparent;
      &:hover{
        background-color: transparent;
        color: $hover-color ;
        border:transparent;
      }
    }
    .cartBtn{
      border:transparent;
      font-size: 24px;
      transition: all .3s ease-in-out;
      &:hover{
        border:transparent;
        color:$hover-color;
        background-color:transparent;
        transform: scale(1.2);
      }
    }
    .banner-text{
      padding: 20px 60px;
      background-color: $banner-text-bg-color;
    }
    .bg-cover{
      background-position: center center;
      background-size: cover;
    }
    .mask{
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      background-color:rgba(0, 0, 0,0.5);
      // height: 200px;
      line-height: 200px;
      color:  $Maintext-color;
      opacity: 0;
      transition: 0.5s ease-in-out;
    }
    .product_image{
      &:hover{
        .mask{
          cursor: pointer;
          opacity:1;
        }
      }
    }
    .text-hidden{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .list-group-item{
      cursor: pointer;
    }
    .siderBarLeft{
      transition: 0.5s ease-in-out;
    }
</style>
