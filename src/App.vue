<template>
    <ToastMessages/>
    <router-view/>
</template>

<script>
import emitter from '@/methods/mitt'
import MessageStatus from '@/methods/PushMessageStatus'
import ToastMessages from '@/components/admin_components/ToastMessages.vue'
export default {
  provide () {
    return {
      emitter,
      MessageStatus
    }
  },
  components: {
    ToastMessages
  }
}
</script>

<style lang="scss">
  @import "./assets/all";
</style>
