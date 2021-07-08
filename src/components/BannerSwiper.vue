<template>
    <swiper ref="{swiperRef}" :centeredSlides="true" :spaceBetween="30"
    :autoplay='{ "delay": 2500, "disableOnInteraction": false }' class="mySwiper text-center">
        <swiper-slide  v-for="(item,index) in banner " :key="index">
            <div class="bg-cover" :style="{backgroundImage:'url(' +item.img+ ')',height:'600px' }">
            <div class="banner-box d-flex align-items-center ps-7">
                <div class="text-white mt-6">
                    <h1>連綿的山峰</h1>
                    <h4>是我們最堅固的屏障，</h4>
                    <h4>也是都市人的世外桃源，</h4>
                    <h5>讓我們一起欣賞台灣最美的風景。</h5>
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
          img: 'https://images.unsplash.com/photo-1603463262427-86b6e34fb077?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=890&q=80'
        },
        {
          img: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
        },
        {
          img: 'https://images.unsplash.com/photo-1445307806294-bff7f67ff225?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=753&q=80'
        },
        {
          img: 'https://images.unsplash.com/photo-1528827281426-e8e628634623?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=810&q=80'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
    .banner-box{
        height: 500px;
    }
</style>
