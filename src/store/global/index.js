/**
 * 
 * ** areaAll {   定义的一个全局数据
 * 
 * **** initValue   数据的初始值
 * **** option      配置项
 * **** error       重复时提示的内容
 * 
 * ** }
 * }
 */
import {
  generateState,
  generateGetters
} from './fn'
// 字典名称

// 字典集合
export const store = {

  // 地区
  areaCodeZd: {
    initValue: [],
    option: {
      url: '/areaCode',
      key: 'value'
    },
  },
  // 经济类型
  economicTypeZd: {
    initValue: [],
    option: {
      url: '/economicType',
      key: 'value'
    },
  },
  // 行业
  industryCodeZd: {
    initValue: [],
    option: {
      url: '/industryCode',
      key: 'value'
    },
  },
  // 企业规模
  scaleCodeZd: {
    initValue: [],
    option: {
      url: '/scaleCode',
      key: 'value'
    },
  },
}

// state getters
const state = generateState(store)
const getters = generateGetters(store)
// 导出
export {
  getters,
  state
}
