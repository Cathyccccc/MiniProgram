// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    imgs: [
      '/images/风景1.jpeg',
      '/images/风景2.jpeg',
      '/images/风景3.jpeg',
      '/images/风景4.jpeg'
    ],
    imgs2: [
      '/images/paper.jpg',
      '/images/paper1.jpg',
      '/images/paper2.jpg',
      '/images/paper3.jpg'
    ],
    current: 0,
  },
  handleChange(e) {
    this.setData({
      current: e.detail.current
    })
    console.log(this.data.current)
  }
})
