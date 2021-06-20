<template>
<div class="bg-cover bg-height" style="background-image:url('https://images.unsplash.com/photo-1460526620382-de41fd0d55bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80');"></div>
    <div class="login container d-flex justify-content-center align-items-center">
    <div class="card mt-3  py-3" style="width:400px">
        <div class="card-body">
            <h5 class="card-title text-center">登入</h5>
                <Form v-slot="{ errors }">
                    <label for="email">帳號</label>
                    <Field id="email" name="email" type="email"
                    class="form-control mb-3"
                    :class="{ 'is-invalid': errors['email'] }"
                    placeholder="請輸入 Email" rules="email|required"
                    v-model="account"></Field>
                    <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>

                    <label for="password">密碼</label>
                    <Field id="password" name="密碼" type="password"
                    class="form-control mb-4"
                    :class="{ 'is-invalid': errors['密碼'] }"
                    placeholder="請輸入 密碼" rules="min:8|required"
                    v-model="password" @keyup.enter="signIn"></Field>
                    <ErrorMessage name="密碼" class="invalid-feedback"></ErrorMessage>
                </Form>
                <button type="button" class="btn btn-info w-100" @click="signIn">登入</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      account: '',
      password: '',
      token: '',
      expired: ''
    }
  },
  methods: {
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
            this.token = token
            this.expired = expired
            console.log(this.token)
            console.log(this.expired)
            // 把token、expired存到cookie裡
            document.cookie = `week3homeworkTK=${token}; expires=${new Date(expired)}; path=/`
            this.$router.push('/admin')
          }
        })
    }
  },
  mounted () {}
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
        background: rgb(230, 230, 230);
    }
</style>
