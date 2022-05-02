/**
 * @description axios二次封装
 * @author Koto
 */
import axios from 'axios'
import config from '../config'

const service = axios.create({
  baseURL: config.baseApi,
  timeout:8000
})

//请求拦截
service.interceptors.request.use(req => {
  return req
})

//响应拦截
service.interceptors.response.use(res => {
  const { code, data, msg } = res.data
  if (code === 200) {
    return data
  }
})

export default service