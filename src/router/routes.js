/**
 * Created by Administrator on 2019/5/5.
 */
import Class from '../pages/Class/Class.vue'
import Kind from '../pages/Kind/Kind.vue'
import Loging from '../pages/Loging/Loging.vue'
export default [

  {
    path:'/class',
    component:Class,
    meta: {
      showFooter: true
    }
  },

  {
    path:'/kind',
    component:Kind,
    meta: {
      showFooter: true
    }
  },
  {
    path:'/loging',
    component:Loging,
    meta: {
      showFooter: false
    }
  },

]

