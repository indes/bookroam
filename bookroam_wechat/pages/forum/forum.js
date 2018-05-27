// pages/forum/forum.js
Page({
  data: {
    forumAndComments: {}
  },
  showForumContentBtn: function (e) {
    var forumId = e.currentTarget.id;
    wx.navigateTo({
      url: '/pages/forum-content/forum-content?id=' + forumId
    })
  },
  onLoad: function () {
    if (getApp().globalData.user.userCredit >= 90) {
      wx.setNavigationBarTitle({
        title: '图书漫游+'
      });
    }
    var that = this;
    wx.request({
      url: getApp().globalData.url + "api-forum-all",
      data: {},
      method: 'GET',
      success: function (res) {
        var data = res.data;
        for (var i = 0; i < data.length; ++i) {
          data[i].forum.forumTime = new Date(data[i].forum.forumTime);
          var mydate = data[i].forum.forumTime.getFullYear() + "-" + (data[i].forum.forumTime.getMonth() + 1) + "-" + data[i].forum.forumTime.getDate();
          data[i].forum.forumTime = mydate;
        }
        that.setData({
          forumAndComments: res.data
        });
      }
    })
  },
  showBookDetailBtn: function (e) {
    var bookId = e.currentTarget.id;
    wx.navigateTo({
      url: '/pages/book-detail/book-detail?scanCode=0&id=' + bookId
    })
  },
  showUserInfo: function (e) {
    var userid = e.currentTarget.dataset.userid;
    // console.log(e.currentTarget.dataset.userid)

    wx.navigateTo({
      url: '/pages/user-info/user-info?id=' + userid
    })
  },
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading();
    var that = this;
    wx.request({
      url: getApp().globalData.url + "api-forum-all",
      data: {},
      method: 'GET',
      success: function (res) {
        var data = res.data;
        for (var i = 0; i < data.length; ++i) {
          data[i].forum.forumTime = new Date(data[i].forum.forumTime);
          var mydate = data[i].forum.forumTime.getFullYear() + "-" + (data[i].forum.forumTime.getMonth() + 1) + "-" + data[i].forum.forumTime.getDate();
          data[i].forum.forumTime = mydate;
        }
        that.setData({
          forumAndComments: res.data
        });
      }
    })
    wx.stopPullDownRefresh();
    wx.hideNavigationBarLoading();
  },
})