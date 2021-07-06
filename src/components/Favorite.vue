<template>
 <div class="offcanvas offcanvas-end" tabindex="-1" ref="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body" v-for="item in favoItem" :key="item.id">
      <div class="row border-bottom">
        <div class="col-3">
            <div class="bg-cover" :style="{backgroundImage:'url(' +item.imageUrl+ ')',height:'100px' }"></div>
        </div>
        <div class="col-9">
            <h6>{{item.title}}</h6>
            <p>{{item.program}}</p>
            <!-- <p>NT {{$filters.currency(item.price)}}</p> -->
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
      favoItem: storageMethods.getItem() || []
    }
  },
  methods: {
    showOffcanvas () {
      this.bsOffcanvas.show()
    }
  },
  mounted () {
    this.bsOffcanvas = new Offcanvas(this.$refs.offcanvasRight)
    this.emitter.on('send-favorite', (data) => {
      console.log('emitter-on', data)
      console.log('this.favoItem', this.favoItem)
      // const { title, program, id, imageUrl } = data
      this.favoItem.push({ data })
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
