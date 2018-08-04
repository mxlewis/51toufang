import Vue from 'vue'
import api from '@/utils/tools'
import Router from 'vue-router'
import home from '@/components/home'
import newAD from '@/components/new-ad'
import extensionManage from '@/components/extension-manage'
import exResport from '@/components/ex-resport'
import finRecharge from '@/components/fin-recharge'
import perInfo from '@/components/per-info'
import perModpassword from '@/components/per-modpassword'
import modifyAd from '@/components/modify-ad'

Vue.use(Router)
const thisRouter= new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/new-ad',
      component: newAD
    },
    {
      path: '/extension-manage',
      name: 'extensionManage',
      component: extensionManage
    },
    {
      path: '/ex-resport',
      name: 'exResport',
      component: exResport
    }
    ,
    {
      path: '/fin-recharge',
      name: 'finRecharge',
      component: finRecharge
    }
    ,
    {
      path: '/per-info',
      name: 'perInfo',
      component: perInfo
    }
    ,
    {
      path: '/per-modpassword',
      name: 'perModpassword',
      component: perModpassword
    }
    ,
    {
      path: '/modify-ad',
      name: 'modifyAd',
      component: modifyAd
    }
    
  ]
})

thisRouter.beforeEach( async (to, from, next)=> {
  console.log(to,from,next);
  // console.log(api)
  // let res = await api.$post('/public/sendSms',{ajax:"1"});
  if(to.name=="modifyAd"){
   if(!to.params.id){
    // thisRouter.push({path: '/'})
    window.location.href="https://www.baidu.com/"
   }
  }
  next()
});
export default thisRouter