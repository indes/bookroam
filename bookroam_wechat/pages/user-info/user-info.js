// pages/user-history/user-history.js
Page({
  data:{
    history: {},
    isFollow: '关注'
  },
  showForumContentBtn: function (e) {
    var forumId = e.currentTarget.id;
    wx.navigateTo({
      url: '/pages/forum-content/forum-content?id=' + forumId
    })
  },
  showBookDetailBtn: function (e) {
    var bookId = e.currentTarget.id;
    wx.navigateTo({
      url: '/pages/book-detail/book-detail?scanCode=0&id=' + bookId
    })
  },
  onLoad:function(options){
    console.log(options)
    var that = this;
    var userInfoId = options.userid;
    
    wx.request({
      // url: getApp().globalData.url + 'api-user-info/' + userId,
      url: 'http://php.bookroam.ml:8000/api/user/' + userInfoId,
      // url: 'http://localhost:8000/api/user/524',
      
      data: {},
      method: 'GET',
      success: function (res) {
        console.log(res)
        that.setData({ userInfo: res.data });
      }
    })
    // 书评记录
    wx.request({
      url: getApp().globalData.url + "api-forum-byuserid/"+ userInfoId,
      data: {},
      method: 'GET',
      success: function (res) {
        var data = res.data;
        for (var i = 0; i < data.length; ++i) {
          data[i].forum.forumTime = new Date(data[i].forum.forumTime);
          var mydate = data[i].forum.forumTime.getFullYear() + "-" + (data[i].forum.forumTime.getMonth() + 1) + "-" + data[i].forum.forumTime.getDate();
          data[i].forum.forumTime = mydate;
        }
        that.setData({ forumAndComments: data });
        console.log(data);
      }
    })
    // 借阅记录
    wx.request({
      url: getApp().globalData.url + 'api-scan-borrow-history/'+ userInfoId,
      data: {},
      method: 'GET',
      success: function (res) {
        var data = res.data;
        for (var i = 0; i < data.length; ++i) {
          //借书时间
          data[i].borrowStartTime = new Date(data[i].borrowStartTime);
          var mydate = data[i].borrowStartTime.getFullYear() + "-" + (data[i].borrowStartTime.getMonth() + 1) + "-" + data[i].borrowStartTime.getDate();
          data[i].borrowStartTime = mydate;
          //换书时间
          data[i].borrowEndTime = new Date(data[i].borrowEndTime);
          var mydate2 = data[i].borrowEndTime.getFullYear() + "-" + (data[i].borrowEndTime.getMonth() + 1) + "-" + data[i].borrowEndTime.getDate();
          data[i].borrowEndTime = mydate2;
        }
        that.setData({history: data});
        console.log(data);
      }
    })
  },

  clickFollow:function(){
    this.setData({
      isFollow: '已关注'
    })
  }
})