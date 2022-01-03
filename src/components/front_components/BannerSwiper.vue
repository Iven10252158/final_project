<template>
    <swiper ref="{swiperRef}" :centeredSlides="true" :spaceBetween="30" :loop="true"
      :autoplay='{ "delay": 2500, "disableOnInteraction": false }' class="mySwiper text-center">
        <swiper-slide v-for="(item,index) in bannerFirst " :key="index">
            <div class="bg-cover" :style="{backgroundImage:'url(' +item.img+ ')',height:'600px' }">
              <div class="container banner-box d-flex align-items-center justify-content-center justify-content-lg-start px-0 px-lg-3">
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
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/iven_vue3_course/1627612967371.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=aLCVMUvpPQL6BamQ3vTJ5MsP1unrQcf5jHtyCxfp1vCJp4lJ9erSxLZ7L4rcnZWP75UrcSOuIGUz1Yq%2BMADuC%2BRxmuwE0UOEoDvhXLGmiW4KzL7zFRJmM5wN%2FYqfnOjtE4NfFHWIKRKW6WMSJScxryeHwyykocy8QI8OxQeItMi8HH%2FMRtgukKMqSot1Mp73a9hz7G3ifoxJsxUFsy2z4MVgKdNUprfq19sUXIz4XhLhoSRVTJueGow4VAo3QfBIW3TpPCiGYLfMoCGh5kaWRJLMWnk%2FGhPvEgFVVz2NZcDQ0%2BkrHXEVpdbTSeoIqrnS8ByHq%2F61Hx6u2hcp7VRDEA%3D%3D'
        },
        {
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/iven_vue3_course/1629253829780.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=AshPe6mzS%2Fjm091pTjZc%2FJzgd%2BrtGZkAwVeVA6nT0BhvQI0LelpKFYoH1HJw6HD2q2%2BwoKGEqPSVZuBbivY7LuJPZVaA1OCcNr6udZCKW3E3MHrPV84iVp8t8X9XyLX5y%2F%2FEBMhrwJMZfD3tHWihmAFKohn9Ljg7zewv9a7lzUCQ4NfBGYawb6rYduOdzQvNAUP%2BnLmM7kraftaxXYwxfgaoMjVoSAIy5h4veeB%2BpWktHNv%2By6tsWgj1kcd9R0BgqMMG6f5xPizcTrmtUr%2BYe4CMP%2BF7t34nUgWxYZw9HF%2BRdJflMvc0NGwHFbjX8v1%2FJ50jYObNVW%2BxQL6qgxHLdA%3D%3D'
        },
        {
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/iven_vue3_course/1628480870447.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=HNmT0LB2mhu6Cd5z3LdUJDRsyiEiKx1u39OdT6LmQKucZY1hISX9z2WlZHsXtQIGSfBgNwxogQxidTibX0BPKk%2FEXWoYdAiAlHSAvDSl%2FKputGO18fQsCxjGvKCWDEwGALjJDC7ZLgwLjiDiCUNjV1FAoHaz0B%2BH52%2BoRyjiymFkQqO7vQV6lLRd%2B20STa49roEayrGhZVxLXW9ak4pGtjf8N5KhbvAd6%2Bp%2B3S9G%2BNLzqB%2FTYTGjijP7yi26gWjVyBw5FmVAXgDhk%2Fu0uhkhYUlLAjiIB64VZLwZwjYRQOwcG9sMjAJgod%2F6m%2BXGaEIsYMpwig62F2AD3xIueM7EaA%3D%3D'
        },
        {
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/iven_vue3_course/1628480890561.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=AkkN2MDY0eAjtoJLKl5crO4IcoBrkHJno%2BOcxfOQzCPhPHTWcTZsdo2dwn5wnZCr9pV8L1HoO0YBI5OvTc0X64%2FJulJWNZ0TLRN%2BErS9rOHarluLu2jkQa5aHckz8wtO2kferV1WuF9QJmOQ9dtFB4vwvw0z5jd2b1udwiXnxr4VkMfFj7CE1Gf203Gxz6lYNtpIqGTbYflm8%2B5U5aj%2FwOb4U%2BCEOqg9Y1mDoJ12O2vacQc%2BRYye0uDymxFFqmMOZ2Yg5jPDRN183YAZ9fzbq%2BBlrdpYpYfaLJGxm4yig6rMWtolFgy%2FQRHFFKFwT2KCkh7coOCPu9FpA3nMHjJkog%3D%3D'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
$background-color:rgba(0, 0, 0,0.5);
    .bg-cover{
      background-position: center center;
      background-size: cover;
    }
    .banner-box{
      height: 500px;
    }
    .banner-text{
      padding: 20px 60px;
      background-color:$background-color;
      letter-spacing: 2px;
    }
    .see-mountain{
      letter-spacing: 1px;
    }
</style>
