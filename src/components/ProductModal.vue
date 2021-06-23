<template>
 <!-- Modal -->
<div class="modal fade" ref='innerProductModal' tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">
            <span v-if="!isNew">新增產品</span>
            <span v-else>編輯產品</span>
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row">
            <div class="col-4">
                <p>圖片上傳</p>
                <div class="border border-left border-3"></div>
            </div>
            <div class="col-8">
                <div class="row form-group">
                    <div class="col-12">
                        <label for="title">標題</label>
                        <input type="text" id="title" class='form-control' v-model='tempProduct.title'>
                        <div class="row form-group">
                            <div class="col-6">
                            <label for="category">分類</label>
                            <input type="text" class='form-control' id='category' v-model="tempProduct.category">
                            </div>
                            <div class="col-6">
                            <label for="unit">單位</label>
                            <input type="text" class='form-control' id='unit' v-model="tempProduct.unit">
                            </div>
                            <div class="col-6">
                            <label for="origin_price">原價</label>
                            <input type="number" class='form-control' min='0' id='origin_price' v-model.number="tempProduct.origin_price">
                            </div>
                            <div class="col-6">
                            <label for="price">售價</label>
                            <input type="number" class='form-control' min='0' id='price' v-model.number="tempProduct.price">
                            </div>
                            <hr class='mt-3'>
                        </div>
                        <label for="description">產品描述</label>
                        <textarea type="text" rows="6" class="form-control" id="description" v-model="tempProduct.description"></textarea>
                        <label for="content">內容說明</label>
                        <textarea type="text" rows="6" class="form-control" id="content" v-model="tempProduct.content"></textarea>
                        <label for="content2">內容說明2</label>
                        <textarea type="text" rows="6" class="form-control" id="content2" v-model="tempProduct.content2"></textarea>
                        <input type="checkbox" class="form-check-input" id="is_enabled" v-model='tempProduct.is_enabled'>
                        <label class="form-check-label" for="is_enabled" :true-value="1" :false-value="0">是否啟用</label>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// 引入BS裡的Modal的方法
import Modal from 'bootstrap/js/dist/modal'
export default {
  props: ['product'],
  data () {
    return {
      bsModal: '',
      isNew: false,
      tempProduct: {}
    }
  },
  mounted () {
    this.bsModal = new Modal(this.$refs.innerProductModal)
  },
  watch: {
    product () {
      this.tempProduct = this.product
    }
  },
  methods: {
    showModal () {
      this.bsModal.show()
    },
    hideModal () {
      this.bsModal.hide()
    }
  }
}
</script>
