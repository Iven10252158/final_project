<template>
<!-- Modal -->
<div class="modal fade" ref="applyModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h6 class="modal-title" id="exampleModalLabel">{{apply.title}}</h6>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="bg-cover" :style="{backgroundImage:'url('+apply.imageUrl+')',height:'200px'}">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  props: ['apply'],
  data () {
    return {
      bsApplyModal: ''
    }
  },
  methods: {
    showModal () {
      this.bsApplyModal.show()
    }
  },
  mounted () {
    this.bsApplyModal = new Modal(this.$refs.applyModal)
  }
}
</script>
<style lang="scss">
    bg-cover{
      background-position: center center;
      background-size: cover;
    }
</style>
