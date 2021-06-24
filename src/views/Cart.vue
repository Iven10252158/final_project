<template>
    <div class="container">
        <div class="d-flex justify-content-between align-items-center mt-1">
          <h6 class="mb-3">購物車</h6>
          <!-- <button type="button" class="backToShop btn btn-outline-primary rounded-pill mb-2 btn-sm p-2"> -->
              <router-link to="/products" class="backToShopLink btn btn-outline-primary rounded-pill mb-2 px-3">
                <i class="fas fa-caret-left"></i>
                繼續選購
              </router-link>
          <!-- </button> -->
        </div>
    <ul class='row list-unstyled border-top border-2 pt-3 d-flex align-items-center' v-for='item in cart.carts' :key='item.id'>
        <li class="col-2 bg-cover" :style="{backgroundImage:'url(' +item.product.imageUrl+ ')',height:'120px' }"></li>
        <li class="col-3 ps-3">{{item.product.title}}</li>
        <li class="col-2">
            <div class="input-group ms-7">
                <button type="button" :disabled="item.qty===1" @click="reduce(item)"
                class="btn btn-outline-primary btn-sm input-group-text">
                    <i class="fas fa-minus"></i>
                </button>
                <p class="form-control text-center m-0 border-end-0 border-start-0">{{item.qty}}</p>
                <button type="button"  @click="addNum(item)"
                class="btn btn-primary btn-sm">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        </li>
        <li class="col-3 text-end">{{$filters.currency(item.total)}}</li>
        <li class="col-2 text-end">
        <button type="button" class="btn btn-outline-danger input-group-text"
        @click="deleteCartProduct(item)">
            <i class="fas fa-trash-alt"></i>
        </button>
        </li>
    </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      cart: []
    }
  },
  methods: {
    // 取得購物車列表
    getCartList () {
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(api)
        .then(res => {
          this.cart = res.data.data
          // const { carts } = res.data.data
          //   this.cart = carts
          console.log(res)
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
    // .backToShop{

    // }
    .backToShopLink{
        margin-top: 80px;
        color:rgb(90, 147, 88);
       &:hover{
          color:#fff
        }
    }
</style>
