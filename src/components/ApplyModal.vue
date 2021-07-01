<template>
<!-- Modal -->
<div class="modal fade" ref="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h6 class="modal-title" id="exampleModalLabel">{{apply.title}}/{{apply.program}}</h6>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="bg-cover" :style="{backgroundImage:'url('+apply.imageUrl+')',height:'200px'}">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary w-100 text-white"
        @click="addToCart(apply, qty)">加入購物車</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin'
// import Modal from 'bootstrap/js/dist/modal'
export default {
  mixins: [modalMixin],
  props: ['apply'],
  data () {
    return {
      bsApplyModal: ''
    }
  },
  methods: {
    addToCart (apply, qty) {
      this.$emit('intoCart', apply, qty)
    }
    // showModal () {
    //   this.bsApplyModal.show()
    // }
  },
  mounted () {
  // this.bsApplyModal = new Modal(this.$refs.applyModal)
  }
}
</script>
<style lang="scss">
    bg-cover{
      background-position: center center;
      background-size: cover;
    }
</style>
