<template>
  <!-- Modal -->
<div class="modal fade" ref="innerDeleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header bg-danger">
        <h5 class="modal-title text-white">刪除優惠券</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <p>確定要刪除 <span class="text-danger fw-bold">{{conponTitle.title}}</span>嗎？刪除後，無法復原喔！</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary text-white" @click="deleteCoupon">確認刪除</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  props: ['conponTitle'],
  data () {
    return {
      deleteModal: ''
    }
  },
  methods: {
    showModal () {
      this.deleteModal.show()
    },
    hideModal () {
      this.deleteModal.hide()
    },
    deleteCoupon () {
      this.$emit('deleteCoupon')
    }
  },
  mounted () {
    this.deleteModal = new Modal(this.$refs.innerDeleteModal)
  }
}
</script>
