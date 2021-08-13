<template>
    <Loading :active="isLoading">
          <div class="loadingio-spinner-dual-ring-7s087i3q3b3"><div class="ldio-us6frdv3wm">
          <div></div><div><div></div></div>
          </div></div>
    </Loading>
    <div class="banner bg-cover d-flex justify-content-center align-items-center" style="background-image:url('https://storage.googleapis.com/vue-course-api.appspot.com/iven_vue3_course/1627615007422.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=VALCCcOmRFUCmv8jFQWLrKV94N6QyWdDBp9KTLyokLq9lJL3JOpFfBbNHxmW1t7eP4jPWzVZZbsOH4FV%2BRsZXDF1CrtOVQg9QCF8gpOPex%2BNJzL%2BtVjdmzYrIgCBYJQe5w2Yy0DOzQHlHjZhwCDeR6zWzcRVcFNIjSr675bWt%2FpVkE412zgwOKwlGQE6bQG38vw0MEWsymeHG3na2j5Q6UTveeuU9iQBc%2FMVp4tQFsp%2BNJl4YTKavmFNFdTVh5FFtTlPtOaz4id62h9KoaC12rnhuBA1h3b5lhYMaGItEZMffZRFyCfKst5OqqRIGvBbX5JmM7hG6%2BBtaWVHv4Jurw%3D%3D');height:400px"></div>
    <div class="container my-4">
      <h4 class="text-primary mb-0 py-3">訂單資料</h4>
      <div class="row innerHeight border px-3 d-flex justify-content-center pt-3" v-for="item in orderForm.products" :key="item">
        <div class="col-md-6">
          <div v-if="orderForm.is_paid">
            <h2 class="text-center text-danger">付款完成</h2>
          </div>
          <div class="d-flex flex-column">
            <img class="img-fluid" :src="item.product.imageUrl" style="height: 200px; object-fit: cover;">
            <div class="pt-1">
              <p class="mb-2">{{item.product.title}}</p>
              <p class="text-danger mb-2">{{item.product.program}}</p>
              <p>NT$ {{$filters.currency(item.final_total)}}</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <hr class="mt-0 d-block d-md-none">
          <div>
            <h4 class="mb-3">訂購人資訊</h4>
            <div class="row" v-if="orderForm.user">
              <div class="col-3 h6 text-secondary">姓名</div>
              <div class="col-9">{{orderForm.user.name}}</div>
              <div class="col-3 h6 text-secondary">電話</div>
              <div class="col-9">{{orderForm.user.tel}}</div>
              <div class="col-3 h6 text-secondary">Email</div>
              <div class="col-9">{{orderForm.user.email}}</div>
              <div class="col-3 h6 text-secondary">地址</div>
              <div class="col-9">{{orderForm.user.address}}</div>
            </div>
            <hr>
            <div class="row" v-if="orderForm">
              <div class="col-3 h6 text-secondary">訂單編號</div>
              <div class="col-9">{{orderForm.id}}</div>
              <div class="col-3 h6 text-secondary">付款金額</div>
              <div class="col-9">NT$ {{$filters.currency(orderForm.total)}}</div>
              <div class="col-3 h6 text-secondary">付款狀態</div>
              <div class="col-9" :class="{'text-primary':orderForm.is_paid}">{{orderForm.is_paid? '付款成功':'尚未付款'}}</div>
            </div>
            <div class="d-flex" v-if="orderForm.is_paid">
              <div class="col-3 h6 text-secondary">訂單成立</div>
              <div class="col-9 ps-2 text-primary">{{dateAndTime}}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-end">
        <template v-if="orderForm.is_paid">
          <router-link to="/products" class="btn btn-outline-primary mt-4 mb-0 w-25 me-3 stepLink">
            續繼購物
          </router-link>
        </template>
        <button type="button" class="btn btn-primary w-25 mt-4 mb-0 text-white" @click.prevent="payOrder"
        :class="{'disabled':orderForm.is_paid}">確認付款去</button>
      </div>
    </div>
    <Footer class="footer"></Footer>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  inject: ['emitter'],
  components: {
    Footer
  },
  data () {
    return {
      orderID: '',
      create_at: '',
      orderForm: [],
      dateAndTime: '',
      isLoading: false
    }
  },
  methods: {
    getOrder () {
      this.orderID = this.$route.params.order_Id
      const url = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/order/${this.orderID}`
      this.$http.get(url)
        .then(res => {
          this.orderForm = res.data.order
          this.create_at = res.data.order.create_at
          this.dateAndTime = new Date(this.create_at * 1000).toLocaleString()
        }).catch(err => {
          this.$swal({
            icon: 'error',
            title: `${err.data.message}`
          })
        })
    },
    payOrder () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/pay/${this.orderID}`
      this.$http.post(url)
        .then(res => {
          if (res.data.success) {
            this.isLoading = false
            this.getOrder()
            this.emitter.emit('update-qty')
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
    this.getOrder()
  }
}
</script>

<style lang="scss">
$text-color:#fff;
$main-text-color:rgb(90, 147, 88);
    .bg-cover{
      background-position: center center;
      background-size: cover;
    }
    .stepLink{
      margin-top: 80px;
      color:$main-text-color;
        &:hover{
          color:$text-color;
        }
    }
    .innerHeight{
      min-height: calc( 59vh - 72px)
    }
    .footer{
      height: 72px;
    }
</style>
