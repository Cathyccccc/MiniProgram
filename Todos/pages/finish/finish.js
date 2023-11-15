const app = getApp();

Page({
  data: {
    finishList: app.globalData.todoList.filter(item => item.completed)
  },
  onShow() {
    this.fresh();
  },
  fresh() {
    this.setData({
      finishList: app.globalData.todoList.filter(item => item.completed)
    })
  }
})