<template>
    <div class="bg-cover bg-height" style="background-image:url('https://storage.googleapis.com/vue-course-api.appspot.com/iven_vue3_course/1627614863633.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ZxZQW80pH1Q83aLkJq82qneXjKAVY3b6ihw2iKJOuGnf%2BXVw0GhhtoKE7P668T50HtqDqiJ%2BxYDJv3O65sKkx35O5kurouhv7L9WiP1wLdgUNF0YnZ%2Fua%2FEQRkvguJVkKImHni7xZvut1zD3utVWjUDj7EZTLJXtfSnhH26OcKn6rP93O8cnOC8zKfzo%2FKvz8%2FT%2B7x8pkHxe4bjE1qsd%2FedJn25v%2F65UIWEfZuM5M9CCjH%2Bs4CUFR3vNAFFR9DkwcOZScLumMzv5CaypE%2BRj4k1qKF%2FGygxlNI1gVsOHxopSuBHlSWXYsNmPr6MriVGOZ%2Br0j3EFl9BZu5pnBPYzsg%3D%3D');"></div>
    <div class="login container d-flex justify-content-center align-items-center">
        <div class="card mt-3  py-3" style="width:400px">
            <div class="card-body">
                <h5 class="card-title text-center mb-3">登入</h5>
                <Form v-slot="{ errors }" ref="form" @submit="signIn">
                  <label for="email">帳號</label>
                  <Field id="email" name="email" type="email" class="form-control"
                  :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入電子信箱"
                  rules="email|required" v-model="account"></Field>
                  <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>

                  <label for="password" class="mt-3">密碼</label>
                  <Field id="password" name="密碼" :type=" isShow? 'password' : 'text' " class="form-control"
                  :class="{ 'is-invalid': errors['密碼'] }" placeholder="請輸入密碼"
                  rules="required" v-model="password"></Field>
                  <ErrorMessage name="密碼" class="invalid-feedback"></ErrorMessage>

                  <div class="mt-2">
                      <input type="checkbox" id="showPsw" @click="change">
                      <label for="showPsw" class="text-dark">
                      <small>{{ isShow?'顯示密碼':'隱藏密碼' }}</small>
                      </label>
                  </div>
                  <button type="submit" class="btn btn-primary w-100 mt-3 text-white">登入</button>
                </Form>
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
      const user = {
        username: this.account,
        password: this.password
      }
      this.$http.post(`${process.env.VUE_APP_URL}admin/signin`, user)
        .then((res) => {
          if (res.data.success) {
            const { token, expired } = res.data
            this.MessageStatus(res, '登入')
            // 把token、expired存到cookie裡
            document.cookie = `week3homeworkTK=${token}; expires=${new Date(expired)}; path=/`
            this.$router.push('/admin')
          } else {
            this.MessageStatus(res, '登入')
          }
        }).catch(err => {
          this.$swal({
            icon: 'error',
            title: `${err.data.message}`
          })
        })
    }
  }
}
</script>

<style lang="scss">
$background-color:#fff;
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
    background:$background-color;
    }
</style>
