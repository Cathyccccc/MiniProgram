// pages/change/change.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    languages: app.globalData.languages,
    selectIndex: app.globalData.index
  },
  onShow() {
    this.setData({
      selectIndex: app.globalData.index
    })
  },
  handleSelect(e) {
    const index = e.currentTarget.dataset.index;
    app.globalData.index = index;
    wx.navigateBack();
  },
})