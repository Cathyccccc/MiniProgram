// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    languages: [{
        lang: '英语',
        code: 'en'
      },
      {
        lang: '日语',
        code: 'jp'
      },
      {
        lang: '	西班牙语',
        code: 'spa'
      },
      {
        lang: '俄语',
        code: 'ru'
      },
    ],
    index: 0, // 选中语言类型的下标
  }
})