import axios from 'axios'

const ENV = 'DEVP'
// const ENV = 'TEST'
const BASE_URL = {
  DEVP: 'http://localhost:8000',
  TEST: 'http://localhost:8000'
}

const http = axios.create({
  baseURL: BASE_URL[ENV],
  timeout: 6000
})

http.interceptors.request.use(config => {
  // 请求头携带token
  config.headers.AUTHORIZATION = window.sessionStorage.getItem('token')
  return config
})
http.interceptors.response.use(config => {
  // 解析response
  const { data } = config
  return data
})

export default http
