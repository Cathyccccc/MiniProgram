const app = getApp();

Page({
  data: {
    unfinishList: app.globalData.todoList.filter(item => !item.completed)
  },
  onShow() {
    this.fresh();
  },
  fresh() {
    this.setData({
      unfinishList: app.globalData.todoList.filter(item => !item.completed)
    })
  }
})