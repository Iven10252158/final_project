<template class="content">
<NavBar></NavBar>
<router-view></router-view>
<Footer class="footer"></Footer>
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
  .nav-link{
    color: #fff; //#000;
   &:hover{
     border-bottom: 3px solid #000;
     padding-bottom: 3px;
    }
  }
  // .content{
  //   min-height:  calc(100vh - 50px );
  // }
  // .footer{
  //   height: 50px;
  // }
</style>
