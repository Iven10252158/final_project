<template>
<div class="bg-cover py-5 d-flex align-items-center" style="background-image:url('https://images.unsplash.com/photo-1573126617899-41f1dffb196c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80');height:300px">
    <div class="container">
        <div class="row">
            <div class="col-12 e-paper text-light">
                <h3>訂閱CLIMBER電子報</h3>
                <h5>獲得八折優惠券！</h5>
            </div>
            <div class="col-12 col-sm-6">
                <Form class="input-group" v-slot="{ errors }" ref="form">
                    <Field id="email" name="email" type="email" class="form-control"
                    :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email"
                    rules="email|required" v-model="email"></Field>
                    <span class="btn btn-primary text-white px-4 m-0 rounded-end" @click="subscribe"
                    :class="{'disabled':email === ''}">訂閱</span>
                    <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
                </Form>
            </div>
        </div>
        <!-- <div class="d-flex juatify-content-center align-items-center"></div> -->
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      email: ''
    }
  },
  methods: {
    subscribe () {
      this.$swal({ icon: 'success', title: '訂閱成功！恭喜獲得折扣碼：climber_01', showConfirmButton: true, timer: 10000 })
      this.$refs.form.resetForm()
    }
  }
}
</script>
<style lang="scss">
    .bg-cover{
        background-position: center center;
        background-size: cover;
        height: 300px;
    }
    .e-paper{
        letter-spacing: 2px;
    }
</style>
