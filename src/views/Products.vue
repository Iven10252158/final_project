<template>
<!-- <NavBar></NavBar> -->
<Loading :active="isLoading">
    <div class="loadingio-spinner-dual-ring-7s087i3q3b3"><div class="ldio-us6frdv3wm">
    <div></div><div><div></div></div>
    </div></div>
</Loading>
<!-- header -->
<div class="banner bg-cover d-flex justify-content-center align-items-center" style="background-image:url('https://images.unsplash.com/photo-1467541473380-93479a5a3ffa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1123&q=80');height:400px">
  <div class="banner-text text-white">
      <h1 class="pt-1">產品列表</h1>
  </div>
</div>
<div class="container">
     <div class="row">
        <div class="col-12 col-sm-3">
            <div class="col-12 mt-4">
                <input type="text" class="form-control" placeholder="請輸入關鍵字" v-model="search"
                @input="searchProduct(search)">
            </div>
            <div class="row">
                <div class="mt-3">
                    <ul class="list-group pe-auto">
                    <li class="list-group-item list-group-item-action" @click="changeProduct(item,index)"
                    :class="{'bg-primary':'total' === productValue , 'text-white':'total' === productValue }">
                    全部商品
                    </li>
                    <li class="list-group-item list-group-item-action" v-for="(item, index) in productName" :key="index"
                        @click="changeProduct(item)" :class="{'bg-primary':item === productValue, 'text-white':item === productValue }">{{item}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-sm-9">
            <div class="row">
                <div class="col-md-6 col-xl-4 my-4" v-for="item in typeProduct" :key="item.id">
                    <div class="card h-100">
                        <div class="bg-cover product_image position-relative" :style="{backgroundImage:'url(' +item.imageUrl+ ')',height:'200px' }">
                        <router-link class="mask text-white text-center fs-4 fw-bold position-absolute" :to="`/product/${item.id}`">
                            查看更多
                        </router-link>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-hidden">{{item.title}}</h5>
                        <div class="card-text d-flex justify-content-between">
                          <del class="text-muted">{{$filters.currency(item.origin_price)}}</del>
                          <h6>{{$filters.currency(item.price)}}</h6>
                        </div>
                    </div>
                    <div class="card-footer bg-white border-0">
                        <div class="d-flex justify-content-between">
                            <button type="button" class="styleBtn btn btn-outline-favorite border-0"
                            @click="addMyFavorite(item)">
                              <span v-if="myFavorite.includes(item.id)">
                                <i class="fas fa-heart"></i>
                              </span>
                              <span v-else>
                              <i class="far fa-heart"></i>
                            </span>
                            </button>
                            <button type="button" class="styleBtn btn btn-outline-primary border-0" @click="addToCart(item)">
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
      <pagination :pages="pagination" @change-page="getProducts"></pagination>
  </div>
</div>
<!-- <Footer></Footer> -->
<router-view></router-view>
</template>

<script>
import pagination from '@/components/Pagination.vue'

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
// console.log(storageMethods)

export default {
  inject: ['emitter'],
  data () {
    return {
      num: 1,
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
      myFavorite: storageMethods.getItem() || []

    }
  },
  methods: {
    getFavorite () {
      this.myFavorite = storageMethods.getItem() || []
      console.log(this.myFavorite)
    },
    addMyFavorite (item) {
      if (this.myFavorite.includes(item.id)) {
        this.myFavorite.splice(this.myFavorite.indexOf(item.id), 1)
        storageMethods.setItem(this.myFavorite)
        // this.emitter.emit('send-favorite', this.myFavorite)
        this.$swal({ icon: 'warning', title: '已從最愛中移除' })
        console.log('存過囉！')
      } else {
        this.myFavorite.push(item.id)
        storageMethods.setItem(this.myFavorite)
        // this.emitter.emit('send-favorite', item)
        this.$swal({ icon: 'success', title: '儲存成功！' })
      }
      this.emitter.emit('favorite-qty')
    },
    searchProduct (value) {
      this.productValue = 'total'
      // console.log(value)
      this.typeProduct = this.products.filter(item => {
        if (item.title.match(value)) {
          // console.log(item)
          return item
        }
        this.productValue = ''
        // else if可以不用寫
        // } else if (value === '') {
        //   return this.products
        // }
      })
      // }
    },
    changeProduct (item, index) {
      // console.log(item, index)
      this.typeProduct = this.products.filter((element, index) => {
        if (item === element.category) {
          // this.color = !this.color
          this.productValue = item
          // console.log(this.productValue)
          return element
        } else if (item === undefined) {
          // this.color = true
          this.productValue = 'total'
          return this.products
        }
      })
    },
    getProducts (page = 1) {
      this.isLoading = true
      // /api/:api_path/products
      this.$http.get(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/products?page=${page}`)
        .then(res => {
          if (res.data.success) {
            this.isLoading = false
            const { products, pagination } = res.data
            this.products = products
            // console.log(res)
            // 為了讓一進到產品列表就有產品資料
            this.typeProduct = this.products
            this.pagination = pagination
            this.products.filter(item => {
              if (this.productName.indexOf(item.category) === -1) {
                this.productName.push(item.category)
              }
            })
          }
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
            console.log('加入購物車', this.cart)
            this.emitter.emit('update-qty')
          }
        })
    },
    getCartList () {
      // this.isLoading = true
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(api)
        .then(res => {
          // this.isLoading = false
          this.cart = res.data.data
          this.cart.carts.forEach(item => {
            this.productId.push(item.product_id)
            // console.log('this.productId', this.productId)
          })
        })
    }
  },
  mounted () {
    this.getCartList()
    this.emitter.on('remove-data', (data) => {
      this.getFavorite()
    })
    this.emitter.emit('favorite-qty', this.myFavorite)
    this.getProducts()
    this.productValue = 'total'
  },
  components: {
    pagination
  }
}
</script>

<style lang="scss">
  $banner-text-bg-color:rgba(0, 0, 0,0.3);
  $text-color:#fff;
  $hover-color:#E6c35c;
  .styleBtn{
    &:hover{
      background-color: transparent;
      color: $hover-color ;
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
    background-color:rgba(0, 0, 0,0.5);     // rgba(101, 101, 101, 0.4);
    // height: 200px;
    line-height: 200px;
    color:  $text-color;
    opacity: 0;
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
</style>
