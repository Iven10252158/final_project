import { createApp } from 'vue'
// fontAwesome套件
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
// vue loading overlay套件
import VueLoading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

// 引入主套件
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
// 引入規則
import AllRrules from '@vee-validate/rules'
// 引入繁體中文檔案
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
// 引入語系功能
import { localize, setLocale } from '@vee-validate/i18n'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'

// 加入所有規則
Object.keys(AllRrules).forEach((rule) => {
  defineRule(rule, AllRrules[rule])
})

// 設定語系檔案
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
// 啟用語系
setLocale('zh_TW')

const app = createApp(App)
// 註冊元件
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)
app.component('Loading', VueLoading)
app.use(VueAxios, axios)
app.use(router)
app.mount('#app')
