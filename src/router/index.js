import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import FirstPart from '@/components/HomeComponents/FirstPart'
import SecondPart from '@/components/HomeComponents/SecondPart'
import ThirdPart from '@/components/HomeComponents/ThirdPart'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'FirstPart',
          name: 'FirstPart',
          component: FirstPart
        },
        {
          path: 'SecondPart',
          name: 'SecondPart',
          component: SecondPart
        },
        {
          path: 'ThirdPart',
          name: 'ThirdPart',
          component: ThirdPart
        }
      ]
    },
  ]
})
