<template>
<NavBar></NavBar>
<div class="banner bg-cover d-flex justify-content-center align-items-center" style="background-image:url('https://images.unsplash.com/photo-1592805145006-353114433db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80');height:400px"></div>
<div class="container my-4">
    <div class="row d-flex justify-content-center">
        <div class="col-6">
            <div v-if="orderForm.is_paid">
                <h2 class="text-center text-danger">付款完成</h2>
            </div>
            <div class="border p-3">
                <h4 class="text-primary">訂單資料</h4>
                <hr>
                <div class="d-flex mt-1" v-for="item in orderForm.products" :key="item">
                    <img :src="item.product.imageUrl" style="width: 80px; height: 80px; object-fit: cover;">
                    <div class="ps-3 pt-1">
                        <p class="mb-2">{{item.product.title}}</p>
                        <p class="text-danger mb-2">{{item.product.program}}</p>
                        <p>NT$ {{$filters.currency(item.final_total)}}</p>
                    </div>
                </div>
                <hr class="mt-0">
                <h4 class="mb-3">訂購人資訊</h4>
                <div class="row" v-if="orderForm.user">
                    <div class="col-6 h6 text-secondary">姓名</div>
                    <div class="col-6">{{orderForm.user.name}}</div>
                    <div class="col-6 h6 text-secondary">電話</div>
                    <div class="col-6">{{orderForm.user.tel}}</div>
                    <div class="col-6 h6 text-secondary">Email</div>
                    <div class="col-6">{{orderForm.user.email}}</div>
                    <div class="col-6 h6 text-secondary">地址</div>
                    <div class="col-6">{{orderForm.user.address}}</div>
                </div>
                <hr>
                <div class="row" v-if="orderForm">
                    <div class="col-6 h6 text-secondary">訂單編號</div>
                    <div class="col-6">{{orderForm.id}}</div>
                    <div class="col-6 h6 text-secondary">付款金額</div>
                    <div class="col-6">NT$ {{$filters.currency(orderForm.total)}}</div>
                    <div class="col-6 h6 text-secondary">付款狀態</div>
                    <div class="col-6" :class="{'text-primary':orderForm.is_paid}">{{orderForm.is_paid? '付款成功':'尚未付款'}}</div>
                </div>
                <div class="d-flex" v-if="orderForm.is_paid">
                    <div class="col-6 h6 text-secondary">訂單成立</div>
                    <div class="col-6 ps-2 text-primary">{{dateAndTime}}</div>
                </div>
                <div class="d-flex justify-content-end">
                    <button type="button" class="btn btn-primary mt-4 mb-1 w-100" @click.prevent="payOrder"
                    :class="{'disabled':orderForm.is_paid}">確認付款去</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import NavBar from '@/components/Navbar.vue'
export default {
  components: {
    NavBar
  },
  data () {
    return {
      orderID: '',
      create_at: '',
      orderForm: [],
      dateAndTime: ''
    }
  },
  methods: {
    getOrder () {
      this.orderID = this.$route.params.order_Id
      console.log(this.orderID)
      const url = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/order/${this.orderID}`
      this.$http.get(url)
        .then(res => {
          this.orderForm = res.data.order
          this.create_at = res.data.order.create_at
          this.dateAndTime = new Date(this.create_at * 1000).toLocaleString()
          console.log(this.dateAndTime)
          console.log(res)
        })
    },
    payOrder () {
      const url = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/pay/${this.orderID}`
      this.$http.post(url)
        .then(res => {
          console.log(res)
          if (res.data.success) {
            this.getOrder()
          }
        })
    }
  },
  mounted () {
    this.getOrder()
  }
}
</script>

<style lang="scss">
//   .orderForm{
//       height: 100vh;
//   }
  .bg-cover{
      background-position: center center;
      background-size: cover;
  }
</style>
