import axios from 'axios'

function Interceptors(re) {
  // axios拦截器
  // 1. 请求拦截
  re.interceptors.request.use(config => {
    // console.log(config)
    return config
  }, err => {
    console.log(err);
  })
  // 2. 响应拦截
  re.interceptors.response.use(res => {
    // console.log(res.data);
    return res.data
  }, err => {
    console.log(err);
  })
}

export function request(config) {
  // 创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  Interceptors(instance)


  // 发送真正的网络请求
   return instance(config)
}

export function request1(config) {
  // 创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

  Interceptors(instance)

  // 发送真正的网络请求
   return instance(config)
}
