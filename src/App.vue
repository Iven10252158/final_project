
<template>
<ToastMessages></ToastMessages>
<!-- <offCanvas></offCanvas> -->
<router-view/>
</template>

<script>
import emitter from '@/methods/mitt'
import MessageStatus from '@/methods/PushMessageStatus'
import ToastMessages from '@/components/ToastMessages.vue'
// import offCanvas from '@/components/Navbar.vue'
export default {
  provide () {
    return {
      emitter,
      MessageStatus
    }
  },
  components: {
    ToastMessages
    // offCanvas
  }
}
</script>

<style lang="scss">
  @import "./assets/all";

</style>
