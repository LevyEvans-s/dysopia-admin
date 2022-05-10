/**
 * @description axios二次封装
 * @author Koto
 */
import axios from 'axios'
import conf from '../config'

const service = axios.create({
  baseURL: conf.baseApi,
  timeout:8000
})

//请求拦截
service.interceptors.request.use(config => {
  return config
})

//响应拦截
service.interceptors.response.use(response => {
  const { status, data } = response
  if (status === 200) {
    return data
  }
}, err => {
  return Promise.reject(err)
})

export default service