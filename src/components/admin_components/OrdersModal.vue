<template>
    <div class="modal fade" ref="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">訂單資料</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-4">
                            <h4>用戶資料</h4>
                            <table class="table">
                                <tbody v-if="tempOrder.user">
                                    <tr>
                                        <th>姓名</th>
                                        <td>{{ tempOrder.user.name }}</td>
                                    </tr>
                                    <tr>
                                        <th>Email</th>
                                        <td>{{ tempOrder.user.email }}</td>
                                    </tr>
                                    <tr>
                                        <th>電話</th>
                                        <td>{{ tempOrder.user.tel }}</td>
                                    </tr>
                                    <tr>
                                        <th>地址</th>
                                        <td>{{ tempOrder.user.address }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="col-8">
                            <h4>訂單明細</h4>
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <th>訂單編號</th>
                                        <td>{{ tempOrder.id }}</td>
                                    </tr>
                                    <tr>
                                        <th>下單時間</th>
                                        <td>{{ $filters.date(tempOrder.create_at) }}</td>
                                    </tr>
                                    <tr>
                                        <th>付款時間</th>
                                        <td>{{ $filters.date(tempOrder.paid_date) }}</td>
                                    </tr>
                                    <tr>
                                        <th>付款狀態</th>
                                        <td>
                                            <strong v-if="tempOrder.is_paid" class="text-success">
                                                付款成功
                                            </strong>
                                            <span v-else class="text-muted">尚未付款</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>總金額</th>
                                        <td>{{ $filters.currency(tempOrder.total) }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        <h4>選購商品</h4>
                        <table class="table">
                            <tbody>
                                <tr v-for="item in tempOrder.products" :key="item.id">
                                    <th>
                                    {{ item.product.title }}
                                    </th>
                                    <td>{{ item.qty }} / {{ item.product.unit }}</td>
                                    <td class="text-end">
                                    {{ $filters.currency(item.final_total) }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="d-flex justify-content-end">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="flexCheckDefault" v-model="tempOrder.is_paid">
                                <label class="form-check-label" for="flexCheckDefault">
                                    <span v-if="tempOrder.is_paid">已付款</span>
                                    <span v-else>未付款</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary" @click="update(tempOrder)">修改付款狀態</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin'
export default {
  props: ['orderDetail'],
  mixins: [modalMixin],
  emits: ['update'],
  watch: {
    orderDetail () {
      this.tempOrder = this.orderDetail
    }
  },
  data () {
    return {
      tempOrder: {}
    }
  },
  methods: {
    update (tempOrder) {
      this.$emit('update', tempOrder)
    }
  }
}
</script>
