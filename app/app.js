import Vue from 'vue/dist/vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Hello = { template: '<p>hello world</p>' }

const routes = [
  { path: '/', component: Hello }
]

const router = new VueRouter({ routes })

const app = new Vue({ router }).$mount('#app')
