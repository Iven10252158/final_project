<template>
<div class="container">
  <div class="about mt-3">
    <h1>This is an about page</h1>
  </div>
  </div>
  <Footer class="footer"></Footer>
</template>

<script>
export default {

  data () {
    return {
      email: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .about{
    padding-top: 74px;
    min-height: calc(100vh - 74px);
  }
  .footer{
    height: 74px;
  }
</style>
