<template>
    <div class="container">
        <h4 class="mb-4">登山小知識</h4>
        <div class="row">
            <div data-aos="zoom-in" data-aos-duration="2000" class="col-12 col-md-6 col-lg-4 mb-4" v-for="item in allArticles" :key="item.id">
                <div class="image bg-cover rounded-3 position-relative" :style="{backgroundImage:'url(' +item.imageUrl+ ')', paddingTop:'66%' } ">
                    <div class="mask rounded-3 position-absolute text-white px-3 py-2 py-sm-3 py-md-2 py-xl-5">
                        <h5 class="post-title mt-sm-6 mt-md-0 mb-0 py-2 py-md-3 py-lg-2">{{item.title}}</h5>
                        <p class="post-content lh-base mb-0 pb-2 pb-md-3 pb-lg-2">{{item.description}}</p>
                        <router-link class="text-white text-decoration-underline" :to="`/article/${item.id}`">查看更多...</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      id: '',
      article: {},
      allArticles: [],
      isLoading: false
    }
  },
  methods: {
    getArticles () {
      this.isLoading = true
      this.$http.get(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/articles`)
        .then(res => {
          if (res.data.success) {
            this.isLoading = false
            this.allArticles = res.data.articles
          }
        }).catch(err => {
          console.log(err)
        })
    },
    gatAticle () {
      this.isLoading = true
      this.id = this.$route.params.id
      this.$http.get(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/article/${this.id}`)
        .then(res => {
          if (res.data.success) {
            this.isLoading = false
            this.article = res.data.article
          }
        }).catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getArticles()
  }
}
</script>

<style lang="scss" scoped>
$Knowladge-background-color:rgba(0, 0, 0,0.5);
$text-color:#fff;
    .bg-cover{
      background-position: center center;
      background-size: cover;
    }
    .mask{
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      background:$Knowladge-background-color;
      color: $text-color;
      opacity: 0;
      transition: 0.5s ease-in-out;
    }
    .image{
      &:hover{
        .mask{
            cursor: pointer;
            opacity:1;
        }
      }
    }
    .post-title{
      letter-spacing: 2px;
    }
    .post-content{
      letter-spacing: 2px;
    }
</style>
