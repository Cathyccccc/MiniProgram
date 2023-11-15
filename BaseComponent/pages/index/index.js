// 获取应用实例
const app = getApp()

Page({
  data: {
    lists: ['苹果', '葡萄', '梨', '西瓜', '香蕉', '草莓', '柠檬'],
    imgs: [
      '../../images/风景1.jpeg',
      '../../images/风景2.jpeg',
      '../../images/风景3.jpeg'
    ],
    htmlStr: `<div class="wrapper">
      <div class="box">box</div>
      <span class="description">这是一个box。</span>
    </div>`
  },
})
