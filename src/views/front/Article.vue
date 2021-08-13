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
    <div class="container">
        <nav class="mt-3" aria-label="breadcrumb">
            <ol class="breadcrumb article-breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/articles" class="text-primary">部落格列表</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">{{ article.title }}</li>
            </ol>
        </nav>
        <div class="row innerHeight justify-content-center">
            <div class="col-md-10 col-lg-8">
                <h5>{{ article.title }}</h5>
                <div class="d-flex">
                    <p class="text-muted">作者：{{ article.author }} - </p>
                    <p class="text-muted">發表時間 {{ $filters.date(article.create_at) }}</p>
                </div>
                <span v-for="item in article.tag" :key="item">
                    <span class="badge rounded-pill bg-secondary me-2 mb-2">{{ item }}</span>
                </span>
                <div class="d-flex justify-content-center flex-wrap">
                    <div class="article-img" v-html="article.content"></div>
                </div>
            </div>
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
      id: '',
      article: {},
      isLoading: false
    }
  },
  methods: {
    gatAticle () {
      this.isLoading = true
      this.id = this.$route.params.id
      this.$http.get(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/article/${this.id}`)
        .then(res => {
          this.isLoading = false
          this.article = res.data.article
        }).catch(err => {
          this.$swal({
            icon: 'error',
            title: `${err.data.message}`
          })
        })
    }
  },
  mounted () {
    this.gatAticle()
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
    .innerHeight{
      min-height: calc( 59vh - 72px )
    }
    .footer{
      height: 72px;
    }
    .article-img{
    img{
      height: auto;
      max-width: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
</style>
