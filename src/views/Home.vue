<template>
  <NavBar></NavBar>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
import NavBar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Home',
  components: {
    NavBar,
    Footer
  }
}
</script>

<style lang="scss">
$text-color:#fff;
$nav-text-bottom-line:#000;
  .nav-link{
    color: $text-color;
   &:hover{
     border-bottom: 3px solid $nav-text-bottom-line;
     padding-bottom: 3px;
    }
  }
</style>
