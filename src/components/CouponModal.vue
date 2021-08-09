<template>
    <!-- Modal -->
    <div class="modal fade" ref="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
      data-bs-backdrop="static" data-bs-keyboard="false">
      <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">
                <span v-if="isEdit">新增優惠券</span>
                <span v-else>編輯優惠券</span>
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" v-if="isOpen">
              <Form v-slot="{ errors }" @submit="saveCoupon" ref="form">
                <label for="coupon_Title">標題</label>
                <span class="text-danger">*</span>
                <Field id="coupon_Title" name="標題" type="text" class="form-control mb-3"
                :class="{ 'is-invalid': errors[ '標題' ] }" placeholder="請輸入標題"
                rules="required"  v-model="tempCoupon.title"></Field>
                <ErrorMessage name="標題" class="invalid-feedback"></ErrorMessage>
                <!-- 優惠碼 -->
                <label for="coupon_Code">優惠碼</label>
                <span class="text-danger">*</span>
                <Field id="coupon_Code" name="優惠碼" type="text" class="form-control mb-3"
                :class="{ 'is-invalid': errors['優惠碼'] }" placeholder="請輸入優惠碼"
                rules="required"  v-model="tempCoupon.code"></Field>
                <ErrorMessage name="優惠碼" class="invalid-feedback"></ErrorMessage>
                <!-- 到期日 -->
                <label for="coupon_Date">到期日</label>
                <span class="text-danger">*</span>
                <Field id="coupon_Date" name="coupon_Date" type="date" class="form-control mb-3"
                placeholder="請輸入到期日" v-model="due_date"></Field>
                <!-- <ErrorMessage name="coupon_Date" class="invalid-feedback"></ErrorMessage> -->
                <!-- 折扣百分比 -->
                <label for="coupon_Percent">折扣百分比</label>
                <span class="text-danger">*</span>
                <Field id="coupon_Percent" name="折扣百分比" type="number" min="0" class="form-control mb-3"
                :class="{ 'is-invalid': errors['折扣百分比'] }" placeholder="請輸入折扣百分比"
                rules="required" v-model.number="tempCoupon.percent"></Field>
                <ErrorMessage name="折扣百分比" class="invalid-feedback"></ErrorMessage>
                <div class="d-flex justify-content-between">
                  <div>
                    <input type="checkbox" class="form-check-input me-1" id="coupon_Enabled"
                      :true-value="1"
                      :false-value="0"
                      v-model="tempCoupon.is_enabled">
                    <label for="coupon_Enabled">啟用</label>
                  </div>

                  <p class="text-danger">*為必填項目</p>
                </div>

                <div class="modal-footer border-0">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" class="btn btn-primary text-white">確認</button>
                </div>
              </Form>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
// import Modal from 'bootstrap/js/dist/modal'
import mixinModal from '@/mixins/modalMixin.js'
export default {
  mixins: [mixinModal],
  props: ['content'],
  emits: ['saveCoupon'],
  data () {
    return {
      couponModal: '',
      isEdit: true,
      tempCoupon: {},
      due_date: '',
      isOpen: true
    }
  },
  watch: {
    content () {
      this.tempCoupon = this.content
      // console.log('this.tempCoupon', this.tempCoupon) => 外層透過props傳進來的tempCoupon
      // 將時間格式改為 YYYY-MM-DD 字串
      const dateAndTime = new Date(this.tempCoupon.due_date * 1000)
        .toISOString().split('T');
        // [this.due_date] = dateAndTime 這邊就只是單純把 this.due_date 的值，改為陣列格式喔。
      [this.due_date] = dateAndTime
      this.isOpen = false
      this.$nextTick(() => {
        this.isOpen = true
      })
    },
    // due_date函式，不是為了做有效日期，而是要把建立日期以Unix TimeStamp傳送給後端
    due_date () {
      // Math.floor(new Date('YYYY-MM-DD') / 1000) => 轉乘Unix TimeStamp
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000)
    }
  },
  methods: {
    saveCoupon () {
      this.$emit('saveCoupon', this.tempCoupon)
    }
  }
}
</script>
