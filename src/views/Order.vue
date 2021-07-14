<template>
  <NavBar></NavBar>
  <div class="banner bg-cover d-flex justify-content-center align-items-center pe-5" style="background-image:url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80');height:400px">
      <div class="product-text text-white">
          <h1 class="pt-1">訂單資訊</h1>
      </div>
  </div>
  <div class="container">
    <div class="pt-3 mb-3">
      <div class="row justify-content-center">
        <div class="col-6">
          <div class="h4 text-center mb-0 mt-2">訂購人資料</div>
            <Form  v-slot="{ errors }" @submit="createOrder">
                <label for="email">帳號</label>
                <Field id="email" name="email" type="email" class="form-control my-2"
                :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email"
                rules="email|required" v-model="form.user.email"></Field>
                <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>

                <label for="name">訂購人姓名</label>
                <Field id="name" name="姓名" type="text" class="form-control my-2"
                :class="{ 'is-invalid': errors['姓名'] }" placeholder="請輸入訂購人姓名"
                rules="required" v-model="form.user.name"></Field>
                <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>

                <label for="address">收件地址</label>
                <Field id="address" name="地址" type="text" class="form-control my-2"
                :class="{ 'is-invalid': errors['地址'] }" placeholder="請輸入收件地址"
                rules="required" v-model="form.user.address"></Field>
                <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>

                <label for="tel">收件人電話</label>
                <Field id="tel" name="電話號碼" class="form-control my-2" type="number"
                :class="{ 'is-invalid': errors['電話號碼'] }" placeholder="請輸入訂購人電話"
                rules="min:7|required" v-model="form.user.tel"></Field>
                <ErrorMessage name="電話號碼" class="invalid-feedback"></ErrorMessage>
                <label for="message">留言</label>
                <Field id="message" name="message" type="text" as="textarea" class="form-control my-2"
                  v-model="form.message"></Field>
                <div class="d-flex justify-content-end">
                    <button type="submit" class="btn btn-primary my-3 text-white">確認送出</button>
                </div>
            </Form>
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
      orderId: '',
      form: {
        user: {
          name: '',
          email: '',
          address: '',
          tel: ''
        },
        message: ''
      },
      cart: []
    }
  },
  methods: {
    createOrder () {
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      console.log(order)
      console.log(api)
      this.$http.post(api, { data: order })
        .then(res => {
          console.log(res)
          this.orderId = res.data.orderId
          console.log(this.orderId)
          this.$router.push(`/ordercheckout/${this.orderId}`)
        })
    },
    getCartList () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(api)
        .then(res => {
          this.isLoading = false
          this.cart = res.data.data
          // console.log('購物車', res)
          // console.log(this.cart)
        })
    }
  },
  mounted () {
    this.getCartList()
  }
}
</script>

<style lang="scss">
  .bg-cover{
    background-position: center center;
    background-size: cover;
  }
</style>
