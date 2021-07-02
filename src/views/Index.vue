<template>
<!-- <NavBar></NavBar>
 <div class="banner bg-cover d-flex justify-content-end align-items-center pe-5" style="background-image:url('https://images.unsplash.com/photo-1511497584788-876760111969?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80');height:600px">
    <div class="banner-text text-white">
        <h1>CLIMBER</h1>
        <h3>最美的風景，在台灣</h3>
        <h5>那些你值得知道的山林小故事</h5>
    </div>
  </div> -->
    <Loading :active= "isLoading">
        <div class="loadingio-spinner-dual-ring-7s087i3q3b3"><div class="ldio-us6frdv3wm">
        <div></div><div><div></div></div>
        </div></div>
    </Loading>
    <div class="container">
        <section class="row g-0">
            <div class="col-12 col-lg-6 d-flex align-items-center">
                <ul class="list-unstyled mt-5">
                    <li class="h3">消失的鐵道 -- 眠月線</li>
                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam laudantium harum voluptates odio nihil recusandae ut velit facere veritatis? Perspiciatis impedit ab ea numquam et velit temporibus doloribus recusandae adipisci!</li>
                    <li class="btn btn-primary rounded-0">查看更多</li>
                </ul>
            </div>
            <div class="col-12 col-lg-6 mt-5 d-flex">
                <img src="../assets/image/50536057773_4d71aecf98_k.jpg" alt="">
            </div>
             <div class="col-12 col-lg-6 d-flex">
                <img src="../assets/image/4094005977_18d7679c9e_o.jpg" alt="">
            </div>
            <div class="col-12 col-lg-6 d-flex align-items-center">
                <ul class="list-unstyled ps-5">
                    <li class="h3">消失的鐵道 -- 眠月線</li>
                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam laudantium harum voluptates odio nihil recusandae ut velit facere veritatis? Perspiciatis impedit ab ea numquam et velit temporibus doloribus recusandae adipisci!</li>
                    <li class="btn btn-primary rounded-0">查看更多</li>
                </ul>
            </div>
        </section>
    </div>
    <section>
        <div class="bg-cover article mt-5 pt-3" style="background-image:url('https://images.unsplash.com/photo-1511497584788-876760111969?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80')">
        <ul class="lnt list-unstyled rounded p-3 text-center text-white">
            <li class="h3">為了延續美好的山林，請遵守無痕山林運動</li>
            <li class="h6">Leave No Trace(LNT)於 2006 年底在台灣正式命名為「無痕山林運動」</li>
            <li class="h6">顧名思義就是<br>「不留下任何痕跡在山林」</li>
        </ul>
        </div>
    </section>
    <div class="container">
        <h3>決定要享受一場山林的沐浴了嗎？</h3>
    </div>
</template>

<script>
// import NavBar from '@/components/Navbar.vue'
export default {
//   components: {
//     NavBar
//   },
  data () {
    return {
      isLoading: true
    }
  },
  mounted () {
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
    }, 1000)
  }
}
</script>
<style lang="scss">
    img{
        max-width: 100%;
    }
    .bg-cover{
        background-position: center center;
        background-size: cover;
    }
    .article{
        margin: 0 auto;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center center;
        background-size: cover;
    }
    // .lnt{
    //     background-color: rgba(255, 255, 255,0.5);
    // }
</style>
