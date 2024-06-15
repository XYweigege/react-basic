import axios from 'axios'

function request(config) {
  const instance = axios.create({
    baseURL: '',
    timeout: 10000
  })

  // 防抖
  const debounceTokenCancel = new Map()
  instance.interceptors.request.use(
    config => {
      const tokenKey = `${config.method}-${config.url}`
      const cancel = debounceTokenCancel.get(tokenKey)
      if (cancel) {
        cancel()
      }
      return new Promise(resolve => {
        const timer = setTimeout(() => {
          clearTimeout(timer)
          resolve(config)
        }, 800)
        debounceTokenCancel.set(tokenKey, () => {
          clearTimeout(timer)
          resolve(new Error('取消请求'))
        })
      })
    },
    error => {
      console.log(error)
      return Promise.reject(error)
    }
  )

  instance.interceptors.response.use(
    response => {
      return response.data
    },
    error => {
      console.log(error)
      return Promise.reject(error)
    }
  )

  // 节流
  let lastTime = new Date().getTime()
  instance.interceptors.request.use(
    config => {
      const nowTime = new Date().getTime()
      if (nowTime - lastTime < 1000) {
        return Promise.reject(new Error('节流处理中，稍后再试'))
      }
      lastTime = nowTime
      return config
    },
    error => {
      console.log(error)
      return Promise.reject(error)
    }
  )

  return instance(config)
}

export default request
