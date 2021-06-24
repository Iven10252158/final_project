<template>
<!-- Modal -->
<div class="modal fade" ref="couponModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">
          <span v-if="!isEdit">新增優惠券</span>
          <span v-else>編輯優惠券</span>
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <label for="coupon_Title">標題</label>
        <input type="text" class="form-control mb-3" id="coupon_Title" v-model="tempCoupon.title">
        <label for="coupon_Code">優惠碼</label>
        <input type="text" class="form-control mb-3" id="coupon_Code" v-model="tempCoupon.code">
        <label for="coupon_Date">到期日</label>
        <input type="date" class="form-control mb-3" id="coupon_Date" v-model="due_date">
        <label for="coupon_Percent">折扣百分比</label>
        <input type="text" class="form-control mb-3" id="coupon_Percent" v-model.number="tempCoupon.percent">
        <input type="checkbox" class="form-check-input me-1 " id="coupon_Enabled" v-model="tempCoupon.is_enabled">
        <label for="coupon_Enabled">啟用</label>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="saveCoupon">確認</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  props: ['content'],
  data () {
    return {
      couponModal: '',
      isEdit: false,
      tempCoupon: {},
      due_date: ''
    }
  },
  watch: {
    content () {
      this.tempCoupon = this.content
      // 將時間格式改為 YYYY-MM-DD
      const dateAndTime = new Date(this.tempCoupon.due_date * 1000)
        .toISOString().split('T');
      [this.due_date] = dateAndTime
    },
    due_date () {
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000)
    }
  },
  methods: {
    showModal () {
      this.couponModal.show()
    },
    hideModal () {
      this.couponModal.hide()
    },
    saveCoupon () {
      this.$emit('saveCoupon')
    }
  },
  mounted () {
    this.couponModal = new Modal(this.$refs.couponModal)
  }
}
</script>
