<template>
  <!-- Modal -->
  <div class="modal fade" ref="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header border-0">
          <h6 class="modal-title" id="exampleModalLabel">聯絡我們</h6>
          <button type="button" class="btn-close" @click="close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div v-if="isOpen">
          <Form v-slot="{ errors }" ref="form" @submit="sendMsg">
            <div class="modal-body">
              <Field id="email" name="email" type="email" class="form-control mb-3"
              :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入您的電子信箱"
              rules="email|required" v-model="tmepMsg.email"></Field>
              <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>

              <Field id="message" name="訊息" type="text" class="form-control"
              :class="{ 'is-invalid': errors['訊息'] }" placeholder="請輸入您的訊息，也歡迎您留下電子信箱以外的聯絡方式，謝謝！"
              rules="required" v-model="tmepMsg.msg" as="textarea" rows="6"></Field>
              <ErrorMessage name="訊息" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-warning w-100 text-white">發送</button>
            </div>
          </Form>
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
  watch: {
    contentMsg () {
      this.tmepMsg = this.contentMsg
      this.isOpen = false
      this.$nextTick(() => {
        this.isOpen = true
      })
    }
  },
  data () {
    return {
      tmepMsg: {},
      isOpen: true
    }
  },
  emits: ['send-msg'],
  methods: {
    sendMsg () {
      this.$swal({
        icon: 'success',
        title: '訊息發送成功！'
      })
      this.$emit('send-msg')
      // this.$refs.form.resetForm()
      // 這個resetForm怪怪的，所以改用nextTick來強制改變生命週期
    }
  }
}
</script>
