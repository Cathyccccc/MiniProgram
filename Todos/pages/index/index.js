// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    inputValue: '',
    lists: app.globalData.todoList
  },
  onShow() {
    this.fresh();
  },
  handleInput() {},
  handleClickButton() {
    app.globalData.todoList.unshift({content: this.data.inputValue, completed: false});
    this.setData({
      lists: app.globalData.todoList,
      inputValue: ''
    })
  },
  fresh() {
    this.setData({
      lists: app.globalData.todoList
    })
  }
})
