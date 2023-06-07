import Layout from '@/layout'
export default {
  path: '/notice',
  component: Layout,
  name: 'Notice',
  meta: {
    title: '报告与通知',
    icon: 'user'
  },
  children: [
    {
      path: 'report',
      component: () => import('@/views'),
      name: 'NoticeReport',
      meta: {
        title: '报告与通知'
        // if do not set roles, means: this page does not require permission
      },
      children:[
        {
          path: 'list',
          component: () => import('@/views/todo'),
          name: 'BaseInfoList',
          meta: {
            title: '报告与通知'
          }
        },
        {
          path: 'add',
          component: () => import('@/views/todo'),
          name: 'BaseInfoAdd',
          hidden:true,
          meta: {
            title: '报告与通知-新增'
          }
        },
        {
          path: 'edit',
          component: () => import('@/views/todo'),
          name: 'BaseInfoEdit',
          hidden:true,
          meta: {
            title: '报告与通知-编辑'
          }
        },
        {
          path: 'see',
          component: () => import('@/views/todo'),
          name: 'BaseInfoSee',
          hidden:true,
          meta: {
            title: '报告与通知-查看'
          }
        }
      ]
    },
  ]
}