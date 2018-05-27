// pages/user/user.js
Page({
  data: {
    userInfo: {},
    username: "",
    credit: 80
  },
  onLoad: function (options) {
    if (getApp().globalData.user.userCredit >= 90) {
      wx.setNavigationBarTitle({ title: '图书漫游+' });
    }
    var that = this;
    // wx.getUserInfo({
    //   success: function (res) {
    //     var userInfo = res.userInfo;
    //     that.setData({ userInfo: userInfo });
    //   }
    // });
    let name = getApp().globalData.user.nickName;
    that.setData({ userInfo: getApp().globalData.user });
    console.log(getApp().globalData.user)
    that.setData({username: name});
  },
  exitBtnOnClick: function() {
    wx.request({
      url: getApp().globalData.url + 'api-user-exit',
      data: {},
      method: 'GET', 
      success: function(res){
      }
    })
    wx.redirectTo({
      url: '/pages/index/index'
    })
  },
  userForumBtn: function() {
    wx.navigateTo({
      url: '/pages/user-forum/user-forum'
    })
  },
  userCommentBtn: function() {
    wx.navigateTo({
      url: '/pages/user-comment/user-comment'
    })
  },
  userBorrowBtn: function() {
    wx.navigateTo({
      url: '/pages/user-borrow/user-borrow'
    })
  },
  userHistoryBtn: function() {
    wx.navigateTo({
      url: '/pages/user-history/user-history'
    })
  },
  userSettingBtn: function() {
    wx.navigateTo({
      url: '/pages/user-setting/user-setting'
    })
  },
  userShareBookBtn: function(){
    console.log('123')
    wx.navigateTo({
      url: '/pages/user-share-book/user-share-book'
    })
  }
})