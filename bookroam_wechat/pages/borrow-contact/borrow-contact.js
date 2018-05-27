Page({
  data: {
    bookId: null,
    userId: null,
    fuserId: null
  },
  onLoad: function (options) {
    console.log(options)
    var bookId = options.bookId;
    var userId = getApp().globalData.user.userId;
    var fuserId = options.fUserId;
    console.log(fuserId);
    this.setData({ bookId: bookId, userId: userId, fuserId: fuserId});
  },
  cancelBtn: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  formSubmit: function (e) {
    var title = e.detail.value.title;
    var content = e.detail.value.content;
    var userId = this.data.userId;
    var bookId = this.data.bookId;
    var fuserId = this.data.fuserId;
    console.log(fuserId)
    wx.request({
      url: "http://php.bookroam.ml:8000/api/book/borrow",
      data: { contact: title, content: content, userId: userId, bookId: bookId, fuserId:fuserId},
      method: 'POST',
      success: function (res) {
        wx.showModal({
          title: '请求成功',
          content: '请等待结果',
          confirmColor: '#4db6ac',
          success: function (res) {
            if (res.confirm) {
              wx.navigateBack({
                delta: 1
              })
            } else if (res.cancel) {
              wx.navigateBack({
                delta: 1
              })
            }
          }
        }) 
      }
    })
  }
})