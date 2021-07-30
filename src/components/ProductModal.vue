<template>
 <!-- Modal -->
<div class="modal fade" ref='modal' tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">
            <span v-if="isNew">新增產品</span>
            <span v-else>編輯產品</span>
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row">
            <div class="col-4">
              <div class="form-group">
                <label for="fileInput" class="form-check-label">主要圖片</label>
                <input type="file" class="form-control" @change="uploadFile" id="fileInput" ref="fileInput">
                <input type="text" class="form-control mt-2" v-model="tempProduct.imageUrl">
                <img :src="tempProduct.imageUrl" class="img-fluid" alt="">
              </div>
              <div>多圖新增</div>
              <div v-if="Array.isArray(tempProduct.imagesUrl)">
                <div v-for="(image,index) in tempProduct.imagesUrl" :key="index">
                  <div class="form-group my-3">
                    <label for="">圖片網址</label>
                    <input type="text" class="form-control" placeholder="請輸入圖片連結" v-model="tempProduct.imagesUrl[index]">
                  </div>
                  <img :src="image" class="img-fluid">
                </div>
                <div>
                    <button type="button" class="btn btn-outline-primary w-100" @click="tempProduct.imagesUrl.push('')">新增圖片</button>
                    <button type="button" class="btn btn-outline-danger my-1 w-100" @click="tempProduct.imagesUrl.pop()" :class="{'disabled':tempProduct.imagesUrl.length==0}">
                          刪除圖片
                    </button>
                </div>
              </div>

              <div v-else>
                  <button type="button" class="btn btn-primary w-100 my-2" @click="createdImages">新增陣列圖片</button>
              </div>
            </div>

            <div class="col-8">
                <div class="row form-group">
                    <div class="col-12">
                        <label for="title" class="mb-1">標題</label>
                        <input type="text" id="title" class="form-control" placeholder="請輸入標題" v-model="tempProduct.title">
                        <div class="row form-group">
                          <div class="col-6">
                            <label for="category">類別</label>
                            <input type="text" id="category" class="form-control" placeholder="請輸入類別" v-model="tempProduct.category">
                          </div>
                          <div class="col-6">
                            <label for="unit">單位</label>
                            <input type="text" id="unit" class="form-control" placeholder="請輸入單位" v-model="tempProduct.unit">
                          </div>
                          <div class="col-6">
                            <label for="origin_price">原價</label>
                            <input type="number" min='0' id="origin_price" class="form-control" placeholder="請輸入原價" v-model.number="tempProduct.origin_price">
                          </div>
                          <div class="col-6">
                            <label for="price">售價</label>
                            <input type="number" min='0' id="price" class="form-control" placeholder="請輸入售價" v-model.number="tempProduct.price">
                          </div>

                          <div class="col-12 mt-3">
                            <label for="program">請選擇方案</label>

                            <select name="" id="program" class="form-control" v-model="tempProduct.program">
                              <option value="">請選擇方案</option>
                              <option value="4人成團，搭配響導1名">4人成團，搭配響導1名</option>
                              <option value="6人成團，搭配響導2名">6人成團，搭配響導2名</option>
                            </select>

                            <label for="description">產品描述</label>
                            <textarea type="text" id="description" rows="6" class="form-control" placeholder="產品描述" v-model="tempProduct.description">
                            </textarea>

                            <label for="content">內容說明</label>
                            <textarea type="text" id="content" rows="6" class="form-control" placeholder="內容說明" v-model="tempProduct.content"></textarea>

                            <label for="content2">內容說明2</label>
                            <textarea type="text" id="content2" rows="6" class="form-control" placeholder="內容說明" v-model="tempProduct.content2"></textarea>

                            <input type="checkbox" class="form-check-input" id="is_enabled" v-model='tempProduct.is_enabled'>
                            <label class="form-check-label" for="is_enabled" :true-value="1" :false-value="0">是否啟用</label>
                          </div>
                        </div>

                        <div class="modal-footer border-0">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary" @click="checkSave">確定</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin'

export default {
  mixins: [modalMixin],
  props: ['product', 'isNew'],
  data () {
    return {
      bsModal: '',
      tempProduct: {}
    }
  },
  // 在內層的productModal會接收來自外面的tempProduct傳進來的值，也就是props:['product']
  // 但是內層接收到的值是“不可以”修改外面傳進來的值，所以可以再寫一個資料集tempProduct（內層的）來放外層傳進來的值
  // 因為不允許被修改的關係，因此可以使用watch來監聽props的值，當product有更動時，當 product 的值有更動時（更動時機：重開編輯 Modal，product 會被重新賦值。程式碼），就會執行 this.tempProduct = this.product 這個動作，
  // 讓子元件內的 data （tempProduct）去接替傳進來的 data（product），再用接替的那個 data 去修改值才不會出現錯誤
  watch: {
    product () {
      this.tempProduct = this.product
      console.log('props', this.tempProduct)
    }
  },
  emits: ['check-save'],
  methods: {
    checkSave () {
      this.$emit('check-save')
    },
    uploadFile () {
      // console.dir(fileInput.files[0]);
      const file = this.$refs.fileInput.files[0]
      // 以formData形式上傳 這個new FormData();會把要上傳的檔案，轉成以表單的形式發送
      const formData = new FormData()
      formData.append('file-to-upload', file)
      this.$http.post(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/upload`, formData)
        .then((res) => {
          if (res.data.success) {
            this.tempProduct.imageUrl = res.data.imageUrl
            // console.log(this.tempProduct.imageUrl)
          }
        })
    },
    createdImages () {
      this.tempProduct.imagesUrl = ['']
    }
  }
}
</script>
