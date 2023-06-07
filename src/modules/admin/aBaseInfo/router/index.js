import Layout from '@/layout'
export default {
  path: '/base',
  component: Layout,
  name: 'Base',
  meta: {
    title: '机构基本信息管理',
    icon: 'user'
  },
  children: [
    // 机构介绍
    {
      path: 'info',
      component: () => import('@/views'),
      name: 'BaseInfo',
      meta: {
        title: '机构介绍'
        // if do not set roles, means: this page does not require permission
      },
      children:[
        {
          path: 'list',
          component: () => import('@/views/todo'),
          name: 'BaseInfoList',
          meta: {
            title: '机构介绍'
          }
        },
        {
          path: 'add',
          component: () => import('@/views/todo'),
          name: 'BaseInfoAdd',
          hidden:true,
          meta: {
            title: '机构介绍-新增'
          }
        },
        {
          path: 'edit',
          component: () => import('@/views/todo'),
          name: 'BaseInfoEdit',
          hidden:true,
          meta: {
            title: '机构介绍-编辑'
          }
        },
        {
          path: 'see',
          component: () => import('@/views/todo'),
          name: 'BaseInfoSee',
          hidden:true,
          meta: {
            title: '机构介绍-查看'
          }
        }
      ]
    },
   
  ]
}