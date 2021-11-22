<template>
  <div class="offcanvas offcanvas-end" tabindex="-1" ref="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header pb-0">
          <h5 class="offcanvasRightLabel mb-0">我的最愛</h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div v-if="filters.length === 0" class="offcanvas-body">
          <div class="d-flex">
              <p class="fs-6 text-muted mb-0 mt-1">還沒有喜歡的商品嗎？</p>
              <button class="btn btn-primary btn-sm" type="button">
                  <router-link to="/products">
                      <p class="text-white mb-0">快來收藏吧！</p>
                  </router-link>
              </button>
          </div>
      </div>
      <div class="offcanvas-body">
          <div class="card" v-for="(item,index) in filters" :key="index">
              <div class="row g-0">
                  <div class="col-md-4">
                      <div class="bg-cover" :style="{backgroundImage:'url(' +item.imageUrl+ ')',height:'80px' }"></div>
                  </div>
                  <div class="col-md-8">
                      <div class="card-body d-flex align-items-center">
                            <p class="pe-3 mb-0">{{ item.title }}</p>
                            <button type="button" class="cardBtn btn btn-outline-secondary btn-sm border-0" @click="remove(item,index)">
                                <i class="fas fa-times"></i>
                            </button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Offcanvas from 'bootstrap/js/dist/offcanvas'
const storageMethods = {
  setItem (MyFavorite) {
    const favoriteString = JSON.stringify(MyFavorite)
    localStorage.setItem('MyFavorite', favoriteString)
  },
  getItem () {
    return JSON.parse(localStorage.getItem('MyFavorite'))
  }
}

export default {
  inject: ['emitter'],
  data () {
    return {
      bsOffcanvas: '',
      favoItem: storageMethods.getItem() || [], // 最愛的清單內容
      allProducts: [], // 所有產品
      filters: [] // (渲染用)篩選後的最愛清單資料
    }
  },
  methods: {
    // 打開畫布時取得的資料
    showCanvas (data) {
      // 當畫布打開的時候取得localStorage裡的資料
      console.log('data', data)
      this.favoItem = data
      console.log('favoItem', this.favoItem)
      this.getProducts()
      this.bsOffcanvas.show()
    },
    // 取得我的最愛列表
    getFavorite () {
      // 把所有的產品資料拿來做filter篩選
      this.filters = this.allProducts.filter((item, index) => {
        // 如果在localStorage裡有一樣的產品id
        if (this.favoItem.includes(item.id)) {
          // 就回傳一樣的產品到最愛清單上filters
          return item
        }
      })
    },
    remove (item) {
      this.favoItem = storageMethods.getItem() || []
      this.filters.forEach((element, index) => {
        if (element.id === item.id) {
          this.favoItem.splice(index, 1)
          storageMethods.setItem(this.favoItem)
          this.getProducts()
          // console.log(this.favoItem.length)
          this.emitter.emit('favorite-qty', this.favoItem)
          this.emitter.emit('remove-data', this.favoItem)
        }
      })
    },
    getProducts () {
      this.$http.get(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/products/all`)
        .then(res => {
          if (res.data.success) {
            this.allProducts = res.data.products
            this.getFavorite()
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
    this.bsOffcanvas = new Offcanvas(this.$refs.offcanvasRight)
    this.getProducts()
  }
}
</script>

<style lang="scss" scpoed>
    .cardBtn{
      margin-top: -15px;
    }
    .bg-cover{
      background-position: center center;
      background-size: cover;
    }
</style>
