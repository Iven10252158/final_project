<template>
    <Loading :active= "isLoading">
      <div class="loadingio-spinner-dual-ring-7s087i3q3b3"><div class="ldio-us6frdv3wm">
      <div></div><div><div></div></div>
      </div></div>
    </Loading>
    <div class="cart-banner">
        <div class="bg-bottom d-flex justify-content-center align-items-center" style="background-image:url('https://storage.googleapis.com/vue-course-api.appspot.com/iven_vue3_course/1628480946620.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Uk8gQYWB9JbaXwysaCt3LsP05ErOOROXs7kFc3SvEMw14m3e9c97kqKPMgqu1NgfgdTIqyXwslvTlFP3PiovGk9JpiugomLIFsOM3jbNxPp6qLxopVDOpTYWX5oOL8gFP9EeejJpXyFE4EiR8N0Hxp7vysWYXZ5gBO1XBLkjS%2BMtsTgSfOB8dEF%2F4f8lpwFwJ26r1%2B2Z5T14S1HQ1KH7EJWWDieQLXF8fYUwA4uSJDaUlJ7j8Dw3TmZxUI7JwjCqbGdU1%2Bzde5P2reOlnJZ%2BHt53dObrVUXn9FibQkTXUigXj7CsCxZXdxxIqkQpsgOWBwhbxKtOSdvN9dGpw35dsw%3D%3D');height:350px">
            <div class="banner-text text-white">
                <div class="fs-1">購物車</div>
            </div>
        </div>
    </div>
    <div class="container innerHeight" v-if="cart.carts">
        <div class= "container innerHeight d-flex justify-content-center align-items-center" v-if="cart.carts.length === 0">
            <div class="fs-5 fw-bolder mx-2 d-block d-sm-none">目前沒有商品喔</div>
            <div class="fs-3 fw-bolder mx-3 d-none d-sm-block">目前沒有商品喔</div>
            <button class="btn btn-primary btn-sm d-block d-sm-none" type="button">
                <router-link to="/products">
                    <p class="text-white mb-0">尋找喜歡的山林</p>
                </router-link>
            </button>
            <button class="btn btn-primary d-none d-sm-block" type="button">
                <router-link to="/products">
                    <p class="text-white mb-0">尋找喜歡的山林</p>
                </router-link>
            </button>
        </div>
        <div class="row justify-content-center" v-if="cart.carts.length >=1 ">
            <div class="col-xl-10">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h6 class="mb-0 mt-7">購物明細</h6>
                    <router-link to="/products" class="stepLink btn btn-outline-primary rounded-pill mb-0 px-3 mt-6">
                      <i class="fas fa-caret-left"></i>
                      繼續選購
                    </router-link>
                </div>
                <!-- 購物車 -->
                <div class="table-responsive">
                    <table class="table">
                        <thead class="bg-primary text-white">
                            <tr>
                                <th class="d-none d-sm-block d-sm-table-cell ps-3" width="300">商品名稱</th>
                                <th class="text-center" width="300">
                                    <span class="d-inline d-sm-none ps-3">名稱/</span>
                                    數量
                                </th>
                                <th class="text-center" max-width="150">金額</th>
                                <th class="text-center text-sm-end pe-4">刪除</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="pt-1" v-for='item in cart.carts' :key='item.id'>
                                <td class="d-none d-sm-table-cell ps-3">
                                    <p class="mb-0 pt-2">{{ item.product.title }}</p>
                                    <p class="mb-0 pt-sm-2 text-danger">{{ item.product.program }}</p>
                                    <p class="d-none d-sm-table-cell" v-if="finalPrice === cart.final_total"
                                    :class="{'text-success':isTrue}">已套用此優惠</p>
                                </td>
                                <td class="ps-sm-5 align-middle d-table-cell">
                                    <p class="d-sm-none">{{ item.product.title }}</p>
                                    <p class="d-sm-none mb-0 text-danger">{{ item.product.program }}</p>
                                    <p class="d-sm-none" v-if="finalPrice === cart.final_total"
                                      :class="{'text-success':isTrue}">已套用此優惠</p>
                                    <div class=" input-group mx-auto ps-sm-4">
                                      <button type="button" :disabled="item.qty===1" @click="reduceNum(item)"
                                          class="btn btn-primary btn-sm rounded-0">
                                          <i class="fas fa-minus"></i>
                                      </button>
                                      <span class="qty_input border border-2 pt-1 text-center px-3">{{ item.qty }}</span>
                                      <button type="button" @click="addNum(item)"
                                          class="btn btn-outline-primary btn-sm rounded-0">
                                          <i class="fas fa-plus"></i>
                                      </button>
                                    </div>
                                </td>
                                <td class="text-center align-middle">
                                    <p class="pt-2 mb-0" :class="{ 'text-decoration-line-through':isTrue , 'text-secondary':isTrue}">
                                      NT {{ $filters.currency(item.total) }}
                                    </p>
                                    <span v-if="finalPrice === cart.final_total"
                                    :class="{ 'text-success':isTrue }"
                                    >NT {{ $filters.currency(item.final_total) }}</span>
                                </td>
                                <td class="align-middle text-center text-sm-end pe-3">
                                    <button type="button" class="btn btn-outline-danger" @click="deleteCartProduct(item)">
                                        <i class="far fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- 套用優惠券 -->
                <div class="row justify-content-end">
                    <div class="col-sm-8 col-md-6">
                      <div class="input-group mb-3">
                      <input type="text" class="form-control rounded-0" v-model="coupon_code" placeholder="請輸入折扣碼"
                        @input="code" aria-label="Recipient's username" aria-describedby="basic-addon2">
                      <button type="button" class="cart_btn btn btn-outline-primary rounded-0 input-group-text" @click="inputCoupon"
                        :class="{ 'disabled':codeValue === 'disabled' }">套用優惠券</button>
                    </div>
                    <div class="mt-4" :class="{ 'text-decoration-line-through':isTrue, 'text-secondary':isTrue, 'p':isTrue}">
                      <h5 class="text-end mb-0">總計:
                        <span>NT {{ $filters.currency(cart.total) }}元</span>
                      </h5>
                    </div>
                    <p class="h5 text-end pe-5 text-primary" v-if="finalPrice === cart.final_total">折扣後:
                      <span class="text-primary">NT {{ $filters.currency(cart.final_total) }}元</span>
                    </p>
                    <div class="d-flex justify-content-end">
                      <router-link to="/order" class="cart_btn stepLink btn btn-outline-primary rounded-pill mb-6 mt-3 px-3" :class="{ 'disabled' :cart.carts.length===0 }">
                        下一步
                        <i class="fas fa-caret-right"></i>
                      </router-link>
                    </div>
                </div>
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
  inject: ['emitter'],
  data () {
    return {
      cart: [],
      coupon_code: '',
      codeValue: '',
      isTrue: false,
      finalPrice: '',
      isLoading: true
    }
  },
  methods: {
    code () {
      if (this.coupon_code === '') {
        this.codeValue = 'disabled'
      } else {
        this.codeValue = 'full'
      }
    },
    // 取得購物車列表
    getCartList () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(api)
        .then(res => {
          if (res.data.success) {
            // console.log('getCartList', res)
            this.isLoading = false
            this.cart = res.data.data
          }
        }).catch(err => {
          this.$swal({
            icon: 'error',
            title: `${err.data.message}`
          })
        })
    },
    // 更新購物車
    updateCart (item, qty) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      const cart = {
        product_id: item.product.id,
        qty: item.qty
      }
      this.$http.put(api, { data: cart })
        .then(res => {
          if (res.data.success) {
            this.getCartList()
            this.isLoading = false
            this.$swal({
              icon: 'success',
              title: `${res.data.message}`
            })
          } else {
            this.$swal({
              icon: 'error',
              title: `${res.data.message}`
            })
          }
        }).catch(err => {
          this.$swal({
            icon: 'error',
            title: `${err.data.message}`
          })
        })
    },
    // 刪除購物車內的一筆資料
    deleteCartProduct (item) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.$http.delete(api)
        .then(res => {
          if (res.data.success) {
            this.getCartList()
            this.isLoading = false
            this.$swal({
              icon: 'success',
              title: `${res.data.message}`
            })
            this.emitter.emit('update-qty')
          } else {
            this.$swal({
              icon: 'error',
              title: `${res.data.message}`
            })
          }
        }).catch(err => {
          this.getCartList()
          this.$swal({
            icon: 'error',
            title: `${err.data.message}`
          })
        })
    },
    // 刪除所有購物車資料
    // 增加數量按鈕
    addNum (item) {
      if (item.product_id === item.product.id) {
        item.qty += 1
        this.updateCart(item)
      }
    },
    // 減少數量按鈕
    reduceNum (item) {
      if (item.product_id === item.product.id) {
        item.qty -= 1
        this.updateCart(item)
      }
    },
    // 套用優惠券
    inputCoupon () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/coupon`
      const coupon = {
        code: this.coupon_code
      }
      this.$http.post(api, { data: coupon })
        .then(res => {
          if (res.data.success) {
            this.getCartList()
            this.isLoading = false
            this.finalPrice = res.data.data.final_total
            this.codeValue = 'disabled'
            this.isTrue = true
            this.$swal({
              icon: 'success',
              title: `${res.data.message}`
            })
          } else {
            this.isLoading = false
            this.$swal({
              icon: 'error',
              title: '請確認輸入的代碼'
            })
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
    this.code()
  }
}
</script>

<style lang="scss" scoped>
$text-color:#fff;
$main-text-color:rgb(90, 147, 88);
    h6{
      margin-top: 100px;
    }
    .bg-bottom{
      background-position: center bottom;
      background-size: cover;
    }
    .cart_btn{
      color:$main-text-color;
        &:hover{
          color:$text-color;
        }
    }
    .stepLink{
      margin-top: 80px;
    }
    .banner-text{
      padding:20px 60px;
      background-color:rgba(0, 0, 0,0.5);
    }
    .qty_input{
      width: 50%;
    }
    .innerHeight{
      min-height: calc( 75vh - 72px );
    }
    .footer{
      height: 72px;
    }
</style>
