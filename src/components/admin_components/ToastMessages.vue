<template>
    <div class="toast-container position-absolute pe-3 top-0 end-0" style="z-index: 1500">
        <div class="toast show" v-for="(item, index) in messages" :key="index" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <span :class="`bg-${ item.style }`"
                class="p-2 rounded me-2 d-inline-block"></span>
                <strong class="me-auto">{{ item.title }}</strong>
                <button type="button" class="btn-close" @click="clearToast(index)" aria-label="Close"></button>
            </div>
            <div class="toast-body" v-if="item.content">
                {{ item.content }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      messages: []
    }
  },
  methods: {
    toastShow () {
      setTimeout(() => {
        this.messages.shift()
      }, 5000)
    },
    clearToast (index) {
      this.messages.splice(index, 1)
    }
  },
  inject: ['emitter'],
  mounted () {
    this.emitter.on('push-message', (message) => {
      const { title, style, content } = message
      this.messages.push({ title, style, content })
      this.toastShow()
    })
  },
  unmounted () {
    this.emitter.off('push-message', (message) => {
      const { title, style, content } = message
      this.messages.push({ title, style, content })
      this.toastShow()
    })
  }
}
</script>
