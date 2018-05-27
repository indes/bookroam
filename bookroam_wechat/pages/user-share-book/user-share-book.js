// pages/user-setting/user-setting.js
Page({
  data:{
    recommendMsg: "中等",
    user: {}
  },
  onLoad: function() {
    var user = getApp().globalData.user;
    this.setData({user: user});
    let msg = "";
    if (this.data.user.userRecommendStatus == 0) {
      msg = "关闭";
    } else if (this.data.user.userRecommendStatus == 30) {
      msg = "少量"
    } else if (this.data.user.userRecommendStatus == 60) {
      msg = "适中";
    } else if (this.data.user.userRecommendStatus == 90) {
      msg = "大量";
    }
    this.setData({recommendMsg: msg});
  },
  cancelBtn: function() {
    wx.navigateBack({
      delta: 1
    })
  },
  sliderChange: function(e) {
    let msg = "";
    if (e.detail.value == 0) {
      msg = "关闭";
    } else if (e.detail.value == 30) {
      msg = "少量"
    } else if (e.detail.value == 60) {
      msg = "适中";
    } else if (e.detail.value == 90) {
      msg = "大量";
    }
    this.setData({recommendMsg: msg});
  },
  formSubmit: function(e) {
    var id = this.data.user.userId;
    var bookTitle = e.detail.value.bookTitle;
    var bookId = e.detail.value.bookId;
  
    var data = e.detail.value
    data.userId = getApp().globalData.user.userId
    // getApp().globalData.user.userUsername = username;
    // getApp().globalData.user.userPassword = password;
    // getApp().globalData.user.userMessageStatus = messageStatus;
    // getApp().globalData.user.userNewStatus = newStatus;
    // getApp().globalData.user.userForumStatus = forumStatus;
    // getApp().globalData.user.userRecommendStatus = recommendStatus;
    
    console.log(this.data.user)
    console.log(e.detail.value)

    wx.request({
      // url: getApp().globalData.url + "api-book-add",
      url: "http://php.bookroam.ml:8000/api/book/",
      data: data,
      method: 'POST', 
      success: function(res){
        wx.navigateBack({
          delta: 1
        })
      }
    })
  }
})