<template>
<Loading :active= "isLoading">
   <div class="loadingio-spinner-dual-ring-7s087i3q3b3"><div class="ldio-us6frdv3wm">
    <div></div><div><div></div></div>
    </div></div>
</Loading>
<div class="banner bg-cover d-flex justify-content-center align-items-center" style="background-image:url('https://images.unsplash.com/photo-1560968255-05e3051ac066?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1639&q=80');height:400px">
    <div class="banner-text text-white">
        <h1 class="pt-1">產品介紹</h1>
    </div>
</div>
<div class="container mb-2">
  <div class="row mt-3">
    <div class="col-12 col-md-6">
      <div class="bg-cover mb-3" :style="{backgroundImage:'url('+imgUrl+')',height:'350px'}"></div>
        <div class="pb-3">
          <a href="#" v-for="(item,index) in imagesUrl" :key="index"  @click.prevent="click(item,index)">
            <img class="picture pe-1 pb-2" :src="item" alt="">
          </a>
        </div>
        </div>
    <div class="col-12 col-md-6" >
      <h3 class="mb-3">{{product.title}}</h3>
      <div class="card mb-4">
        <div class="card-body">
          <h5 class="card-title">【方案】</h5>
          <div class="d-flex justify-content-between">
            <h6 class="card-text bg-primary text-white p-1">{{product.program}}</h6>
            <p class="card-text text-danger">${{$filters.currency(product.price)}}/團</p>
          </div>

          <h6 class="card-text mb-1 fw-bold">【費用包含】</h6>
          <small class="card-text">領隊費、登山險、其他行政等作業支出、入山證、山屋申請、餐費</small>
           <p class="card-text">超過6人請洽客服享額外優惠</p>
        </div>
        <div class="card-footer bg-white border-0 pb-4 d-flex justify-content-between">
          <p class="card-text text-danger">小計 ${{$filters.currency(product.price)}}元</p>
          <button type="button" class="btn btn-primary text-white w-50
          animate__animated animate__shakeX animate__repeat-1 animate__slower animate__delay-1s"
          @click="addToCart(product)">按我報名</button>
        </div>
      </div>
      <button type="button" class="btn btn-warning w-100 text-white" @click="openContentModal">聯絡我們</button>
      <contentModal ref="contentModal" @send-msg="hideContentModal"></contentModal>
    </div>
  </div>
  <div class="border-bottom border-3"></div>
  <div class="row p-3">
    <div class="col-12 col-sm-3">
      <h5 class="text-sm-center text-primary">山林地形</h5>
    </div>
    <div class="col-12 col-sm-9">
      <p class="fs-6 mb-0">{{product.description}}</p>
    </div>
  </div>
  <div class="row p-3">
    <div class="col-12 col-sm-3">
      <h5 class="text-sm-center text-primary">山林小故事</h5>
    </div>
    <div class="col-12 col-sm-9">
      <p class="fs-6 mb-0">{{product.content}}</p>
    </div>
  </div>
  <div class="row p-3">
    <div class="col-12 col-sm-3">
      <h5 class="text-sm-center text-primary">注意事項</h5>
    </div>
    <div class="col-12 col-sm-9">
      <ol class="p-3 pt-0">
        <li>
          <p class="fs-6">出發前請留意氣象資訊，山區天氣變化快速，早晚以及叫高海拔處溫差越大，穿著請以洋蔥式穿法。</p>
        </li>
        <li>
          <p class="fs-6">白天因天氣炎熱時請多補充水分，入夜氣溫下降快速，請記得做好保暖，避免身體不適。</p>
        </li>
        <li>
          <p class="fs-6">除領隊或嚮導有特別安排，請勿自行脫隊，為了各位的生命安全，請務必待在領隊及嚮導旁及聽從指示。</p>
        </li>
        <li>
          <p class="fs-6">請自備垃圾袋，用過的衛生紙、濕紙巾或是衛生棉請務必自行帶走，請勿隨意亂丟，破壞自然生態。</p>
        </li>
        <li>
          <p class="fs-6">所有行程安全為第一考量，落實無痕山林，一起當個友愛大自然的孩子吧！</p>
        </li>
        <li>
          <p class="fs-6">請在出發前就多自主訓練，訓練方向請針對心肺和肌力，跑步、游泳、重訓、深蹲。</p>
        </li>
        <li>
          <p class="fs-6">行程中有任何問題，請隨時告知領隊，我們會盡最大的努力提供最好的服務。</p>
        </li>
      </ol>
    </div>
  </div>
</div>
</template>

<script>
import emitter from '@/methods/mitt'
import contentModal from '@/components/ContentModal.vue'
export default {
  components: {
    contentModal
  },
  data () {
    return {
      cart: {},
      imgUrl: '',
      imagesUrl: [],
      product: {},
      id: '',
      isLoading: false
    }
  },
  methods: {
    openContentModal () {
      this.$refs.contentModal.showModal()
    },
    hideContentModal (item) {
      this.$refs.contentModal.hideModal()
    },
    click (item, index) {
      this.imgUrl = item
    },
    getProduct () {
      this.id = this.$route.params.id
      this.isLoading = true
      //   console.log(this.id)
      this.$http.get(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/product/${this.id}`)
        .then(res => {
          if (res.data.success) {
            this.imgUrl = res.data.product.imageUrl
            this.isLoading = false
            const { product } = res.data
            this.product = product
            this.imagesUrl = res.data.product.imagesUrl
          }
        })
    },
    getCartList () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(api)
        .then(res => {
          this.isLoading = false
          this.cart = res.data.data
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
            console.log(res)
            this.isLoading = false
            this.$swal({
              icon: 'success',
              title: `${res.data.data.product.title} <br/>${res.data.message}`
            })
            // console.log(res.data.data.product.title)
            emitter.emit('update-qty')
            // this.getCartList()
          }
        })
    }
  },
  mounted () {
    this.getProduct()
    // this.getCartList()
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
      @media(min-width:320px){
          object-fit:cover;
          width: 80px;
          height: 80px;
      }
      @media(min-width:992px){
          object-fit:cover;
          width: 100px;
          height: 100px;
        }
    }
    .banner-text{
    padding: 20px 60px;
    background-color:rgba(0, 0, 0,0.3);
    }
    .bg-cover{
      background-position: center center;
      background-size: cover;
    }
</style>
