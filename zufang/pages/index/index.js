//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false
  },

  onLoad: function(){
    wx.getUserInfo({
      success: resp =>{
        this.setData({
          userInfo: resp.userInfo,
          hasUserInfo: true,
          motto: "加载用户信息成功"
        })
      }
    })
  }
})
