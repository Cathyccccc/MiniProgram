// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {
      name: 'Esther'
    },
    time: (new Date()).toDateString(),
    undefined: undefined,
    null: null,
    num: 0,
    fruits: ['banana', 'apple', 'pear'],
    color: 'yellow',
  },
})
