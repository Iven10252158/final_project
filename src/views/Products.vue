<template>
<!-- <NavBar></NavBar> -->
<Loading :active="isLoading">
    <div class="loadingio-spinner-dual-ring-7s087i3q3b3"><div class="ldio-us6frdv3wm">
    <div></div><div><div></div></div>
    </div></div>
</Loading>
<!-- header -->
<div class="banner bg-cover d-flex justify-content-center align-items-center pe-5" style="background-image:url('https://images.unsplash.com/photo-1420582282039-a6d11404cb66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80');height:400px">
            <div class="product-text text-white">
                <h1 class="pt-1">產品列表</h1>
            </div>
    </div>
<apply-modal ref="applyModal" :apply="applyData" @into-cart="addToCart"></apply-modal>
<!-- <Canvas :canvas="myFavorite"></Canvas> -->
<div class="container">
     <div class="row">
        <div class="col-12 col-sm-4">
            <div class="col-12 mt-4">
                <input type="text" class="form-control" placeholder="請輸入關鍵字" v-model="search"
                @input="searchProduct(search)">
            </div>
            <div class="row">
                <div class="col-12 mt-3">
                    <ul class="list-group pe-auto">
                    <li class="list-group-item list-group-item-action " @click="changeProduct(item,index)"
                    :class="{'bg-primary':'total' === productValue , 'text-white':'total' === productValue }">全部商品</li>
                    <li class="list-group-item list-group-item-action" v-for="(item, index) in productName" :key="index"
                        @click="changeProduct(item)" :class="{'bg-primary':item === productValue, 'text-white':item === productValue }">{{item}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-8">
            <div class="row">
                <div class="col-12 col-md-6 col-xl-4 my-4" v-for="item in typeProduct" :key="item.id">
                    <div class="card h-100 pb-3">
                        <div class="bg-cover bg-white product_image position-relative" :style="{backgroundImage:'url(' +item.imageUrl+ ')',height:'200px' }">
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
                            <button type="button" class="favoriteBtn btn btn-outline-favorite border-0"
                            @click="addMyFavorite(item)">
                              <span v-if="myFavorite.includes(item.id)">
                                <i class="fas fa-heart"></i>
                              </span>
                              <span v-else>
                              <i class="far fa-heart"></i>
                            </span>
                            </button>
                            <button type="button" class="btn btn-outline-primary w-75" @click="openApplyModal (item)">
                            <i class="fas fa-cart-plus"></i>
                            我要報名
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
// import Canvas from '@/components/Canvas.vue'
import applyModal from '@/components/ApplyModal.vue'
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
      pagination: {},
      cart: {},
      applyData: {},
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
      this.emitter.emit('favorite-qty', this.myFavorite)
      // console.log('this.myFavorite', this.myFavorite.length)
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
                // console.log(this.productName)
              }
            })
            // console.log(products)
          }
        })
    },
    addToCart (item, qty = 1) {
      // console.log('有了嗎？')
      const cart = {
        product_id: item.id,
        qty
      }
      console.log(cart)
      this.$http.post(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`, { data: cart })
        .then(res => {
          if (res.data.success) {
            // console.log(res)
          }
        })
    },
    openApplyModal (item) {
      this.$refs.applyModal.showModal()
      this.applyData = item
      console.log(this.applyData)
    }
  },
  mounted () {
    // this.$refs.applyModal.showModal()
    this.emitter.emit('favorite-qty', this.myFavorite)
    // console.log(this.myFavorite)
    this.getProducts()
    this.productValue = 'total'
  },
  components: {
    pagination,
    applyModal
    // Canvas
  }
}
</script>

<style lang="scss">
  .favoriteBtn{
    font-size: 20px;
    &:hover{
      background-color: transparent;
      color:#E6c35c;
    }
  }
  .product-text{
    padding: 20px 60px;
    background-color:rgba(0, 0, 0,0.3);
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
    background:rgba(0, 0, 0,0.5);     // rgba(101, 101, 101, 0.4);
    height: 200px;
    line-height: 200px;
    color: #ffffff;
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

</style>
