<template>
    <Loading :active= "isLoading">
        <div class="loadingio-spinner-dual-ring-7s087i3q3b3"><div class="ldio-us6frdv3wm">
        <div></div><div><div></div></div>
        </div></div>
    </Loading>
    <div class="container">
        <div class="row">
          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <OrdersModal ref="ordersModal" :order-detail="tempOrder" @update="updateOrder"></OrdersModal>
              <DeleteOrderModal ref="deleteOrdersModal" :delete-modal="tempOrder" @check-delete="deleteOrder"></DeleteOrderModal>
              <table class="table mt-4 table-hover table-responsive">
                  <thead>
                    <tr>
                      <th>購買時間</th>
                      <th width="200">Email</th>
                      <th width="300">購買款項</th>
                      <th class="text-center">應付金額</th>
                      <th>是否付款</th>
                      <th class="text-center">編輯</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in allOrders" :key="item.id">
                      <td>{{ $filters.date(item.create_at) }}</td>
                      <td>
                        <span v-text="item.user.email" v-if="item.user"></span>
                      </td>
                      <td>
                          <ul class="list-unstyled">
                              <li v-for="(product, i) in item.products" :key="i">
                                  {{ product.product.title }} 數量：{{ product.qty }}
                                  {{ product.product.unit }}
                              </li>
                          </ul>
                      </td>
                      <td class="text-center">{{ $filters.currency(item.total) }}</td>
                      <td>
                          <div class="form-check form-switch">
                              <input class="form-check-input" type="checkbox" :id="`paidSwitch${item.id}`"
                                  v-model="item.is_paid"
                                  @change="updateOrder(item)">
                              <label class="form-check-label" :for="`paidSwitch${item.id}`">
                                  <span v-if="item.is_paid">已付款</span>
                                  <span v-else>未付款</span>
                              </label>
                          </div>
                      </td>
                      <td>
                        <div class="btn-group">
                          <button type="button" class="btn btn-outline-primary btn-sm" @click="openOrderModal('edit',item)">檢視</button>
                          <button type="button" class="btn btn-outline-danger btn-sm" @click="openOrderModal('delete',item)">刪除</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
              </table>
              <div class="d-flex justify-content-center">
                  <Pagination :pages="pagination" @change-page="getOrders"></Pagination>
              </div>
          </main>
        </div>
    </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue'
import OrdersModal from '@/components/OrdersModal.vue'
import DeleteOrderModal from '@/components/DeleteModal.vue'
export default {
  components: {
    Pagination,
    OrdersModal,
    DeleteOrderModal
  },
  data () {
    return {
      allOrders: {},
      tempOrder: {},
      pagination: {},
      isLoading: false
    }
  },
  methods: {
    getOrders (page = 1) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/orders?page=:page`
      this.$http.get(api)
        .then(res => {
          if (res.data.success) {
            this.isLoading = false
            this.allOrders = res.data.orders
            this.pagination = res.data.pagination
          }
        }).catch(err => {
          this.$swal({
            icon: 'error',
            title: `${err.data.message}`
          })
        })
    },
    updateOrder (item) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`
      this.$http.put(api, { data: item })
        .then(res => {
          if (res.data.success) {
            this.isLoading = false
            this.$refs.ordersModal.hideModal()
            this.getOrders()
          }
        }).catch(err => {
          this.$swal({
            icon: 'error',
            title: `${err.data.message}`
          })
        })
    },
    deleteOrder (tempOrder) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`
      this.$http.delete(api)
        .then(res => {
          this.isLoading = false
          this.$refs.deleteOrdersModal.hideModal()
          this.getOrders()
        }).catch(err => {
          this.$swal({
            icon: 'error',
            title: `${err.data.message}`
          })
        })
    },
    openOrderModal (isEdit, item) {
      switch (isEdit) {
        case 'edit':
          this.tempOrder = { ...item }
          this.$refs.ordersModal.showModal()
          break
        case 'delete':
          this.tempOrder = { ...item }
          this.$refs.deleteOrdersModal.showModal()
      }
    }
  },
  mounted () {
    this.getOrders()
  }
}
</script>
