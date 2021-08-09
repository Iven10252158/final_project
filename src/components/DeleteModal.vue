<template>
    <!-- Modal -->
    <div class="modal fade" ref="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-danger">
                  <h5 class="modal-title text-white" v-if="deleteModal.title">刪除 {{deleteModal.title}}</h5>
                  <h5 class="modal-title text-white" v-else>刪除資料</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <p>確定要刪除<span class="text-danger fw-bold">{{deleteModal.title}}</span>嗎？刪除後，無法復原喔！</p>
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
import mixinModal from '@/mixins/modalMixin.js'
export default {
  mixins: [mixinModal],
  props: ['deleteModal'],
  emits: ['checkDelete'],
  data () {
    return {
    }
  },
  methods: {
    checkDelete () {
      this.$emit('checkDelete')
    }
  }
}
</script>
