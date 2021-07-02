<template>
<NavBar></NavBar>
 <div class="banner bg-cover d-flex justify-content-end align-items-center pe-5" style="background-image:url('https://images.unsplash.com/photo-1511497584788-876760111969?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80');height:600px">
    <div class="banner-text text-white">
        <h1>CLIMBER</h1>
        <h3>最美的風景，在台灣</h3>
        <h5>那些你值得知道的山林小故事</h5>
    </div>
  </div>
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
  .nav-link{
    color: #fff; //#000;
   &:hover{
     border-bottom: 3px solid #000; // rgb(25, 77, 51);
     padding-bottom: 3px;
    }
  }
  .bg-cover{
    background-size: cover;
    background-position: center center;
  }
  .banner-text{
      padding: 80px 120px;
      background-color:rgba(0, 0, 0,0.3);
  }
</style>
