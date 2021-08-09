<template>
    <!-- Modal -->
    <div class="modal fade" ref='modal' tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
        data-bs-backdrop="static" data-bs-keyboard="false">
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
                                <div class="col-12" v-if="isOpen">

                                  <Form v-slot="{ errors }" @submit="checkSave" ref="form">
                                    <!--標題  -->
                                    <label for="title" class="mb-1">標題</label>
                                    <span class="text-danger">*</span>
                                    <Field id="title" name="標題" type="text" class="form-control mb-3"
                                    :class="{ 'is-invalid': errors['標題'] }" placeholder="請輸入標題"
                                    rules="required" v-model="tempProduct.title"></Field>
                                    <ErrorMessage name="標題" class="invalid-feedback"></ErrorMessage>
                                    <div class="row form-group">
                                      <!-- 類別 -->
                                      <div class="col-6">
                                        <label for="category">類別</label>
                                        <span class="text-danger">*</span>
                                        <Field id="category" name="類別" type="text" class="form-control mb-3"
                                          :class="{ 'is-invalid': errors['類別'] }" placeholder="請輸入類別"
                                          rules="required" v-model="tempProduct.category"></Field>
                                        <ErrorMessage name="類別" class="invalid-feedback"></ErrorMessage>
                                      </div>
                                      <!-- 單位 -->
                                      <div class="col-6">
                                        <label for="unit">單位</label>
                                        <span class="text-danger">*</span>
                                        <Field id="unit" name="單位" type="text" class="form-control mb-3"
                                          :class="{ 'is-invalid': errors['單位'] }" placeholder="請輸入單位"
                                          rules="required" v-model="tempProduct.unit"></Field>
                                        <ErrorMessage name="單位" class="invalid-feedback"></ErrorMessage>
                                      </div>

                                      <!-- 原價 -->
                                      <div class="col-6">
                                        <label for="origin_price">原價</label>
                                        <span class="text-danger">*</span>
                                        <Field id="origin_price" name="原價" type="number" min='0' class="form-control mb-3"
                                          :class="{ 'is-invalid': errors['原價'] }" placeholder="請輸入原價"
                                          rules="required" v-model.number="tempProduct.origin_price"></Field>
                                        <ErrorMessage name="原價" class="invalid-feedback"></ErrorMessage>
                                      </div>
                                      <!-- 售價 -->
                                      <div class="col-6">
                                        <label for="price">售價</label>
                                        <span class="text-danger">*</span>
                                        <Field id="price" name="售價" type="number" min='0' class="form-control mb-3"
                                          :class="{ 'is-invalid': errors['售價'] }" placeholder="請輸入售價"
                                          rules="required" v-model.number="tempProduct.price"></Field>
                                        <ErrorMessage name="售價" class="invalid-feedback"></ErrorMessage>
                                      </div>

                                      <!-- 請選擇方案 -->
                                      <div class="col-12 mt-3">
                                        <label for="program">請選擇方案</label>
                                        <span class="text-danger">*</span>
                                        <Field id="program" name="方案" class="form-control mb-3"
                                          :class="{ 'is-invalid': errors['方案'] }" as="select"
                                          rules="required" v-model="tempProduct.program">
                                          <option value="">請選擇方案</option>
                                          <option value="4人成團，搭配響導1名">4人成團，搭配響導1名</option>
                                          <option value="6人成團，搭配響導2名">6人成團，搭配響導2名</option>
                                          </Field>
                                        <ErrorMessage name="方案" class="invalid-feedback"></ErrorMessage>

                                        <!-- 產品描述 -->
                                        <label for="description" class="mb-1">產品描述</label>
                                        <Field id="description" name="description" type="text" as="textarea" rows="6" class="form-control mb-3"
                                          v-model="tempProduct.description" placeholder="產品描述"></Field>

                                        <!-- 內容說明 -->
                                        <label for="content" class="mb-1">內容說明</label>
                                        <Field id="content" name="content" type="text" as="textarea" rows="6" class="form-control mb-3"
                                          v-model="tempProduct.content" placeholder="內容說明"></Field>

                                        <!-- 內容說明2 -->
                                        <label for="content2" class="mb-1">內容說明2</label>
                                        <Field id="content2" name="content2" type="text" as="textarea" rows="6" class="form-control mb-3"
                                          v-model="tempProduct.content2" placeholder="內容說明"></Field>

                                        <div class="d-flex justify-content-between">
                                          <div>
                                            <input type="checkbox" class="form-check-input" id="is_enabled" v-model='tempProduct.is_enabled'>
                                            <label class="form-check-label" for="is_enabled" :true-value="1" :false-value="0">是否啟用</label>
                                          </div>

                                          <p class="text-danger">*字號為必填項目</p>
                                        </div>
                                      </div>
                                    </div>

                                    <div class="modal-footer border-0">
                                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                      <button type="submit" class="btn btn-primary">確定</button>
                                    </div>
                                  </Form>
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
  emits: ['check-save'],
  data () {
    return {
      bsModal: '',
      tempProduct: {},
      isOpen: true
    }
  },
  // 在內層的productModal會接收來自外面的tempProduct傳進來的值，也就是props:['product']
  // 但是內層接收到的值是“不可以”修改外面傳進來的值，所以可以再寫一個資料集tempProduct（內層的）來放外層傳進來的值
  // 因為不允許被修改的關係，因此可以使用watch來監聽props的值，當product有更動時，當 product 的值有更動時（更動時機：重開編輯 Modal，product 會被重新賦值。程式碼），就會執行 this.tempProduct = this.product 這個動作，
  // 讓子元件內的 data （tempProduct）去接替傳進來的 data（product），再用接替的那個 data 去修改值才不會出現錯誤
  watch: {
    product () {
      this.tempProduct = this.product
      this.isOpen = false
      this.$nextTick(() => {
        this.isOpen = true
      })
    }
  },
  methods: {
    checkSave () {
      this.$emit('check-save', this.tempProduct)
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
          }
        }).catch(err => {
          console.log(err)
        })
    },
    createdImages () {
      this.tempProduct.imagesUrl = ['']
    }
  }
}
</script>
