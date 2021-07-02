<template> <!-- <router-link to="/admin/Admin_products">產品列表</router-link> -->
<!-- header -->
    <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 text-center" href="#">CLIMBER</a>
        <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
        <ul class="navbar-nav px-3">
            <li class="nav-item text-nowrap">
              <a class="nav-link" @click='logout'>Sign out</a>
            </li>
        </ul>
    </header>
    <!-- siderBar -->
  <div class="container-fluid">
    <div class="row">
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="position-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
           <h5 class="text-center text-primary">管理後台</h5>
          </li>
          <li class="nav-item">
            <a class="nav-link text-primary" href="#">
              <span data-feather="file"></span>
              訂單管理
            </a>
          </li>
          <li class="nav-item">
            <router-link to='/admin/admin_products' class="nav-link text-primary">
              <span data-feather="shopping-cart"></span>
                產品管理
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin/admin_coupons" class="nav-link text-primary">
             <span data-feather="users"></span>
              優惠券管理
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</div>
<router-view></router-view>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    logout () {
      const api = `${process.env.VUE_APP_URL}logout`
      this.$http.post(api)
        .then(res => {
          if (res.data.success) {
            this.$router.push('/login')
            console.log(res)
          } else {
            console.log(res)
          }
        }).catch(err => {
          console.log(err)
        })
    },
    // 做checkapi
    // /api/user/check
    checkLogin () {
      const api = `${process.env.VUE_APP_URL}api/user/check`
      const token2 = document.cookie.replace(/(?:(?:^|.*;\s*)week3homeworkTK\s*=\s*([^;]*).*$)|^.*$/, '$1')
      console.log('卻可api的偷啃', token2)
      this.$http.defaults.headers.common.Authorization = `${token2}`
      this.$http.post(api)
        .then(res => {
          if (res.data.success) {
            console.log('卻可api', res)
            // this.$router.push('/admin')
          }
        }).catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.checkLogin()
  }
}
</script>
