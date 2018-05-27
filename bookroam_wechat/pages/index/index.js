//index.js
Page({
  data: {
    userInfo:""
  },
  onLoad: function (options) {
    var that = this;

    // wx.getUserInfo({
    //   success: function (res) {
    //     // console.log(res.userInfo)
    //     var userInfo = res.userInfo;
    //     // this.setData({
    //     //   userInfo: userInfo
    //     // });
    //     getApp().globalData.userInfo = res.userInfo;
        
    //   },
      
    // });
    // wx.request({
    //   url: "http://php.bookroam.ml:8000/api/user/find",
    //   data: getApp().globalData.userInfo,
    //   method: 'POST', 
    //   success: function(res){
    //     console.log(res)
    //   }
    // })
    // console.log(getApp().globalData.userInfo)
    


    // wx.switchTab({
    //   url: '/pages/forum/forum'
    // })
  },
  loginBtnOnClick: (e) => {
    
    console.log(e.detail.userInfo)
    var userInfo = e.detail.userInfo
    getApp().globalData.user = userInfo;
    wx.request({
      url: "http://php.bookroam.ml:8000/api/user/find",
      data: userInfo,
      method: 'POST', 
      success: function(res){
        console.log(res)
        getApp().globalData.user.userId = res.data
        wx.switchTab({
            url: '/pages/forum/forum'
        })
      }
    })
  },
  registerBtnOnClick: () => {
    wx.navigateTo({
      url: '/pages/register/register'
    })
  },
  scanEnterBtn: function () {
    wx.redirectTo({
      url: '/pages/scan-index/scan-index',
    })
  }
})