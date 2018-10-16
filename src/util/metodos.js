import axios from 'axios'

const localStorageKey = '_hsmapp_user_'

//const baseUrl = 'https://www.saomarcos.org.br/web/integra/'
const baseUrl = 'http://127.0.0.1:8080/rest/webhsm/'

export function getJSON(url) {
  const request = axios.get(baseUrl + url)

  request
    .catch(error => alert(error))

  return request
}

export function getLocalStorage(){
  if (localStorage.getItem(localStorageKey) != null)
    return JSON.parse(localStorage.getItem(localStorageKey))
  else
    return null
}

export function getLocalStorageParam(parm){
  if (localStorage.getItem(localStorageKey) != null)
    return JSON.parse(localStorage.getItem(localStorageKey))[parm]
  else
    return null
}

export function setLocalStorageJSON(json){
  localStorage.setItem(localStorageKey, json)
}

export function removeLocalStorage(){
  localStorage.removeItem(localStorageKey)
}
export function setLocalStorageParam(parm, value){
  localStorage.setItem(parm, value)
}

export function removeLocalStorageParam(parm){
  localStorage.removeItem(parm)
}

