<template>
<NavBar></NavBar>
<!-- header -->
<div class="banner bg-cover d-flex justify-content-center align-items-center pe-5" style="background-image:url('https://images.unsplash.com/photo-1605465746300-0318f1e96278?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80');height:400px">
            <div class="product-text text-white">
                <h1 class="pt-1">產品列表</h1>
            </div>
    </div>
<Loading :active= "isLoading">
    <div class="loadingio-spinner-dual-ring-7s087i3q3b3"><div class="ldio-us6frdv3wm">
    <div></div><div><div></div></div>
    </div></div>
</Loading>
<div class="container">
  <apply-modal ref="applyModal" :apply="applyData"></apply-modal>
    <div class="row">
      <div class="col-3 my-4">
          <ul class="list-group pe-auto">
            <li class="list-group-item list-group-item-action" @click="changeProduct(item,index)">全部商品</li>
            <li class="list-group-item list-group-item-action" v-for="(item, index) in productName" :key="index"
              @click="changeProduct(item)" :class="{'bg-primary':item[index]===index}">{{item}}/{{index}}</li>
          </ul>
      </div>
        <div class="col-3 my-4"  v-for="item in typeProduct" :key="item.id">
            <div class="card h-100 pb-3">
                <div class="bg-cover bg-white product_image position-relative" :style="{backgroundImage:'url(' +item.imageUrl+ ')',height:'200px' }">
                  <router-link class="mask text-white text-center fs-4 fw-bold position-absolute" :to="`/product/${item.id}`">
                    查看更多
                  </router-link>
                </div>
                <!-- <img src="..." class="card-img-top" alt="..."> -->
                <div class="card-body">
                    <h5 class="card-title">{{item.title}}</h5>
                    <p class="card-text">{{item.id}}</p>
                </div>
                <div class="card-footer bg-white border-0">
                    <div class="d-flex justify-content-between">
                      <!-- @click="addToCart(item.id)" -->
                        <button type="button" class="btn btn-outline-primary w-100" @click="openApplyModal(item)">
                          <i class="fas fa-cart-plus"></i>
                          我要報名
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <pagination :pages="pagination" @change-page="getProducts"></pagination>
        </div>
    </div>
</div>

<router-view></router-view>
</template>

<script>
import pagination from '@/components/Pagination.vue'
import NavBar from '@/components/Navbar.vue'
import applyModal from '@/components/ApplyModal.vue'
export default {
  data () {
    return {
      num: 1,
      products: [],
      pagination: {},
      isLoading: false,
      cart: {},
      applyData: {},
      typeProduct: [],
      productName: []
    }
  },
  methods: {
    changeProduct (item, index) {
      this.typeProduct = this.products.filter((element, index) => {
        if (item === element.category) {
          console.log(item, index)
          return element
        } else if (item === undefined) {
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
            // 為了讓一進到產品列表就有產品資料
            this.typeProduct = this.products
            this.pagination = pagination
            this.products.filter(item => {
              if (this.productName.indexOf(item.category) === -1) {
                this.productName.push(item.category)
                console.log(this.productName)
              }
            })
            // console.log(res)
            // console.log(products)
          }
        })
    },
    addToCart (id, qty = 1) {
      const cart = {
        product_id: id,
        qty
      }
      // console.log(cart)
      this.$http.post(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`, { data: cart })
        .then(res => {
          if (res.data.success) {
            console.log(res)
          }
        })
    },
    openApplyModal (item) {
      this.$refs.applyModal.showModal()
      this.applyData = item
      // console.log(this.applyData)
    }
  },
  mounted () {
    // this.$refs.applyModal.showModal()
    this.getProducts()
  },
  components: {
    pagination,
    NavBar,
    applyModal
  }
}
</script>

<style lang="scss">
  .product-text{
    // margin-top: 40px;
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

</style>
