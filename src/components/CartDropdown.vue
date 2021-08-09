<template>
    <div class="dropdown">
      <a href="#" class="cartDropdown btn btn-outline-primary border-0 animate__animated animate__heartBeat animate__slow animate__infinite" ref="dropdown" aria-expanded="false">
        <i class=" fas fa-cart-plus"></i>
      </a>
        <ul class="dropdown-menu dropdown-menu-end mt-2">
            <li>
                <p class="px-2 fw-normal text-center text-muted mb-0 pb-2">目前沒有商品喔</p>
            </li>
            <li class="d-flex justify-content-center">
                <router-link to="/products" class="btn btn-primary btn-sm dropdownBtn" type="button">
                    <p class="text-white mb-0">購物去</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import Dropdown from 'bootstrap/js/dist/dropdown'
export default {
  data () {
    return {
      dropdown: ''
    }
  },
  methods: {
    showDropdown () {
      this.dropdown.show()
    }
  },
  mounted () {
    this.dropdown = new Dropdown(this.$refs.dropdown)
  }
}
</script>

<style lang="scss">
$text-color:#fff;
$nav-textActive:#eadfa4;
    .cartDropdown{
      color: $text-color;
      font-size: 24px;
      transition: 0.5s ease-in-out;
      &:hover{
        background-color:transparent;
        padding-bottom: 3px;
        color:$nav-textActive;
      }
    }
    .dropdownBtn{
      transition: 0.5s ease-in-out;
      &:hover{
          transform: scale(1.2);
      }
    }
</style>
