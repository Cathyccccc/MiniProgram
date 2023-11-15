const app = getApp();

Component({
  properties: {
    item: {
      type: Object
    }
  },
  data: {},
  methods: {
    handleClick() { // 这里不能写成箭头函数的形式
      // console.log(this)
      const todo = app.globalData.todoList.filter(item => item.content === this.properties.item.content)[0];
      todo.completed = !this.data.item.completed;
      if (todo.completed) {
        wx.showToast({
          title: '标记【已完成】',
          icon: 'success'
        })
      } else {
        wx.showToast({
          title: '标记【未完成】',
          icon: 'success'
        })
      }
      this.setData({
        item: {
          isCompleted: todo.completed
        }
      })
      this.triggerEvent('fresh'); // 事件名写bind:后面的名字
    },
    handleDelete() {
      wx.showModal({
        title: '确认删除该项todo？',
        success: (res) => {
          if (res.confirm) {
            const index = app.globalData.todoList.findIndex(item => item.content === this.properties.item.content);
            app.globalData.todoList.splice(index, 1);
            wx.showToast({
              title: '删除成功'
            })
            this.triggerEvent('fresh');
          }
        }
      })

    }
  },
})