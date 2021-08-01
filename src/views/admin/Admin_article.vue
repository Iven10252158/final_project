<template>
  <Loading :active="isLoading">
      <div class="loadingio-spinner-dual-ring-7s087i3q3b3"><div class="ldio-us6frdv3wm">
      <div></div><div><div></div></div>
      </div></div>
  </Loading>
  <div class="container">
      <div class="row">
          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <div class="d-flex justify-content-end mt-3">
                  <button type="button" class="btn btn-primary text-white" @click="openModal(true)">新增貼文</button>
              </div>
              <ArticleModal ref="articleModal" :inner-article-info="tempArticle" :is-new="isNew" @update-article="updateArticle"></ArticleModal>
              <DeleteArticleModal ref="deleteArticle" :delete-modal="tempArticle" @check-delete="removeArticle"></DeleteArticleModal>
              <table class="table table-hover mt-3 row table-responsive" data-toggle="table">
                  <thead class="col-12">
                      <tr class="row">
                          <th class="col-2">標題</th>
                          <th class="col-2 text-center">作者</th>
                          <th class="col-2 text-center">描述</th>
                          <th class="col-2 text-center">建立時間</th>
                          <th class="col-2 text-center">是否公開</th>
                          <th class="col-2  text-end">編輯</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr class="row" v-for="item in allArticles" :key="item.id">
                          <td class="col-2">{{item.title}}</td>
                          <td class="col-2 text-center">{{item.author}}</td>
                          <td class="col-2 text-center">{{item.description}}</td>
                          <td class="col-2 text-center">
                              {{$filters.date(item.create_at)}}
                          </td>
                          <td class="col-2 text-center">
                              <span v-if="item.isPublic" class="text-success">公開</span>
                              <span v-else>不公開</span>
                          </td>
                          <td class="col-2 text-end">
                          <div class="btn-group">
                              <button type="button" class="editBtn btn btn-outline-primary btn-sm"  @click="getArticle(item)">編輯</button>
                              <button type="button" class="btn btn-outline-danger btn-sm" @click="openRemoveArticleModal(item)">刪除</button>
                          </div>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </main>
      </div>
  </div>
</template>

<script>
import ArticleModal from '@/components/ArticleModal.vue'
import DeleteArticleModal from '@/components/DeleteModal.vue'
export default {
  components: {
    ArticleModal,
    DeleteArticleModal
  },
  data () {
    return {
      tempArticle: {}, // 預設就是要拿來存放文章資訊的物件
      allArticles: [],
      article: {},
      pagination: {},
      isNew: false, // 後面新增/修改的API要利用isNew的值來決定API的行為
      isLoading: false
    }
  },
  inject: ['MessageStatus'],
  methods: {
    updateArticle (item) {
      let api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/article`
      let httpMethod = 'post'
      let status = '新增產品'
      if (!this.isNew) {
        api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/article/${item.id}`
        httpMethod = 'put'
        status = '編輯產品'
      }

      this.$http[httpMethod](api, { data: this.tempArticle })
        .then(res => {
          if (res.data.success) {
            this.MessageStatus(res, status)
            this.getArticles()
            console.log('item', item)
          } else {
            this.MessageStatus(res, status)
            console.log(res)
          }
        }).catch(err => {
          console.log(err)
        })
    },
    getArticles (page = 1) {
      this.isLoading = true
      this.$http.get(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/articles?page=${page}`)
        .then(res => {
          if (res.data.success) {
            this.isLoading = false
            this.allArticles = res.data.articles
            // console.log('allArticles', res)
          }
          this.$refs.articleModal.hideModal()
        }).catch(err => {
          console.log(err)
        })
    },
    getArticle (item) {
      this.$http.get(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/article/${item.id}`)
        .then(res => {
          if (res.data.success) {
            // this.article = res.data.article
            this.openModal(false, res.data.article)
          }
        }).catch(err => {
          console.log(err)
        })
    },
    openModal (isNew, item) {
      if (isNew) {
        this.isNew = true
        this.tempArticle = {
        // 當新增貼文的modal打開時，會取得本地的時間戳記
        // 因為要傳進內層轉換成日期格式，所以要 / 1000
          create_at: Math.floor(new Date().getTime() / 1000),
          tag: []
        //   console.log('打開Modal當下的時間戳', this.tempArticle.create_at)
        }
        this.$refs.articleModal.showModal()
      } else {
        // console.log(isNew, item)
        this.isNew = false
        this.tempArticle = {
          ...item,
          create_at: Math.floor(new Date().getTime() / 1000)
        }
        // console.log('edit tempArticle', this.tempArticle)
        this.$refs.articleModal.showModal()
      }
    },
    openRemoveArticleModal (item) {
      this.$refs.deleteArticle.showModal()
      this.tempArticle = { ...item }
    },
    removeArticle () {
      // console.log('remove', this.tempArticle)
      this.$http.delete(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/article/${this.tempArticle.id}`)
        .then(res => {
          this.getArticles()
        }).catch(err => {
          console.log(err)
        })
      this.$refs.deleteArticle.hideModal()
    }
  },
  mounted () {
    this.getArticles()
  }
}
</script>
