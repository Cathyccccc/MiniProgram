const app = getApp();

Page({
  data: {
    messages: [{
        avatar: "/images/1.jpeg",
        nickname: "大杨",
        msg: "几点到学校集合？",
        time: "12:07",
        x: 0
      },
      {
        avatar: "/images/2.jpeg",
        nickname: "进哥",
        msg: "那道题我解决了，我一会儿给你讲",
        time: "11:05",
        x: 0
      },
      {
        avatar: "/images/3.jpeg",
        nickname: "小恐龙",
        msg: "哥，明天有空没有，一起去世贸看电影呗",
        time: "10:37",
        x: 0
      },
      {
        avatar: "/images/4.jpeg",
        nickname: "雅静",
        msg: "你最好就在那儿等着我，我到时候过来找你",
        time: "05:20",
        x: 0
      },
      {
        avatar: "/images/5.jpeg",
        nickname: "小黄",
        msg: "真的哭死啦 orz",
        time: "03:47",
        x: 0
      },
      {
        avatar: "/images/6.jpeg",
        nickname: "婉静",
        msg: "你明天几点的课？",
        time: "01:02",
        x: 0
      }
    ],
    start_x: 0,
    deleteId: null, // 显示删除按钮的项目id
  },
  handleTouchStart(event) {
    // console.log(event)
    this.setData({
      start_x: event.touches[0].clientX
    })
    if (this.data.deleteId !== null) {
      const newMessage = [...this.data.messages];
      newMessage[this.data.deleteId].x = 0;
      this.setData({
        messages: newMessage,
        deleteId: null
      })
    }
  },
  handleTouchEnd(event) {
    // console.log(event)
    const id = event.currentTarget.dataset.id;
    const x = event.changedTouches[0].clientX;
    const direction = x - this.data.start_x;
    const newMessage = [...this.data.messages];
    if (direction > 0) {
      // 从某一点向右滑动（注意：起始点不在最右边，而是手指触摸位置！！！）
      newMessage[id].x = 0;
    } else {
      // 从某一点向左滑动
      if(direction > -30) { // 滑动距离小于30时，回到原来位置
        newMessage[id].x = 0;
      } else { // 滑动距离大于等于30时，滑到最左
        newMessage[id].x = -150;
        this.setData({
          deleteId: id
        })
      }
    }
    this.setData({
      messages: newMessage
    })
  }
})