<template>
  <NavBar></NavBar>
  <router-view></router-view>
  <!-- <Footer></Footer> -->
</template>

<script>
import NavBar from '@/components/Navbar.vue'
// import Footer from '@/components/Footer.vue'
export default {
  name: 'Home',
  components: {
    NavBar
    // Footer
  }
}
</script>
