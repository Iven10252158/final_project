<template>
 <div class="offcanvas offcanvas-end" tabindex="-1" ref="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header mb-0">
    <h5 class="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div class="card" v-for="(item,index) in filters" :key="index">
      <div class="row g-0">
        <div class="col-md-4">
          <div class="bg-cover"
          :style="{backgroundImage:'url(' +item.imageUrl+ ')',height:'100px' }"></div>
        </div>
        <div class="col-md-8">
          <div class="card-body d-flex">
            <p class="card-text">{{item.title}}</p>
            <small class="card-text text-muted" @click="remove(item,index)">
              <i class="fas fa-times"></i>
            </small>
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
console.log(storageMethods)

export default {
  inject: ['emitter'],
  data () {
    return {
      bsOffcanvas: '',
      favoItem: storageMethods.getItem(),
      products: [],
      filters: []
    }
  },
  methods: {
    showCanvas () {
      this.bsOffcanvas.show()
    },
    remove (item, index) {
      this.filters.splice(index, 1)
      storageMethods.setItem(this.filters)
      console.log(item, index)
    },
    getFavorite () {
      this.favoItem = storageMethods.getItem()
    },
    getProducts () {
      // /api/:api_path/products
      this.$http.get(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/products/all`)
        .then(res => {
          if (res.data.success) {
            this.products = res.data.products
            this.products.filter(product => {
              if (this.favoItem.indexOf(product.id) !== -1) {
                this.filters.push(product)
                storageMethods.setItem(this.filters)
                console.log('this.filters', this.filters)
              }
            })
            console.log(this.products)
          }
        })
    }
  },
  mounted () {
    this.bsOffcanvas = new Offcanvas(this.$refs.offcanvasRight)
    this.emitter.on('send-favorite', (data) => {
      this.filters.push(data)
      console.log('emitter-on', data)
    //   this.getFavorite()
    })
    this.getFavorite()
    this.getProducts()
  }
}
</script>
