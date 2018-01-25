Page({

  /**
   * 页面的初始数据
   */
  data: {
    houseImgs:[]
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  }, 
  
  openGrally: function(){
    var _this = this;
    wx.chooseImage({
      count: 9, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        // success
        console.log(res)
        _this.setData({
          houseImgs: res.tempFilePaths
        }) 
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  }
})