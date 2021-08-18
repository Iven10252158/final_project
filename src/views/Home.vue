<template>
    <NavBar></NavBar>
    <router-view></router-view>
</template>

<script>
import NavBar from '@/components/front_components/Navbar.vue'
export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>
