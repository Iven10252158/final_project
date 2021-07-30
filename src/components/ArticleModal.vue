<template>
  <div class="modal fade" id="exampleModal" ref="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl">
          <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel" v-if="isNew">新增貼文</h5>
              <h5 class="modal-title" id="exampleModalLabel" v-else>編輯貼文</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              <div class="row">
                  <!-- 左邊 -->
                  <div class="col-sm-4">
                    <div class="mb-3">
                      <label for="title" class="form-label">文章標題</label>
                      <input type="text" class="form-control" id="title" placeholder="請輸入標題" v-model="innertempArticle.title">
                    </div>
                    <div class="mb-3">
                      <label for="image" class="form-label">封面圖片</label>
                      <input type="file" ref="fileInput" class="form-control" id="image" @change="uploadFile">

                      <input type="text" class="form-control mt-2" id="image" placeholder="請輸入圖片連結"
                        v-model="innertempArticle.imageUrl">
                      <img :src="innertempArticle.imageUrl" class="mt-3 img-fluid" alt="">
                    </div>
                    <div class="mb-3">
                      <label for="author" class="form-label">作者</label>
                      <input type="text" class="form-control" id="author" placeholder="請輸入作者名稱" v-model="innertempArticle.author">
                    </div>
                    <div class="mb-3">
                      <label for="date" class="form-label">日期</label>
                      <input type="date" class="form-control" id="date" v-model="create_at" disabled>
                    </div>
                  </div>
                  <!-- 右邊 -->
                  <div class="col-sm-8">
                      <div class="mb-3">
                          <label for="tag" class="form-label">標籤</label>
                          <div class="row gx-1 mb-3">
                            <div class="col-md-2" v-for="(item,key) in innertempArticle.tag" :key="key">
                              <div class="input-group input-group-sm">
                                <input type="text" class="form-control form-control" id="tag"
                                  placeholder="請輸入標籤" v-model="innertempArticle.tag[key]">
                                <button type="button" class="btn btn-outline-danger" @click="innertempArticle.tag.splice(key,1)">
                                  <i class="fas fa-times"></i>
                                </button>
                              </div>
                            </div>
                            <div class="col-md-2 mb-1" v-if="innertempArticle.tag">
                              <button class="btn btn-outline-primary btn-sm d-block w-100" v-if="!innertempArticle.tag.length || innertempArticle.tag[innertempArticle.tag.length - 1]"
                              @click="innertempArticle.tag.push('')">
                                新增標籤
                              </button>
                            </div>
                            </div>
                          </div>
                      <div class="mb-3">
                          <label for="description">文章描述</label>
                          <textarea type="text" rows="3" class="form-control mt-2" id="description" placeholder="請輸入文章描述"
                          v-model="innertempArticle.description"></textarea>
                      </div>
                      <!-- 編輯器 -->
                      <div class="mb-3">
                          <ckeditor :editor="editor" :config="editorConfig" v-model="innertempArticle.content"></ckeditor>
                      </div>
                      <div class="form-check mt-3">
                          <input class="form-check-input" type="checkbox" id="public" v-model="innertempArticle.isPublic">
                          <label class="form-check-label" for="public">
                              是否公開
                          </label>
                      </div>
                  </div>
              </div>
          </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">取消</button>
              <button type="button" class="btn btn-primary text-white" @click="confirm">確認</button>
          </div>
          </div>
      </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin'
import UploadAdapter from '@/methods/uploadAdapter'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
export default {
  mixins: [modalMixin],
  props: ['innerArticleInfo', 'isNew'],
  watch: {
    innerArticleInfo () {
      this.innertempArticle = this.innerArticleInfo
      this.innertempArticle.tag = this.innertempArticle.tag || []
      // console.log('innertempArticleModal', this.innertempArticle)
      const dateAndTime = new Date(this.innertempArticle.create_at * 1000)
        .toISOString().split('T');
      // console.log('innertempArticle.create_at', dateAndTime);
      [this.create_at] = dateAndTime
      // 可以在input type = date取得電腦上的日期 ， 所以[this.innertempArticle.create_at] = dateAndTime 一定要寫
    },
    create_at () {
    // 不是為了做有效日期，而是要把建立日期以Unix TimeStamp形式傳送給後端
      this.innertempArticle.create_at = Math.floor(new Date(this.create_at) / 1000)
    }
  },
  data () {
    return {
      innertempArticle: {
        tag: []
      },
      create_at: '',
      editor: ClassicEditor,
      editorConfig: {
        toolbar: ['heading', '|', 'bold', 'italic', 'link', 'numberedList', 'bulletedList', '|', 'uploadImage', 'blockQuote', 'undo', 'redo'],
        extraPlugins: [this.uploader]
      }
    }
  },
  methods: {
    confirm () {
      this.$emit('update-article', this.innertempArticle)
    },
    uploader (editor) {
      const { plugins } = editor
      plugins.get('FileRepository').createUploadAdapter = (loader) => new UploadAdapter(loader)
    },
    uploadFile () {
      // console.dir(this.$refs.fileInput);
      const uploadFile = this.$refs.fileInput.files[0]
      const formData = new FormData()
      formData.append('file-to-upload', uploadFile)
      this.$http.post(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/upload`, formData)
        .then((res) => {
          if (res.data.success) {
            this.innertempArticle.imageUrl = res.data.imageUrl
            console.log(res.data.imageUrl)
          }
        })
    }
  }
}
</script>

<style lang="scss">
// 幫ck-editor編輯器加高度
.ck-editor__editable_inline {
  min-height: 300px;
}
</style>
