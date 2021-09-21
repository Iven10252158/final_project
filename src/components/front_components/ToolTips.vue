<template>
    <span class="d-block" tabindex="0" data-bs-toggle="tooltip" ref="toolTip" title="已加入購物車，超過人數請與客服聯繫">
        <button class="btn btn-primary text-white w-100 w-lg-75" type="button" disabled>按我報名</button>
    </span>
</template>

<script>
import Tooltip from 'bootstrap/js/dist/tooltip'
export default {
  data () {
    return {
      Tooltip: ''
    }
  },
  methods: {
    showTooltip () {
      this.Tooltip.show()
    }
  },
  mounted () {
    this.Tooltip = new Tooltip(this.$refs.toolTip)
  }
}
</script>
