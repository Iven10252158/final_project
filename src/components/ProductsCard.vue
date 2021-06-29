<template>
<Loading :active= "isLoading">
    <div class="loadingio-spinner-dual-ring-7s087i3q3b3"><div class="ldio-us6frdv3wm">
    <div></div><div><div></div></div>
    </div></div>
</Loading>
<div class="container">
    <div class="row">
        <div class="col-12 col-sm-4">
            <div class="col-12 mt-4">
                <input type="text" class="form-control" placeholder="請輸入關鍵字" v-model="search">
            </div>
            <div class="row">
                <div class="col-12 mt-3">
                    <ul class="list-group pe-auto">
                    <li class="list-group-item list-group-item-action" @click="changeProduct(item,index)">全部商品</li>
                    <li class="list-group-item list-group-item-action" v-for="(item, index) in productName" :key="index"
                        @click="changeProduct(item)" :class="{'bg-primary':item[index]===index}">{{item}}/{{index}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-8">
            <div class="row">
                <div class="col-12 col-md-6 col-xl-4 my-4" v-for="item in searchProduct" :key="item.id">
                    <div class="card h-100 pb-3">
                        <div class="bg-cover bg-white product_image position-relative" :style="{backgroundImage:'url(' +item.imageUrl+ ')',height:'200px' }">
                        <router-link class="mask text-white text-center fs-4 fw-bold position-absolute" :to="`/product/${item.id}`">
                            查看更多
                        </router-link>
                    </div>
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
        </div>
    </div>
</div>
</div>
</template>

<script>
export default {
  data () {
    return {
      products: [],
      typeProduct: [],
      productName: [],
      isLoading: false,
      search: ''
    }
  },
  computed: {
    searchProduct () {
      return this.products.filter(item => {
        // console.log(item)
        return item.title.match(this.search)
      })
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
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
