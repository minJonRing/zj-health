import { getters as baseInfoGetters } from '@/modules/admin/aBaseInfo/store'

const getters = {
  // 系统设置
  loading: state => state.app.loading,
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  fullScreen: state => state.settings.fullScreen,
  menuSearch: state => state.settings.menuSearch,
  resize: state => state.settings.resize,
  errorBtn: state => state.settings.errorBtn,
  // 用户信息
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  errorLogs: state => state.errorLog.logs,
  // more
  ...baseInfoGetters
}
export default getters
