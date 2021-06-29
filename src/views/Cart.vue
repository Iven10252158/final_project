<template>
  <NavBar></NavBar>
  <div class="banner bg-cover d-flex justify-content-center align-items-center" style="background-image:url('https://images.unsplash.com/photo-1592805145006-353114433db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80');height:400px">
      <div class="cart-text text-white">
          <h3 class="pt-2">購物車</h3>
      </div>
  </div>
  <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <h6 class="mb-3 mt-5">購物明細</h6>
            <router-link to="/products" class="backToShopLink btn btn-outline-primary rounded-pill mb-2 px-3 mt-4">
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
                <p class="d-none d-sm-table-cell" v-if="finalPrice === cart.final_total"
                :class="{'text-success':isTrue}">已套用此優惠</p>
              </td>
              <td class="ps-sm-5 align-middle d-table-cell">
                  <p class="d-sm-none">{{item.product.title}}</p>
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
              <td class="text-center">
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
        <span class="btn btn-outline-primary rounded-0 input-group-text" @click="inputCoupon">套用優惠券</span>
      </div>
      <div :class="{ 'text-decoration-line-through':isTrue, 'text-secondary':isTrue, 'p':isTrue}">
        <p class="h5 text-end pe-5">總計:
          <span>NT {{$filters.currency(cart.total)}}元</span>
        </p>
      </div>
      <p class="h5 text-end pe-5 text-primary" v-if="finalPrice === cart.final_total">折扣後:
        <span class="text-primary">NT {{$filters.currency(cart.final_total)}}元</span>
      </p>
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
      cart: [],
      coupon_code: '',
      isTrue: false,
      finalPrice: ''
    }
  },
  methods: {
    // 取得購物車列表
    getCartList () {
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(api)
        .then(res => {
          this.cart = res.data.data
          console.log('購物車', res)
          console.log(this.cart)
        })
    },
    // 更新購物車
    updateCart (item) {
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      const cart = {
        product_id: item.product.id,
        qty: item.qty
      }
      this.$http.put(api, { data: cart })
        .then(res => {
          if (res.data.success) {
            console.log(res)
            this.getCartList()
          } else {
            console.log(res)
          }
        }).catch(err => {
          console.log(err)
        })
    },
    // 刪除購物車內的一筆資料
    deleteCartProduct (item) {
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.$http.delete(api)
        .then(res => {
          if (res.data.success) {
            this.getCartList()
            console.log(res)
          } else {
            console.log(res)
          }
        }).catch(err => {
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
      console.log(item)
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
            console.log(res)
            console.log(res.data.data.final_total)
          } else {
            console.log('請確認輸入的代碼')
          }
        }).catch(err => {
          if (err.data === undefined) {
            // console.log(err, '找不到優惠代碼')
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

<style lang="scss">
  h6{
      margin-top: 100px;
  }
  .bg-cover{
    background-position: center center;
    background-size: cover;
    }
    .backToShopLink{
        margin-top: 80px;
        color:rgb(90, 147, 88);
       &:hover{
          color:#fff
        }
    }
    .cart-text{
      padding:20px 60px;
      background-color:rgba(0, 0, 0,0.5);
    }
    .qty_input{
      width: 50%;
    }
</style>
