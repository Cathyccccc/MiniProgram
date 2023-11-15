import md5 from './md5.min.js';

const translate = function(text, to) {
  const AppID = '20230721001752238';
  const secret = '7diHCJLFuv7GQQ2R0dtj';
  const url = 'https://fanyi-api.baidu.com/api/trans/vip/translate';
  const salt = Math.random();
  const sign = md5(`${AppID}${text}${salt}${secret}`);
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data: {
        q: text,
        from: 'auto',
        to: to, // 初始index为0，默认为英语
        appid: AppID,
        salt,
        sign,
      },
      success: (res) => {
        // console.log(res)
        if (res.data.trans_result) {
          resolve(res.data.trans_result[0].dst);
        } else {
          wx.showToast({
            title: res.data.error_msg,
            icon: 'error'
          })
        }
      },
      fail: (err) => {
        console.log(err)
      },
    })
  })
      
      
      
}

module.exports = {
  translate,
}
