<template>
    <span tabindex="0" data-bs-toggle="tooltip" ref="toolTip" title="已加入購物車，超過人數請與客服聯繫">
        <button class="styleBtn cartBtn btn btn-outline-primary border-0 pe-0" type="button" disabled>
            <i class="fas fa-shopping-cart"></i>
        </button>
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

<style lang="scss">
$banner-text-bg-color:rgba(0, 0, 0,0.3);
$Maintext-color:#fff;
$text-color:#e35d6a;
$hover-color:#E6c35c;
    .styleBtn{
        border:transparent;
        &:hover{
        background-color: transparent;
        color: $hover-color ;
        border:transparent;
        }
    }
    .cartBtn{
      border:transparent;
      font-size: 24px;
      transition: all .3s ease-in-out;
      &:hover{
        border:transparent;
        color:$hover-color;
        background-color:transparent;
        transform: scale(1.2);
      }
    }
</style>
