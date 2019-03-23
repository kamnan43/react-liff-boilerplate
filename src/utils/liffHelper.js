const { liff } = window

class LiffHelper {
  constructor() {
    this.initStatus = false
    this.profile = {}
    this.liffInfo = {}
  }

  init() {
    return new Promise((resolve, reject) => {
      if (!this.isInit()) {
        liff.init(
          data => {
            this.liffInfo = data
            this.setInit(true)
            resolve()
          },
          err => {
            console.log(`Fail to init LIFF, please run inside LINE only. ${err}`)
            reject()
          }
        )
      } else {
        resolve()
      }
    })
  }

  static closeWindow() {
    console.log('liff', liff)
    liff.closeWindow()
  }

  static openWindow(url, external) {
    liff.openWindow({ url, external })
  }

  isInit() {
    return this.initStatus
  }

  setInit(initStatus) {
    if (typeof initStatus !== 'boolean') throw new Error('setInit should accept only boolean')
    this.initStatus = initStatus
  }

  getLIFFInfo() {
    return this.liffInfo
  }

  getProfile() {
    return new Promise((resolve, reject) => {
      this.init()
        .then(() => {
          if (this.isInit() && !this.profile.userId) {
            liff
              .getProfile()
              .then(pf => {
                this.profile = pf
                resolve(this.profile)
              })
              .catch(err => {
                console.log('get profile error', err)
                reject(err)
              })
          } else {
            resolve(this.profile)
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  sendMessages(messages) {
    const messagesToSend = Array.isArray(messages) ? messages : [messages]
    return new Promise((resolve, reject) => {
      this.init()
        .then(() => {
          liff
            .sendMessages(messagesToSend)
            .then(() => {
              resolve()
            })
            .catch(err => {
              reject(err)
            })
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

export default LiffHelper
