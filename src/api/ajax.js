import request from '@/utils/request'

export function ajax(option) {
  const _option = {
    method: 'get',
    responseType: 'json',
    ...option
  }
  const {
    method,
    data
  } = _option
  if (['get', 'delete'].includes(method)) {
    _option.params = data
  }

  // return request(_option)
  return new Promise((r)=>{
    r({
      data:{
        token:123,
        roles:[{}]
      },
      suceess:true,
      code:200
    })
  })
}
