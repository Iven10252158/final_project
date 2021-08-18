<template>
    <Loading :active="isLoading">
          <div class="loadingio-spinner-dual-ring-7s087i3q3b3"><div class="ldio-us6frdv3wm">
          <div></div><div><div></div></div>
          </div></div>
    </Loading>
    <div class="banner bg-cover d-flex justify-content-center align-items-center" style="background-image:url('https://storage.googleapis.com/vue-course-api.appspot.com/iven_vue3_course/1629254451302.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=hfxAm%2BkhMPrbyhJg5oHb9vD07HbCQMCpYJxLx3%2BuvQMAbcjz5iLj2z7UlJf%2BQUru2KA5yFGle86WRMCBcxy92CnrQ6LX8DKYW1jRiSynweCEYvDg8xa43TSuq0nxf%2F7MCizTmBEOEPIz71D6lPUAX9IrZDxfNe8d04baYm42jZKgwieQ65r7SQosbPuCByRBnwMGcghNc%2FnNEVCgd4BQVEzPHFe2ntC1yhk9w6E3XJiFlmqy7PNdqMQbmYQpuDFonsw6PpAXxOnl%2BUfzixeBKKW68r7e2caCLr4yReA%2FiNdOfS70xLRtNtg6Z2%2FNNSaSfUqDiMFbXJUecOBs0HHqtg%3D%3D');height:500px">
        <div class="banner-text text-white">
            <div class="fs-1">訂單資訊</div>
        </div>
    </div>
    <div class="container">
        <div class="pt-3 mb-3">
            <div class="row innerHeight justify-content-center align-items-center">
                <div class="col-md-8">
                    <div class="h3 text-center mb-3">訂購人資料</div>
                    <Form  v-slot="{ errors }" @submit="createOrder">
                        <label for="email" class="mb-1">帳號</label>
                        <Field id="email" name="email" type="email" class="form-control mb-3"
                        :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email"
                        rules="email|required" v-model="form.user.email"></Field>
                        <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>

                        <label for="name" class="mb-1">訂購人姓名</label>
                        <Field id="name" name="姓名" type="text" class="form-control mb-3"
                        :class="{ 'is-invalid': errors['姓名'] }" placeholder="請輸入訂購人姓名"
                        rules="required" v-model="form.user.name"></Field>
                        <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>

                        <label for="address" class="mb-1">收件地址</label>
                        <Field id="address" name="地址" type="text" class="form-control mb-3"
                        :class="{ 'is-invalid': errors['地址'] }" placeholder="請輸入收件地址"
                        rules="required" v-model="form.user.address"></Field>
                        <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>

                        <label for="tel" class="mb-1">收件人電話</label>
                        <Field id="tel" name="電話號碼" class="form-control mb-3" type="tel"
                        :class="{ 'is-invalid': errors['電話號碼'] }" placeholder="請輸入訂購人電話"
                        rules="min:7|required" v-model="form.user.tel"></Field>
                        <ErrorMessage name="電話號碼" class="invalid-feedback"></ErrorMessage>
                        <label for="message" class="mb-1">留言</label>
                        <Field id="message" name="message" type="text" as="textarea" rows="6" class="form-control mb-3"
                          v-model="form.message"></Field>
                        <div class="d-flex justify-content-end">
                            <button type="submit" class="btn btn-primary my-3 text-white">確認送出</button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    </div>
    <Footer class="footer"></Footer>
</template>

<script>
import Footer from '@/components/front_components/Footer.vue'
export default {
  components: {
    Footer
  },
  data () {
    return {
      orderId: '',
      isLoading: false,
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
      this.isLoading = true
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http.post(api, { data: order })
        .then(res => {
          if (res.data.success) {
            this.isLoading = false
            this.orderId = res.data.orderId
            this.$router.push(`/ordercheckout/${this.orderId}`)
          }
        }).catch(err => {
          this.$swal({
            icon: 'error',
            title: `${err.data.message}`
          })
        })
    },
    getCartList () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(api)
        .then(res => {
          if (res.data.success) {
            this.isLoading = false
            this.cart = res.data.data
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
    this.getCartList()
  }
}
</script>

<style lang="scss">
$background-color:rgba(0, 0, 0,0.5);
    .bg-cover{
      background-position: center center;
      background-size: cover;
    }
    .banner-text{
      padding:20px 60px;
      background-color:$background-color;
    }
    .innerHeight{
      min-height: calc( 61vh - 72px );
    }
    .footer{
      height: 72px;
    }
</style>
