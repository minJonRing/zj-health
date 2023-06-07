import { state as globalState } from '../global/index'
import { state as baseInfoState } from '@/modules/admin/aBaseInfo/store/index'
const state = {
  ...globalState,
  ...baseInfoState,
}
export default {
  namespaced: true,
  state,
}
