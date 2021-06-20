
<template>
<Loading :active= "isLoading">
   <div class="loadingio-spinner-dual-ring-7s087i3q3b3"><div class="ldio-us6frdv3wm">
    <div></div><div><div></div></div>
    </div></div>
</Loading>
<div class="container mb-2">
    <!-- <h1>前台_單一產品細節</h1> -->
  <div class="row mt-3 mt-sm-3">
    <div class="col-12 col-sm-6">
      <div class="bg-cover mb-3" :style="{backgroundImage:'url('+imgUrl+')',height:'350px'}"></div>
        <!-- <div class="main_item mt-3 mb-0">
          <img :src="imgUrl" class="img-fluid" alt="">
        </div> -->
        <div class="pb-3" >
          <a href="#" v-for="(item,index) in imagesUrl" :key="index"  @click.prevent="click(item,index)">
            <img class="picture pe-2" :src="item" alt="">
          </a>
        </div>
        </div>
    <div class="col-12 col-sm-6" >
      <h3 class="mb-3">{{product.title}}</h3>
      <div class="card mb-4">
        <div class="card-body">
          <h5 class="card-title">【選擇方案】</h5>
          <div class="d-flex justify-content-between">
            <h6 class="card-text">即刻報名，只要4人就能成團</h6>
            <p class="card-text text-danger">${{product.price}}/團</p>
          </div>
          <select class="form-select mb-3" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="4">4人成團，搭配響導1名</option>
            <option value="6">6人成團，搭配響導2名</option>
            <option value="8">8人成團，搭配響導2名</option>
          </select>
          <h6 class="card-text mb-1 text-primary fw-bold">【費用包含】</h6>
          <small class="card-text">領隊費、登山險、其他行政等作業支出、入山證、山屋申請、餐費</small>
           <p class="card-text">超過10人請洽客服享額外優惠</p>
        </div>
        <div class="card-footer bg-white border-0 pb-4 d-flex justify-content-between">
          <p class="card-text text-danger">小計 ${{product.price}}元</p>
          <button type="button" class="btn btn-danger w-50">按我報名</button>
        </div>
      </div>
      <button type="button" class="btn btn-warning w-100">聯絡我們</button>
    </div>
  </div>
  <div class="border-bottom border-3"></div>
  <div class="row">
    <div class="col-6">
    </div>
    <div class="col-6"></div>
  </div>
</div>

</template>

<script>
export default {
  data () {
    return {
      imgUrl: '',
      imagesUrl: [],
      product: {},
      id: '',
      isLoading: false
    }
  },
  methods: {
    click (item, index) {
      this.imgUrl = item
      // console.log(this.imgUrl)
    },
    getProduct () {
    // /api/:api_path/product/:id
      this.id = this.$route.params.id
      this.isLoading = true
      //   console.log(this.id)
      this.$http.get(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/product/${this.id}`)
        .then(res => {
          if (res.data.success) {
            this.imgUrl = res.data.product.imageUrl
            console.log(this.imgUrl)
            this.isLoading = false
            const { product } = res.data
            this.product = product
            console.log(res)
            this.imagesUrl = res.data.product.imagesUrl
            console.log(this.imagesUrl)
          }
        })
    }
  },
  mounted () {
    this.getProduct()
    // console.log(this.$route)
  }
}
</script>

<style lang="scss">
    img{
    object-fit: cover;
    height: auto;
    max-width:100%;
    }
    .main_item{
      width:540px;
      height:440px;
    }
    .picture{
      object-fit:cover;
      width: 100px;
      height: 100px;
    }
    .bg-cover{
        background-position: center center;
        background-size: cover;
    }
</style>
