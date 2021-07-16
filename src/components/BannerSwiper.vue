<template>
  <swiper ref="{swiperRef}" :centeredSlides="true" :spaceBetween="30"
  :autoplay='{ "delay": 2500, "disableOnInteraction": false }' class="mySwiper text-center">
    <swiper-slide v-for="(item,index) in banner " :key="index">
        <div class="bg-cover" :style="{backgroundImage:'url(' +item.img+ ')',height:'600px' }">
        <div class="banner-box d-flex align-items-center justify-content-center justify-content-lg-start ms-0 ps-lg-7">
          <div data-aos="flip-up" data-aos-duration="1000" class="banner-text text-white mt-6">
            <div class="fs-1 lh-base">連綿的山峰</div>
            <div class="fs-5 fs-lg-3 lh-base">是我們最堅固的屏障，也是都市人的世外桃源</div>
            <div class="fs-6  lh-base">讓我們一起欣賞台灣最美的風景。</div>
            <button type="button" class="btn btn-primary mt-2">
              <router-link to="/products" class="h6 text-white">查看登山行程</router-link>
            </button>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
// import './style.css'
// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Autoplay
} from 'swiper/core'
SwiperCore.use([Autoplay, Navigation])

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      banner: [
        {
          img: 'https://images.unsplash.com/photo-1535013241061-d6f7293be779?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
        },
        {
          img: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
        },
        {
          img: 'https://images.unsplash.com/photo-1445307806294-bff7f67ff225?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=753&q=80'
        },
        {
          img: 'https://images.unsplash.com/photo-1528846328457-87c98b48ef37?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.bg-cover{
  background-position: center center;
  background-size: cover;
}
.banner-box{
    height: 500px;
  }
.banner-text{
    padding: 20px 60px;
    background-color:rgba(0, 0, 0,0.5);
  }
</style>
