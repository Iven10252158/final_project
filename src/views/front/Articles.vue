<template>
    <Loading :active="isLoading">
        <div class="loadingio-spinner-dual-ring-7s087i3q3b3"><div class="ldio-us6frdv3wm">
        <div></div><div><div></div></div>
        </div></div>
    </Loading>
    <div class="banner bg-cover d-flex justify-content-center align-items-center" style="background-image:url('https://storage.googleapis.com/vue-course-api.appspot.com/iven_vue3_course/1627614521477.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=q27Qitew1D8z8gpED3%2FI4yYjrFDLQcxC7PCOYTss63GPl3wvhXOk0LztoIlHty4V6kjXlLFu22Fy9RaaskZrV3quq3JGeeOoq33miufS%2BK8FLH5ZqWyN2e5xXAyjm8RN3cPxwPjeu%2B564REcRuJVPiSxKWhUFHibnh2jDspJG4qoJPaze%2FsWzji9KjXN9Bz%2B4BsXIbVGX56xyTTAssnYKYVQrewvOx0jtCLRlBELr532Tez3%2BwVxTqmNZJKg8S94R5%2BwkTM6ww4vPyYR90BorZWVFaZibYfdzyqJsGoZS2EHOwZpUO%2BSqh4nI268yOy3bLZ%2F%2BltaY1ggG0X9b6ur0Q%3D%3D');height:500px">
        <div class="banner-text text-white">
            <h3 class="pt-1">文章列表</h3>
        </div>
    </div>
    <div class="container innerWrap">
        <div class="row">
            <template  v-for="item in allArticles" :key="item.id">
                <div class="col-lg-6 my-3" v-if="item.isPublic">
                    <div class="card h-100">
                        <div class="row g-0">
                            <div class="col-md-5">
                                <div class="bg-cover" :style="{backgroundImage:'url(' +item.imageUrl+ ')',height:'200px' }"></div>
                            </div>
                            <div class="col-md-7">
                                <div class="card-body">
                                    <h5 class="card-title">{{item.title}}</h5>
                                    <p class="card-text">{{item.description}}</p>
                                    <router-link :to="`/article/${item.id}`" class="text-primary">繼續閱讀</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
<Footer class="footer"></Footer>
</template>
<script>
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Footer
  },
  data () {
    return {
      allArticles: [],
      isLoading: false
    }
  },
  methods: {
    getArticles () {
      this.isLoading = true
      this.$http.get(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/articles`)
        .then(res => {
          this.isLoading = false
          this.allArticles = res.data.articles
        })
    }
  },
  mounted () {
    this.getArticles()
  }
}
</script>
<style lang="scss">
$background-color:rgba(0, 0, 0,0.5);
    .bg-cover{
        background-position: center center;
        background-size: cover;
    }
    .banner-text{
    padding:20px 60px;
    background-color:$background-color;
    }
    .innerWrap{
        min-height: calc( 64vh - 72px );
    }
    .footer{
        height: 72px;
    }
</style>
