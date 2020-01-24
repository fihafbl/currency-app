import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'

// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

// install axios
Vue.prototype.$http = axios


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
