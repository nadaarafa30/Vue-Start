import Vue from 'vue'
import Router from 'vue-router'
import contacts from './components/contacts.vue'
import chatdetails from './components/chatdetails.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'contacts',
      component: contacts
    },
    {
      path: '/chat/:name',
      name:'chat',
      component: chatdetails
    }
  ]
})