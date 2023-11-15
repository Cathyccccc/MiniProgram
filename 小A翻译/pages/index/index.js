// index.js
import {
  translate
} from '../../utils/util';
// console.log(md5);
var app = getApp(); // 在其他组件中使用app实例
// console.log(app);

Page({
  data: {
    languages: app.globalData.languages,
    index: app.globalData.index,
    // hasLanguage: false,
    value: app.globalData.value, // 输入的内容
    translation: '', // 译文
    timer: null, // 防抖(百度翻译平台接口请求频率太快会报错)
  },
  onShow() {
    this.setData({
      index: app.globalData.index // 在change.js中修改了globalData的index数据，这里onShow时需要重新设置一下，否则数据不更新
    })
  },
  // 事件处理函数
  bindchange(e) {
    // this.setData({
    //   index: e.detail.value,
    //   hasLanguage: true,
    // })
    // if (this.data.value !== '') {
    //   this.translate(e.detail.value);
    // }
    wx.navigateTo({
      url: '/pages/change/change', // 不要加后缀名
      complete: (res) => {
        // console.log('跳转complete', res)
      },
    })
  },
  bindinput(e) {
    // console.log(e.detail.value); // textarea输入的内容
    if (e.detail.value === '') {
      // 删除的时候，翻译应为空，不能再请求了
      clearTimeout(this.data.timer);
      this.setData({
        translation: '',
        timer: null,
      })
      return;
    }
    // 调用翻译接口
    this.handleTranslate(e.detail.value);
  },
  handleTranslate(text) {
    clearTimeout(this.data.timer);
    this.setData({
      timer: setTimeout(() => {
        translate(text, this.data.languages[this.data.index].code)
        .then((res) => {
          this.setData({
            translation: res,
          })
          console.log('存储')
          wx.getStorage({
            key: 'history',
            success: (res) => {
              if (res.data) {
                this.storage(res.data);
              }
            },
            fail: (err) => {
              this.storage([]); // 之前没有存储过，也就是第一条数据，先建一个空的history数组，方便后续放入数据
            }
          });
        }).catch(err => console.log(err))
        // 请求完成后清空定时器
        clearTimeout(this.data.timer);
        this.setData({
          timer: null
        })
      }, 500)
    })
  },
  handleClear() {
    if (this.data.value === '') return;
    clearTimeout(this.data.timer);
    this.setData({
      value: '',
      translation: '',
      timer: null,
    })
  },
  storage(history) {
    history.unshift({
      input: this.data.value,
      translation: this.data.translation
    });
    wx.setStorage({
      key: 'history',
      data: history,
      success: (res) => {
        // console.log('存储成功', res)
      },
      fail: (err) => {
        console.log('历史存储失败: ', err.errMsg);
      }
    });
  }
})