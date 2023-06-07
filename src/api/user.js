import {ajax} from './ajax'

export function login(data) {
  return ajax({
    url: '/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return ajax({
    url: '/info',
    method: 'get',
  })
}

export function logout() {
  return ajax({
    url: '/logout',
    method: 'post'
  })
}
