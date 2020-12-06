/**
 * Storage 存储,处理sessionStorage,localStorage
 * */
const sessionStorage = window.sessionStorage
const localStorage = window.localStorage

/**
 * 封装sessionStorage
 * */
export function saveSession (key, value) {
  sessionStorage.setItem(key, value)
}

export function readSession (key) {
  return sessionStorage.getItem(key)
}

export function removeSession (key) {
   return  sessionStorage.removeItem(key)
}
export function clearSession () {
    return sessionStorage.clear()
}
/**
 * 封装localStorage
 * */
export function save(key, value) {
  return localStorage.setItem(key, value)
}

export function read (key) {
  return localStorage.getItem(key)
}

export function remove (key) {
  return localStorage.removeItem(key)
}

export function clear () {
   return  localStorage.clear()
}

//获取当前用户信息
export function getCurrentUserInfo () {
  return localStorage.getItem("userInfo")
}

//获取token
export function getToken () {
  return localStorage.getItem("token")
}
