<template>
  <NavBar></NavBar>
  <Loading :active= "isLoading">
    <div class="loadingio-spinner-dual-ring-7s087i3q3b3"><div class="ldio-us6frdv3wm">
    <div></div><div><div></div></div>
    </div></div>
  </Loading>
  <div class="banner bg-cover d-flex justify-content-center align-items-center" style="background-image:url('https://images.unsplash.com/photo-1592805145006-353114433db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80');height:400px">
      <div class="banner-text text-white">
          <h3 class="pt-2">購物車</h3>
      </div>
  </div>
  <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <h6 class="mb-3 mt-5">購物明細</h6>
            <router-link to="/products" class="stepLink btn btn-outline-primary rounded-pill mb-2 px-3 mt-4">
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
                數量</th>
              <th class="text-center" max-width="150">金額</th>
              <th class="text-center text-sm-end pe-4">刪除</th>
            </tr>
          </thead>
          <tbody>
            <tr class="pt-1" v-for='item in cart.carts' :key='item.id'>
              <td class="d-none d-sm-table-cell ps-3">
                <p class="mb-0 pt-2">{{item.product.title}}</p>
                <p class="mb-0 pt-sm-2 text-danger">{{item.product.program}}</p>
                <p class="d-none d-sm-table-cell" v-if="finalPrice === cart.final_total"
                :class="{'text-success':isTrue}">已套用此優惠</p>
              </td>
              <td class="ps-sm-5 align-middle d-table-cell">
                  <p class="d-sm-none">{{item.product.title}}</p>
                  <p class="d-sm-none mb-0 text-danger">{{item.product.program}}</p>
                  <p class="d-sm-none" v-if="finalPrice === cart.final_total"
                    :class="{'text-success':isTrue}">已套用此優惠</p>
                <div class=" input-group mx-auto ps-sm-4">
                    <button type="button" :disabled="item.qty===1" @click="reduce(item)"
                        class="btn btn-primary btn-sm rounded-0">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="qty_input border border-2 pt-1 text-center px-3">{{item.qty}}</span>
                    <button type="button" @click="addNum(item)"
                        class="btn btn-outline-primary btn-sm rounded-0">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
              </td>
              <td class="text-center align-middle">
                <p class="pt-2 mb-0" :class="{ 'text-decoration-line-through':isTrue , 'text-secondary':isTrue}">
                  NT {{$filters.currency(item.total)}}
                </p>
                <span v-if="finalPrice === cart.final_total"
                :class="{'text-success':isTrue}"
                >NT {{$filters.currency(item.final_total)}}</span>
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
      <div class="input-group mb-3">
        <input type="text" class="form-control rounded-0" v-model="coupon_code" placeholder="請輸入折扣碼" aria-label="Recipient's username" aria-describedby="basic-addon2">
        <span class="btn btn-outline-primary rounded-0 input-group-text" @click="inputCoupon"
        :class="{'disabled':finalPrice }">套用優惠券</span>
      </div>
      <div :class="{ 'text-decoration-line-through':isTrue, 'text-secondary':isTrue, 'p':isTrue}">
        <p class="h5 text-end pe-5">總計:
          <span>NT {{$filters.currency(cart.total)}}元</span>
        </p>
      </div>
      <p class="h5 text-end pe-5 text-primary" v-if="finalPrice === cart.final_total">折扣後:
          <span class="text-primary">NT {{$filters.currency(cart.final_total)}}元</span>
        </p>
      <div class="d-flex justify-content-end" v-if="cart.carts">
          <router-link to="/order" class="stepLink btn btn-outline-primary rounded-pill my-2 px-3" :class="{'disabled':cart.carts.length===0}">
            下一步
            <i class="fas fa-caret-right"></i>
          </router-link>
      </div>
  </div>
</template>

<script>
import NavBar from '@/components/Navbar.vue'
// import emitter from '@/methods/mitt'
export default {
  inject: ['emitter'],
  components: {
    NavBar
  },
  data () {
    return {
      cart: [],
      coupon_code: '',
      isTrue: false,
      finalPrice: '',
      isLoading: true
    }
  },
  methods: {
    // 取得購物車列表
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
    },
    // 更新購物車
    updateCart (item, qty) {
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      const cart = {
        product_id: item.product.id,
        qty: item.qty
      }
      this.$http.put(api, { data: cart })
        .then(res => {
          if (res.data.success) {
            console.log(res)
            this.$swal({
              icon: 'success',
              title: `${res.data.message}`
            })
            this.getCartList()
          } else {
            this.$swal({
              icon: 'error',
              title: `${res.data.message}`
            })
            console.log('res', res)
          }
        })
    },
    // 刪除購物車內的一筆資料
    deleteCartProduct (item) {
      // this.isLoading = true
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.$http.delete(api)
        .then(res => {
          if (res.data.success) {
            this.getCartList()
            // this.isLoading = false
            this.$swal({
              icon: 'success',
              title: `${res.data.message}`
            })
            this.emitter.emit('update-qty')
            // console.log(res)
          } else {
            console.log(res)
            this.$swal({
              icon: 'error',
              title: `${res.data.message}`
            })
          }
        }).catch(err => {
          this.getCartList()
          // this.isLoading = false
          console.log(err)
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
    reduce (item) {
      if (item.product_id === item.product.id) {
        item.qty -= 1
        this.updateCart(item)
      }
      // console.log(item)
    },
    // 套用優惠券
    inputCoupon () {
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/coupon`
      const coupon = {
        code: this.coupon_code
      }
      this.$http.post(api, { data: coupon })
        .then(res => {
          if (res.data.success) {
            this.getCartList()
            this.finalPrice = res.data.data.final_total
            this.isTrue = !this.isTrue
            this.$swal({
              icon: 'success',
              title: `${res.data.message}`
            })
            // console.log(res)
            // console.log(res.data.data.final_total)
          } else {
            this.$swal({
              icon: 'error',
              title: '請確認輸入的代碼'
            })
            // console.log('請確認輸入的代碼')
          }
        }).catch(err => {
          if (err.data === undefined) {
            console.log(err, '找不到優惠代碼')
            console.log('找不到優惠代碼')
          }
        })
    }
  },
  mounted () {
    this.getCartList()
  }
}
</script>

<style lang="scss" scoped>
  h6{
      margin-top: 100px;
  }
  .bg-cover{
    background-position: center center;
    background-size: cover;
    }
    .stepLink{
        margin-top: 80px;
        color:rgb(90, 147, 88);
       &:hover{
          color:#fff
        }
    }
    .banner-text{
      padding:20px 60px;
      background-color:rgba(0, 0, 0,0.5);
    }
    .qty_input{
      width: 50%;
    }
</style>
