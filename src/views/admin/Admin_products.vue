<template>
    <div class="container">
       <div class="row">
            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div class="d-flex justify-content-end mt-3">
                    <button type='button' class='btn btn-primary' @click="openModal('new')">新增產品</button>
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
                            <td class='col-2 col-md-1  d-flex align-items-center'>{{item.origin_price}}</td>
                            <td class='col-2 col-md-1  d-flex align-items-center'>{{item.price}}</td>
                            <td class='col-2 col-md-2 d-flex align-items-center'>
                                <span v-if="item.is_enabled" class="text-success">啟用</span>
                                <span v-else>未啟用</span>
                            </td>
                            <td class='col-3 col-md-2 d-flex align-items-center'>
                                <div class="btn-group">
                                    <button type='button' class='btn btn-outline-primary' @click="openModal('edit',item)">編輯</button>
                                    <button type='button' class='btn btn-outline-danger'>刪除</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="d-flex justify-content-center">
                    <pagination :pages="pagination" @change-page="getProducts"></pagination>
                    <product-modal ref='productModal' :product="tempProduct"></product-modal>
                </div>
            </main>
       </div>
    </div>
</template>

<script>
import pagination from '@/components/Pagination.vue'
import ProductModal from '@/components/ProductModal.vue'
export default {
  components: {
    pagination,
    ProductModal
  },
  data () {
    return {
      allProducts: [],
      pagination: {},
      tempProduct: {}, // 資料的暫存區
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
      }
    }
  },
  mounted () {
    this.getProducts()
  }
}

</script>
