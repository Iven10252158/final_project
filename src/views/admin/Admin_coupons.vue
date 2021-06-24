<template>
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="d-flex justify-content-end mt-4 me-2">
            <button type="button" class="btn btn-primary text-white" @click="openCouponModal('new')">建立新優惠券</button>
        </div>
        <couponModal ref="discountModal" :content="tempCoupon" @save-coupon="updateCoupon"></couponModal>
        <table class="table table-hover mt-3 row table-responsive" data-toggle="table">
            <thead class="col-12">
                <tr class="row">
                    <th class="col-2">名稱</th>
                    <th class="col-2">折扣百分比</th>
                    <th class="col-3 text-center">到期日</th>
                    <th class="col-2 text-end">啟用</th>
                    <th class="col-3 text-end pe-6">編輯</th>
                </tr>
            </thead>
            <tbody>
                <tr class="row" v-for="item in allCoupons" :key="item.id">
                    <td class="col-2">{{item.title}}</td>
                    <td class="col-2">{{item.percent}}%</td>
                    <td class="col-3 text-center">{{$filters.date(item.due_date)}}</td>
                    <td class="col-2 text-end">
                        <span v-if="item.is_enabled" class="text-success">啟用</span>
                        <span v-else>未啟用</span>
                    </td>
                    <td class="col-3 text-end">
                        <button type="button" class="editBtn btn btn-outline-primary me-2 btn-sm"  @click="openCouponModal('edit',item)">編輯</button>
                        <button type="button" class="btn btn-outline-danger btn-sm">刪除</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </main>
</template>

<script>
import couponModal from '@/components/CouponModal.vue'
export default {
  components: {
    couponModal
  },
  data () {
    return {
      isNew: false,
      allCoupons: [],
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        due_date: '',
        code: ''
      }
    }
  },
  methods: {
    openCouponModal (isNew, item) {
      switch (isNew) {
        case 'new':
          this.tempCoupon = {
            due_date: Math.floor(new Date().getTime() / 1000)
          }
          this.isNew = true
          this.$refs.discountModal.showModal()
          break
        case 'edit':
          this.tempCoupon = { ...item }
          this.isNew = false
          this.$refs.discountModal.showModal()
      }
    },
    getCouponsList () {
    // /api/:api_path/admin/coupons?page=:page
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/coupons`
      this.$http.get(api)
        .then(res => {
          if (res.data.success) {
            const { coupons } = res.data
            this.allCoupons = coupons
            console.log(res)
          }
        })
    },
    updateCoupon (tempCoupon) {
    //   console.log(tempCoupon)
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/coupon`
      this.$http.post(api, { data: tempCoupon })
        .then(res => {
          console.log(res)
        })
    }
  },
  mounted () {
    this.getCouponsList()
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
