import Layout from '@/layout'
export default {
  path: '/order',
  component: Layout,
  name: 'Order',
  meta: {
    title: '订单管理',
    icon: 'user'
  },
  children: [
    {
      path: 'view',
      component: () => import('@/views'),
      name: 'OrderView',
      meta: {
        title: '订单查看'
        // if do not set roles, means: this page does not require permission
      },
      children:[
        {
          path: 'list',
          component: () => import('@/views/todo'),
          name: 'OrderViewList',
          meta: {
            title: '订单查看'
          }
        },
        {
          path: 'see',
          component: () => import('@/views/todo'),
          name: 'OrderViewSee',
          hidden:true,
          meta: {
            title: '订单查看-详情'
          }
        }

      ]
    },
    {
      path: 'auxiliary',
      component: () => import('@/views'),
      name: 'OrderAuxiliary',
      meta: {
        title: '辅助制单'
        // if do not set roles, means: this page does not require permission
      },
      children:[
        {
          path: 'list',
          component: () => import('@/views/todo'),
          name: 'OrderAuxiliaryList',
          meta: {
            title: '辅助制单'
          }
        },
        {
          path: 'add',
          component: () => import('@/views/todo'),
          name: 'OrderAuxiliaryAdd',
          hidden:true,
          meta: {
            title: '辅助制单-新增'
          }
        },
        {
          path: 'edit',
          component: () => import('@/views/todo'),
          name: 'OrderAuxiliaryEdit',
          hidden:true,
          meta: {
            title: '辅助制单-编辑'
          }
        },
        {
          path: 'see',
          component: () => import('@/views/todo'),
          name: 'OrderAuxiliarySee',
          hidden:true,
          meta: {
            title: '辅助制单-查看'
          }
        }

      ]
    },
    {
      path: 'confirm',
      component: () => import('@/views'),
      name: 'OrderConfirm',
      meta: {
        title: '订单确认'
        // if do not set roles, means: this page does not require permission
      },
      children:[
        {
          path: 'list',
          component: () => import('@/views/todo'),
          name: 'OrderConfirmList',
          meta: {
            title: '订单确认'
          }
        },
        {
          path: 'edit',
          component: () => import('@/views/todo'),
          name: 'OrderConfirmEdit',
          hidden:true,
          meta: {
            title: '订单确认-编辑'
          }
        },
        {
          path: 'see',
          component: () => import('@/views/todo'),
          name: 'OrderConfirmSee',
          hidden:true,
          meta: {
            title: '订单确认-查看'
          }
        }

      ]
    },
  ]
}