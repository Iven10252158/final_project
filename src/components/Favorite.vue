<template>
 <div class="offcanvas offcanvas-end" tabindex="-1" ref="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header mb-0">
    <h5 class="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div class="card" v-for="(item,index) in favoItem" :key="index">
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
      favoItem: storageMethods.getItem()
    }
  },
  methods: {
    showOffcanvas () {
      this.bsOffcanvas.show()
    },
    getFavorite () {
      this.favoItem = storageMethods.getItem()
    },
    remove (item, index) {
      this.favoItem.splice(index, 1)
      storageMethods.setItem(this.favoItem)
      console.log(item, index)
    }
  },
  mounted () {
    this.bsOffcanvas = new Offcanvas(this.$refs.offcanvasRight)
    this.emitter.on('send-favorite', (data) => {
      this.getFavorite()
    })
  }
}
</script>

<style lang="scss">
    .bg-cover{
        background-position: center center;
        background-size: cover;
    }
</style>
