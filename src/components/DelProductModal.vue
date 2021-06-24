<template>
    <!-- Modal -->
<div class="modal fade" ref="delModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header bg-danger">
        <h5 class="modal-title text-white">刪除商品</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>確定要刪除<span class="text-danger fw-bold">{{delProduct.title}}</span>嗎？刪除後，無法復原喔！</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-danger" @click="checkDelete">確定刪除</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  props: ['delProduct'],
  data () {
    return {
      delModal: ''
    }
  },
  methods: {
    showModal () {
      this.delModal.show()
    },
    hideModal () {
      this.delModal.hide()
    },
    checkDelete () {
      this.$emit('checkDelete')
    }
  },
  mounted () {
    this.delModal = new Modal(this.$refs.delModal)
  }
}
</script>
