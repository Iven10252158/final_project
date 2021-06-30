<template>
  <Loading :active= "isLoading">
    <div class="loadingio-spinner-dual-ring-7s087i3q3b3"><div class="ldio-us6frdv3wm">
    <div></div><div><div></div></div>
    </div></div>
  </Loading>
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="d-flex justify-content-end mt-4 me-2">
            <button type="button" class="btn btn-primary text-white" @click="openCouponModal('new')">建立新優惠券</button>
        </div>
        <couponModal ref="discountModal" :content="tempCoupon" @save-coupon="updateCoupon"></couponModal>
        <deleteCouponModal ref="deleteCouponModal" :conpon-title="tempCoupon" @delete-coupon="deleteCoupon"></deleteCouponModal>
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
                        <button type="button" class="btn btn-outline-danger btn-sm" @click="openCouponModal('delete',item)">刪除</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </main>
</template>

<script>
import couponModal from '@/components/CouponModal.vue'
import deleteCouponModal from '@/components/DeleteCouponModal.vue'
export default {
  components: {
    couponModal,
    deleteCouponModal
  },
  data () {
    return {
      isNew: false,
      allCoupons: [],
      tempCoupon: {},
      isLoading: true
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
          break
        case 'delete':
          this.tempCoupon = { ...item }
          this.$refs.deleteCouponModal.showModal()
      }
    },
    // 取得優惠券列表
    getCouponsList () {
      this.isLoading = true
      // /api/:api_path/admin/coupons?page=:page
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/coupons`
      this.$http.get(api)
        .then(res => {
          if (res.data.success) {
            this.isLoading = false
            const { coupons } = res.data
            this.allCoupons = coupons
            console.log(res)
          }
        })
    },
    // 新增、編輯優惠券
    updateCoupon (item) {
    //   console.log(item)
    // 新增的api、方法
      let api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/coupon`
      let httpMethods = 'post'
      if (!this.isNew) {
        // 修改的api、方法
        api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`
        httpMethods = 'put'
      }
      this.$http[httpMethods](api, { data: item })
        .then(res => {
          if (res.data.success) {
            console.log(res)
            this.getCouponsList()
            this.$refs.discountModal.hideModal()
          } else {
            console.log(res)
          }
        }).catch(err => {
          console.log(err)
        })
    },
    // 刪除優惠券
    deleteCoupon () {
    // /api/:api_path/admin/coupon/:coupon_id
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
      this.$http.delete(api)
        .then(res => {
          if (res.data.success) {
            console.log(res)
            this.getCouponsList()
            this.$refs.deleteCouponModal.hideModal()
          } else {
            console.log(res)
          }
        }).catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getCouponsList()
    // this.$refs.deleteCouponModal.showModal()
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
