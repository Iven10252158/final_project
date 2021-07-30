<template>
  <swiper ref="{swiperRef}" :centeredSlides="true" :spaceBetween="30"
  :autoplay='{ "delay": 2500, "disableOnInteraction": false }' class="mySwiper text-center">
    <swiper-slide v-for="(item,index) in bannerFirst " :key="index">
        <div class="bg-cover" :style="{backgroundImage:'url(' +item.img+ ')',height:'600px' }">
        <div class=" banner-box d-flex align-items-center justify-content-center justify-content-lg-start ms-0 ps-lg-7">
          <div v-if="index < 2" data-aos="flip-up" data-aos-duration="1000" class="banner-text text-white mt-6">
              <div class="fs-1 lh-base">連綿的山峰</div>
              <div class="fs-5 fs-lg-3 lh-base">是我們最堅固的屏障，也是都市人的世外桃源</div>
              <div class="fs-6  lh-base">讓我們一起欣賞台灣最美的風景。</div>
              <button type="button" class="btn btn-primary mt-2">
                <router-link to="/products" class="h6 text-white see-mountain">查看登山行程</router-link>
              </button>
          </div>

          <div class="banner-text text-white mt-6" v-if="index > 1">
            <div class="fs-1 lh-base">山就是老師</div>
            <div class="fs-5 fs-lg-3 lh-base">走入大自然，就是學習的一種方式</div>
            <div class="fs-5 fs-lg-3 lh-base">只要能讓孩子留下正面的記憶，就是改變的種子</div>
            <div class="fs-6  lh-base">走吧！帶著孩子一起享受山林的魅力吧！</div>
            <button type="button" class="btn btn-primary mt-2">
              <router-link to="/products" class="h6 text-white see-mountain">查看登山行程</router-link>
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
      bannerFirst: [
        {
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/iven_vue3_course/1627613003133.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=DiT%2FZG5dQxzs9ZV%2F30QimA6qHllBzS%2B2Z5iD0qmI04I42%2FHnOJ%2FNy%2BomtGL19Z5Ba7AbFTSY6GReF8rMw82%2F7z28K7nMKmlVA1bqP2Wy0NVBWRjRiCuCm4AlZZSQjl6WohyDiYOg%2F4vp6nWnbx%2BOSIe7S2SCVIIsQLqWT963dLxUSolQiXgTXtxWjsEKK5uZZbSqo02R1Kzf88jKofRjU2XKa4qME5ykFdKuAob7779cPDTcNT6C2T8C3xhQXDd7sgWs7ihG0g1ztSUi6R%2Bj8NUHMCV7dAtoB2%2Bc%2BTyT281iG4DucFnZUibCA%2F%2FbLWKTmkDeGxaP%2F2fJ0ZuoDFa4rg%3D%3D'
        },
        {
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/iven_vue3_course/1627612967371.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=aLCVMUvpPQL6BamQ3vTJ5MsP1unrQcf5jHtyCxfp1vCJp4lJ9erSxLZ7L4rcnZWP75UrcSOuIGUz1Yq%2BMADuC%2BRxmuwE0UOEoDvhXLGmiW4KzL7zFRJmM5wN%2FYqfnOjtE4NfFHWIKRKW6WMSJScxryeHwyykocy8QI8OxQeItMi8HH%2FMRtgukKMqSot1Mp73a9hz7G3ifoxJsxUFsy2z4MVgKdNUprfq19sUXIz4XhLhoSRVTJueGow4VAo3QfBIW3TpPCiGYLfMoCGh5kaWRJLMWnk%2FGhPvEgFVVz2NZcDQ0%2BkrHXEVpdbTSeoIqrnS8ByHq%2F61Hx6u2hcp7VRDEA%3D%3D'
        },
        {
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/iven_vue3_course/1627613029197.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=duYcc2FPVunR3J%2BfMgHNYDL4syzy1A5dRztdVGXEt4BWCQjxWNUgdleeSvdKCY6%2B6dJGWLYYM0V2oIA2rJLZauwCVYYblH3bxl93uMTxAjBscpATsfr0NIR4%2FJ6gV0F7ofhd1Xofy0ILSpLri4VtIIFxoY0TUC6779y1uOA64nZ8xzkIQOEhV5E0yc218P%2BqvxIdPtBI0A5Elcrm4vK%2BHddKy5GFS35pu15qRN45fGgBIY2EXnMdZIQ5ZuwUML%2BnP7xGtfQwLo%2FYjg3wIcB4mTs0J8%2BcdVVntOMtXL8Teo8HPD8dp%2FQ5DzC%2Bml0eCyIfgrSjPBMgWpEkFGq1SDEZng%3D%3D'
        },
        {
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/iven_vue3_course/1627613075009.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=JkXNm5lhW%2BFcOyirfIem1k5l8YT9biemnq%2FfpNdmcEOZD0OC9jzjU92Do90oj2lFa1gTXMgmW2Co9FfPFsWRaoCMj0%2BdD2LCWc0RmyCfcrfp25K%2FWsTv8hvWRIvgShy9925h55KfT3Oopkncmer7FEh9utWWu30iUjJGieaBp604W%2Frf%2Fz3ixg5ZXi6WSw3cpcYWnXak%2B7emZuF0i86cU8uApm%2BXZft0PJQirnn1UPsUl%2Bg8xZ31L%2ByJSiMNXavqEllD0djr4dJRD3cPcoRios%2B99XFPQQYjqW3Wba0Ztz2%2Bti0uvcAaDbQoSS33b5BCUXKmC5mwBA7kMU3ihqNDQg%3D%3D'
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
    letter-spacing: 2px;
  }
  .see-mountain{
    letter-spacing: 1px;
  }
</style>
