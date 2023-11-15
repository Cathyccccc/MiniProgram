// logs.js

Page({
  data: {
    history: [],
  },
  onShow() {
    wx.getStorage({
      key: 'history',
      success: (res) => {
        console.log(res)
        if (res.data) {
          this.setData({
            history: res.data
          })
        }
      }
    });
  },
  clearHistory() {
    if (this.data.history.length === 0) return;
    this.setData({
      history: [],
    });
    wx.removeStorage({
      key: 'history',
      success: () => {
        wx.showToast({
          title: '已清空',
          icon: 'success',
        });
      }
    })
  }
})
