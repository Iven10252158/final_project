<template>
    <Loading :active= "isLoading">
      <div class="loadingio-spinner-dual-ring-7s087i3q3b3"><div class="ldio-us6frdv3wm">
      <div></div><div><div></div></div>
      </div></div>
    </Loading>
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
                            <td class="col-3 d-none d-md-table-cell d-flex align-items-center">
                              <img :src="item.imageUrl" class="img-fluid">
                            </td>
                            <td class='col-3 d-flex align-items-center'>{{ item.title }}</td>
                            <td class='col-2 col-md-1  d-flex align-items-center'>{{ $filters.currency(item.origin_price) }}</td>
                            <td class='col-2 col-md-1  d-flex align-items-center'>{{ $filters.currency(item.price) }}</td>
                            <td class='col-2 col-md-2 d-flex align-items-center'>
                                <span v-if="item.is_enabled" class="text-success">啟用</span>
                                <span v-else>未啟用</span>
                            </td>
                            <td class='col-3 col-md-2 d-flex align-items-center'>
                                <div class="btn-group">
                                    <button type='button' class="editBtn btn btn-outline-primary btn-sm" @click="openModal('edit',item)">編輯</button>
                                    <button type='button' class="btn btn-outline-danger btn-sm" @click="openModal('delete',item)">刪除</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="d-flex justify-content-center">
                    <Pagination :pages="pagination" @change-page="getProducts"></Pagination>
                    <ProductModal ref='productModal' :product="tempProduct" :isNew="isNew" @check-save="updateProduct"></ProductModal>
                    <DeleteModal ref="deleteModal" :delete-modal="tempProduct" @check-delete="deleteProduct"></DeleteModal>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue'
import ProductModal from '@/components/admin_components/ProductModal.vue'
import DeleteModal from '@/components/admin_components/DeleteModal.vue'

export default {
  inject: ['MessageStatus'],
  components: {
    Pagination,
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
      isNew: false,
      isLoading: true
    }
  },
  methods: {
    // click執行openModal函式時，會帶入2個參數
    openModal (isNew, item) {
      // 利用參數來判斷開的modal是編輯的還是新增的
      switch (isNew) {
        case 'new':
          this.$refs.productModal.showModal()
          // this.$refs.productModal.resetForm()->用reset沒用，只好到ProductModal裡面讓生命週期重跑
          // 暫存資料區要清空，才能新增資料
          this.tempProduct = {}
          this.isNew = true
          break
        case 'edit':
          this.$refs.productModal.showModal()
          // 因為edit是要修改資料，所以要把原本的資料傳進去
          this.tempProduct = JSON.parse(JSON.stringify(item))
          // this.tempProduct = { ...item }
          // console.log(this.tempProduct)
          this.isNew = false
          break
        case 'delete':
          this.$refs.deleteModal.showModal()
          this.tempProduct = { ...item }
      }
    },
    // 取得後台產品列表
    getProducts (page = 1) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`
      this.$http.get(api)
        .then(res => {
          if (res.data.success) {
            this.isLoading = false
            this.allProducts = res.data.products
            this.pagination = res.data.pagination
          }
        }).catch(err => {
          this.$swal({
            icon: 'error',
            title: `${err.data.message}`
          })
        })
    },
    // 新增/編輯產品
    updateProduct () {
      // 先宣告新增的api
      let api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/product`
      let httpMethods = 'post'
      let status = '新增產品'
      // 再用isNew判斷要使用新增的api or 修改的api
      if (!this.isNew) {
        api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
        httpMethods = 'put'
        status = '更新產品'
      }
      this.$http[httpMethods](api, { data: this.tempProduct })
        .then(res => {
          if (res.data.success) {
            this.MessageStatus(res, status)
            this.getProducts()
            this.$refs.productModal.hideModal()
          } else {
            this.MessageStatus(res, status)
          }
        }).catch(err => {
          this.$swal({
            icon: 'error',
            title: `${err.data.message}`
          })
        })
    },
    // 刪除產品
    deleteProduct () {
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
      this.$http.delete(api)
        .then(res => {
          if (res.data.success) {
            this.MessageStatus(res, '刪除產品')
            this.$refs.deleteModal.hideModal()
            this.getProducts()
          } else {
            this.MessageStatus(res, '刪除產品')
          }
        }).catch(err => {
          this.$swal({
            icon: 'error',
            title: `${err.data.message}`
          })
        })
    }
  },
  mounted () {
    this.getProducts()
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
