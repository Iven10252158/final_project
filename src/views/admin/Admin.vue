<template>
    <!-- header -->
    <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 text-center" href.preventDefault="#">CLIMBER</a>
        <button class="navbar-toggler position-absolute d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="sidebarMenu">
            <h5 class="text-center text-white d-sm-none">管理後台</h5>
            <ul class="navbar-nav px-3 d-md-none">
                <li class="nav-item">
                    <router-link to='/' class="nav-link text-white">
                      <span data-feather="shopping-cart"></span>
                        回到前台
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to='/admin/admin_orders' class="nav-link text-white">
                      <span data-feather="shopping-cart"></span>
                        訂單管理
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to='/admin' class="nav-link text-white">
                      <span data-feather="shopping-cart"></span>
                        產品管理
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/admin_coupons" class="nav-link text-white">
                      <span data-feather="users"></span>
                      優惠券管理
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/admin_article" class="nav-link text-white">
                      <span data-feather="users"></span>
                      文章管理
                    </router-link>
                </li>
                <li class="nav-item text-nowrap">
                    <a href='#' class="nav-link" @click.prevent='logout'>Sign out</a>
                </li>
            </ul>
        </div>
    </header>
    <!-- siderBar -->
    <div class="container-fluid">
        <div class="row">
            <nav class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div class="position-sticky pt-3">
                    <h5 class="text-center text-primary pt-2">管理後台</h5>
                    <ul class="nav flex-column align-items-end">
                        <li class="nav-item">
                            <router-link to='/' class="nav-link text-primary">
                              <span data-feather="shopping-cart"></span>
                                回到前台
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to='/admin/admin_orders' class="nav-link text-primary">
                              <span data-feather="shopping-cart"></span>
                                訂單管理
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to='/admin' class="nav-link text-primary">
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
                        <li class="nav-item">
                            <router-link to="/admin/admin_article" class="nav-link text-primary">
                              <span data-feather="users"></span>
                              文章管理
                            </router-link>
                        </li>
                        <li class="nav-item text-nowrap">
                            <a href='#' class="nav-link" @click.prevent='logout'>Sign out</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
    <router-view v-if="checkSuccess"></router-view>
</template>

<script>
export default {
  inject: ['MessageStatus'],
  data () {
    return {
      checkSuccess: false
    }
  },
  methods: {
    logout () {
      const api = `${process.env.VUE_APP_URL}logout`
      this.$http.post(api)
        .then(res => {
          if (res.data.success) {
            document.cookie = 'week3homeworkTK=; expires=; path=/'
            this.$router.push('/login')
          } else {
            console.log(res)
          }
        }).catch(err => {
          this.$swal({
            icon: 'error',
            title: `${err.data.message}`
          })
        })
    },
    // 做checkapi
    checkLogin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)week3homeworkTK\s*=\s*([^;]*).*$)|^.*$/, '$1')
      if (token) {
        this.$http.defaults.headers.common.Authorization = `${token}`
        this.$http.post(`${process.env.VUE_APP_URL}api/user/check`)
          .then(res => {
            if (res.data.success) {
              this.checkSuccess = true
            } else {
              this.MessageStatus(res, '登入')
              this.$router.push('/login')
            }
          }).catch(err => {
            this.$swal({
              icon: 'error',
              title: `${err.data.message}`
            })
          })
      } else {
        this.$router.push('/login')
      }
    }
  },
  created () {
    this.checkLogin()
  }
}
</script>
