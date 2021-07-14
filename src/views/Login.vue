<template>
<div class="bg-cover bg-height" style="background-image:url('https://images.unsplash.com/photo-1460526620382-de41fd0d55bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80');"></div>
    <div class="login container d-flex justify-content-center align-items-center">
    <div class="card mt-3  py-3" style="width:400px">
        <div class="card-body">
            <h5 class="card-title text-center mb-3">登入</h5>
                <div class="form-group mb-3">
                <label for="email">帳號</label>
                <input type="email" id="email" class="form-control" placeholder="請輸入電子郵件" v-model="account" @keyup.enter='signIn'>
                </div>
                <div class="form-group">
                  <label for="password">密碼</label>
                  <input v-if="isShow" type="password"  id="password" class="form-control" placeholder="請輸入密碼" v-model="password" @keyup.enter='signIn'>
                  <input v-else type="text"  id="password" class="form-control" placeholder="請輸入密碼" v-model="password" @keyup.enter='signIn'>
                  <div class="mt-2">
                    <input type="checkbox" id="showPsw" @click="change">
                    <label for="showPsw" class="text-dark">
                    <small>{{isShow?'顯示密碼':'隱藏密碼'}}</small>
                    </label>
                  </div>
                <!-- <br> -->
                <a href="#"><small>忘記密碼?</small></a>
                </div>
                <button type="button" class="btn btn-primary w-100 mt-3" @click.prevent="signIn">登入</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
  inject: ['MessageStatus'],
  data () {
    return {
      account: '',
      password: '',
      isShow: true
    }
  },
  methods: {
    change () {
      this.isShow = !this.isShow
    },
    signIn () {
    //   /admin/signin
      const user = {
        username: this.account,
        password: this.password
      }
      // console.log(user)
      this.$http.post(`${process.env.VUE_APP_URL}admin/signin`, user)
        .then((res) => {
          if (res.data.success) {
            const { token, expired } = res.data
            this.MessageStatus(res, '登入')
            // 把token、expired存到cookie裡
            document.cookie = `week3homeworkTK=${token}; expires=${new Date(expired)}; path=/`
            this.$router.push('/admin/admin_products')
          } else {
            this.MessageStatus(res, '登入')
          }
        })
    }
  }
}
</script>

<style lang="scss">
    .bg-cover{
        background-position: center center;
        background-size: cover;
    }
    .bg-height{
        position: relative;
        width: 100%;
        height: 100vh;
    }
    .login{
        position: absolute;
        top:10px ;
        bottom:0 ;
        left:0 ;
        right:0 ;
    }
    .card{
        background:#fff; //rgb(230, 230, 230);
    }
</style>
