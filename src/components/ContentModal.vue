<template>
<!-- Modal -->
<div class="modal fade" ref="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header border-0">
        <h6 class="modal-title" id="exampleModalLabel">聯絡我們</h6>
        <button type="button" class="btn-close" @click="close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <Form v-slot="{ errors }" ref="form">
          <Field id="email" name="email" type="email" class="form-control mb-3"
          :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入您的電子信箱"
          rules="email|required" v-model="user.email"></Field>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>

          <Field id="message" name="訊息" type="text" class="form-control"
          :class="{ 'is-invalid': errors['訊息'] }" placeholder="請輸入您的訊息，也歡迎您留下電子信箱以外的聯絡方式，謝謝！"
          rules="required" v-model="user.msg" as="textarea" rows="6"></Field>
          <ErrorMessage name="訊息" class="invalid-feedback"></ErrorMessage>
        </Form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-warning w-100 text-white"
        @click="sendMsg(item)" :class="{'disabled': user.email === '', 'disabled': user.msg === ''}">發送</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin'
export default {
  mixins: [modalMixin],
  props: ['contentMsg'],
  data () {
    return {
      user: {
        email: '',
        msg: ''
      }
    }
  },
  emits: ['send-msg'],
  methods: {
    sendMsg (item) {
      this.$swal({
        icon: 'success',
        title: '訊息發送成功！'
      })
      this.$emit('send-msg', this.tempMsg)
      this.$refs.form.resetForm()
    }
  }
}
</script>
<style lang="scss">
    bg-cover{
      background-position: center center;
      background-size: cover;
    }
</style>
