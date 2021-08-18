<template>
    <div class="bg-cover py-5 d-flex align-items-center" style="background-image:url('https://storage.googleapis.com/vue-course-api.appspot.com/iven_vue3_course/1627613883977.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=W1txdZxc4s0hmNXCsvtHtxVQG4QALLJpUb6gNov44r%2FtiX8Bp9TXIJt4LKsjNEQjEn3e0MfD7UX2w%2Bx9QsvrUl5TuwYo4f%2BghZHkj0b37NOg%2Fuyy6uPP1HnCZbRcwUsrtD7AS9FOpvXonAjY8P5jJJ5uoAUrDPXWqiCqsKCPFmiDAv7XlHTjLlXaSycjRXMoHf6rZKQn5bkOwdSKqRCBa2Q05kuR2Dw%2FzxXJ3nikvppo2MqNxmqCQIzTpadqzvd%2FsEn6BKh%2BSTpH3oYNHN%2BJJjcf5bKMHrLzeE7USHG2ZsgMIYRK8%2BUWW9rip1gnY%2Bz6wfQuRblTKrJs8bkqDg934w%3D%3D');height:300px">
        <div class="container">
            <div class="row">
                <div class="col-12 e-paper text-light">
                    <h3>訂閱CLIMBER電子報</h3>
                    <h5>獲得八折優惠券！</h5>
                </div>
                <div class="col-12 col-sm-6" v-if="isOpen">
                    <Form class="input-group" v-slot="{ errors }" ref="form">
                        <Field id="email" name="email" type="email" class="form-control"
                        :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email"
                        rules="email|required" v-model="email"></Field>
                        <button class="btn btn-third text-white px-4 m-0 rounded-end" @click="subscribe"
                        :class="{'disabled':email === ''}">訂閱</button>
                        <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
                    </Form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      isOpen: true
    }
  },
  methods: {
    subscribe () {
      this.$swal({ icon: 'success', title: '訂閱成功！恭喜獲得折扣碼：climber_01', showConfirmButton: true, timer: 10000 })
      this.email = ''
      this.isOpen = false
      this.$nextTick(() => {
        this.isOpen = true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
    .bg-cover{
      background-position: center center;
      background-size: cover;
      height: 300px;
    }
    .e-paper{
      letter-spacing: 2px;
    }
</style>
