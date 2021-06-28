<template>
    <div class="container">
       <div class="row">
            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div class="d-flex justify-content-end mt-3">
                    <button type='button' class="btn btn-primary text-white" @click="openModal('new')">新增產品</button>
                </div>
                <table class="table table-hover mt-3 row table-responsive" data-toggle="table">
                    <thead class="col-12">
                        <tr class='row'>
                            <th class="col-3 d-none d-md-table-cell">主要圖片</th>
                            <th class="col-3">產品名稱</th>
                            <th class="col-2 col-md-1">成本</th>
                            <th class="col-2 col-md-1">售價</th>
                            <th class="col-2">是否啟用</th>
                            <th class="col-3 col-md-2">編輯/刪除</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="row" v-for='item in allProducts' :key="item.id">
                            <td class="col-3 d-none d-md-table-cell d-flex align-items-center"><img :src="item.imageUrl" class="img-fluid"></td>
                            <td class='col-3 d-flex align-items-center'>{{item.title}}</td>
                            <td class='col-2 col-md-1  d-flex align-items-center'>{{$filters.currency(item.origin_price)}}</td>
                            <td class='col-2 col-md-1  d-flex align-items-center'>{{$filters.currency(item.price)}}</td>
                            <td class='col-2 col-md-2 d-flex align-items-center'>
                                <span v-if="item.is_enabled" class="text-success">啟用</span>
                                <span v-else>未啟用</span>
                            </td>
                            <td class='col-3 col-md-2 d-flex align-items-center'>
                                <div class="btn-group">
                                    <button type='button' class="editBtn btn btn-outline-primary" @click="openModal('edit',item)">編輯</button>
                                    <button type='button' class="btn btn-outline-danger" @click="openModal('delete',item)">刪除</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="d-flex justify-content-center">
                    <pagination :pages="pagination" @change-page="getProducts"></pagination>
                    <product-modal ref='productModal' :product="tempProduct" @check-save="updateProduct"></product-modal>
                    <delete-modal ref="deleteModal" :delProduct="tempProduct" @check-delete="deleteProduct"></delete-modal>
                </div>
            </main>
       </div>
    </div>
</template>

<script>
import pagination from '@/components/Pagination.vue'
import ProductModal from '@/components/ProductModal.vue'
import DeleteModal from '@/components/DelProductModal.vue'

export default {
  components: {
    pagination,
    ProductModal,
    DeleteModal
  },
  data () {
    return {
      allProducts: [],
      pagination: {},
      tempProduct: {
        content2: ''
      }, // 資料的暫存區
      isNew: false
    }
  },
  methods: {
    // 取得後台產品列表
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`
      this.$http.get(api)
        .then(res => {
          if (res.data.success) {
            const { products, pagination } = res.data
            this.allProducts = products
            this.pagination = pagination
          } else {
            console.log(res)
          }
        }).catch(err => {
          console.log(err)
        })
    },
    // click執行openModal函式時，會帶入2個參數
    openModal (isNew, item) {
      // 利用參數來判斷開的modal是編輯的還是新增的
      switch (isNew) {
        case 'new':
          this.$refs.productModal.showModal()
          // 暫存資料區要清空，才能新增資料
          this.tempProduct = {}
          this.isNew = true
          break
        case 'edit':
          this.$refs.productModal.showModal()
          // 因為edit是要修改資料，所以要把原本的資料傳進去
          this.tempProduct = { ...item }
          this.isNew = false
          break
        case 'delete':
          this.$refs.deleteModal.showModal()
          this.tempProduct = { ...item }
        //   console.log(this.tempProduct)
      }
    },
    // 新增/編輯產品
    updateProduct (tempProduct) {
      // 先宣告新增的api
      let api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/product`
      let httpMethods = 'post'
      // 再用isNew判斷要使用新增的api or 修改的api
      if (!this.isNew) {
        api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
        httpMethods = 'put'
      }
      this.$http[httpMethods](api, { data: this.tempProduct })
        .then(res => {
          if (res.data.success) {
            this.getProducts()
            console.log(res)
          } else {
            console.log(res)
          }
          this.$refs.productModal.hideModal()
        }).catch(err => {
          console.log(err)
        })
    },
    // 刪除產品
    deleteProduct (tempProduct) {
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
      this.$http.delete(api)
        .then(res => {
          if (res.data.success) {
            this.$refs.deleteModal.hideModal()
            this.getProducts()
            console.log(res)
          } else {
            console.log(res)
          }
        }).catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getProducts()
    // this.$refs.productModal.showModal()
    // this.$refs.deleteModal.showModal()
  }
}

</script>
<style lang="scss">
  .editBtn{
    &:hover{
      color:#fff;
    }
  }
</style>
