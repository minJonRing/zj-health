import Layout from '@/layout'
export default {
  path: '/maintenance',
  component: Layout,
  name: 'Maintenance',
  meta: {
    title: '维护功能',
    icon: 'user'
  },
  children: [
    {
      path: 'project',
      component: () => import('@/views'),
      name: 'MaintenanceProject',
      meta: {
        title: '收费项目'
        // if do not set roles, means: this page does not require permission
      },
      children:[
        {
          path: 'list',
          component: () => import('@/views/todo'),
          name: 'MaintenanceProjectList',
          meta: {
            title: '收费项目维护'
          }
        },
        {
          path: 'add',
          component: () => import('@/views/todo'),
          name: 'MaintenanceProjectAdd',
          hidden:true,
          meta: {
            title: '收费项目-新增'
          }
        },
        {
          path: 'edit',
          component: () => import('@/views/todo'),
          name: 'MaintenanceProjectEdit',
          hidden:true,
          meta: {
            title: '收费项目-编辑'
          }
        },
        {
          path: 'see',
          component: () => import('@/views/todo'),
          name: 'MaintenanceProjectSee',
          hidden:true,
          meta: {
            title: '收费项目-查看'
          }
        }

      ]
    },
    {
      path: 'server',
      component: () => import('@/views'),
      name: 'MaintenanceServer',
      meta: {
        title: '服务容量设置'
        // if do not set roles, means: this page does not require permission
      },
      children:[
        {
          path: 'list',
          component: () => import('@/views/todo'),
          name: 'MaintenanceServerList',
          meta: {
            title: '服务容量设置'
          }
        },
        {
          path: 'add',
          component: () => import('@/views/todo'),
          name: 'MaintenanceServerAdd',
          hidden:true,
          meta: {
            title: '服务容量-新增'
          }
        },
        {
          path: 'edit',
          component: () => import('@/views/todo'),
          name: 'MaintenanceServerEdit',
          hidden:true,
          meta: {
            title: '服务容量-编辑'
          }
        },
        {
          path: 'see',
          component: () => import('@/views/todo'),
          name: 'MaintenanceServerSee',
          hidden:true,
          meta: {
            title: '服务容量-查看'
          }
        }

      ]
    },
  ]
}