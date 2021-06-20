<template>
<Loading :active= "isLoading">
    <div class="loadingio-spinner-dual-ring-7s087i3q3b3"><div class="ldio-us6frdv3wm">
    <div></div><div><div></div></div>
    </div></div>
</Loading>
<div class="container">
    <div class="row">
        <div class="col-4 my-2"  v-for="item in products" :key="item.id">
            <div class="card h-100  pb-3">
                <div class="bg-cover  product_image position-relative" :style="{backgroundImage:'url(' +item.imageUrl+ ')',height:'200px' }">
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
                      <div class="input-group text-center">
                        <button type="button" class="input-group-text">
                          <i class="fas fa-minus"></i>
                        </button>
                         <p class="form-control m-0"></p>
                         <button type="button" class="input-group-text">
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                        <button type="button" class="btn btn-outline-danger fs-4 border-0" @click="addToCart(item.id)">
                          <i class="fas fa-cart-plus"></i>
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

export default {
  data () {
    return {
      num: 1,
      products: [],
      pagination: {},
      isLoading: false,
      cart: {}
    }
  },
  methods: {
    getProducts (page = 1) {
      this.isLoading = true
      // /api/:api_path/products
      this.$http.get(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/products?page=${page}`)
        .then(res => {
          if (res.data.success) {
            this.isLoading = false
            const { products, pagination } = res.data
            this.products = products
            this.pagination = pagination
            console.log(res)
            console.log(products)
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
    }
  },
  mounted () {
    this.getProducts()
  },
  components: {
    pagination
  }
}
</script>
