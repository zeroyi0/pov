const Storage = {
  setCookie: function (key, val, min) {
    const time = new Date()
    // 默认设置半小时
    min = min | 30
    time.setTime(time.getTime() + 60 * 1000 * min)
    val = window.btoa(val)
    document.cookie = `${key}=${val};expires=${time.toGMTString()};`
    console.log(`cookies: ${document.cookie}`)
    console.log(`${key}=${val};expires=${time.toGMTString()};`)
  },
  getCookie (key) {
    console.log(`cookies: ${document.cookie}`)
    if (document.cookie.length > 0) {
      const cookieArr1 = document.cookie.split(';')
      for (let i = 0; i < cookieArr1.length; i++) {
        const cookieArr2 = cookieArr1[i].split('=')
        if (cookieArr2[0].trim() === key.trim()) {
          return window.atob(cookieArr2[1])
        }
      }
    }
  },
  removeCookie (key) {
    this.setCookie(key, '', -1)
  },
  clearCookie () {
    this.setCookie('', '', -1)
  }
}

export default Storage
