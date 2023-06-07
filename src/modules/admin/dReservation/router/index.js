import Layout from '@/layout'
export default {
  path: '/reservation',
  component: Layout,
  name: 'Reservation',
  meta: {
    title: '预约管理',
    icon: 'user'
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views'),
      name: 'ReservationList',
      meta: {
        title: '预约列表'
        // if do not set roles, means: this page does not require permission
      },
      children:[
        {
          path: 'list',
          component: () => import('@/views/todo'),
          name: 'ReservationListList',
          meta: {
            title: '预约列表'
          }
        },
        {
          path: 'see',
          component: () => import('@/views/todo'),
          name: 'ReservationListSee',
          hidden:true,
          meta: {
            title: '服务容量-查看'
          }
        }

      ]
    },
    {
      path: 'auxiliary',
      component: () => import('@/views'),
      name: 'ReservationAuxiliary',
      meta: {
        title: '辅助预约'
        // if do not set roles, means: this page does not require permission
      },
      children:[
        {
          path: 'list',
          component: () => import('@/views/todo'),
          name: 'ReservationAuxiliaryList',
          meta: {
            title: '辅助预约'
          }
        },
        {
          path: 'add',
          component: () => import('@/views/todo'),
          name: 'ReservationAuxiliaryAdd',
          hidden:true,
          meta: {
            title: '辅助预约-新增'
          }
        },
        {
          path: 'edit',
          component: () => import('@/views/todo'),
          name: 'ReservationAuxiliaryEdit',
          hidden:true,
          meta: {
            title: '辅助预约-编辑'
          }
        },
        {
          path: 'see',
          component: () => import('@/views/todo'),
          name: 'ReservationAuxiliarySee',
          hidden:true,
          meta: {
            title: '辅助预约-查看'
          }
        }

      ]
    },
    {
      path: 'confirm',
      component: () => import('@/views'),
      name: 'ReservationConfirm',
      meta: {
        title: '预约确认'
        // if do not set roles, means: this page does not require permission
      },
      children:[
        {
          path: 'list',
          component: () => import('@/views/todo'),
          name: 'ReservationConfirmList',
          meta: {
            title: '预约确认'
          }
        },
        {
          path: 'add',
          component: () => import('@/views/todo'),
          name: 'ReservationConfirmAdd',
          hidden:true,
          meta: {
            title: '预约确认-新增'
          }
        },
        {
          path: 'edit',
          component: () => import('@/views/todo'),
          name: 'ReservationConfirmEdit',
          hidden:true,
          meta: {
            title: '预约确认-编辑'
          }
        },
        {
          path: 'see',
          component: () => import('@/views/todo'),
          name: 'ReservationConfirmSee',
          hidden:true,
          meta: {
            title: '预约确认-查看'
          }
        }

      ]
    },
  ]
}