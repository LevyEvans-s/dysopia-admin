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
service.interceptors.response.use(config => {
  const { code, data, msg } = config.data
  if (code === 200) {
    return data
  }
})

export default service