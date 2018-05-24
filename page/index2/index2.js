Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    mess1: '开锁密码',
    pass: 1234,
    mess2: 9,
    mess3: '车辆有问题？',
    mess4: '回首页去车辆报障'
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      pass: options.name
    })
    let time = 9;
    this.timer2 = setInterval(() => {
      this.setData({
        mess2: --time
      })
      if(time <= 0){
        clearInterval(this.timer2),
        wx.redirectTo({
          url: '/page/play/index'+'?name='+options.name+'&number='+options.number
        })
      }
    },1000)
  },
  first: function(){
    wx.showLoading({
      title: 'loading',
      success: () => {
        console.log(111)
      }
    }),
    wx.redirectTo({
      url: '/page/index/index',
      success: () => {
        clearInterval(this.timer2)
        wx.hideLoading()
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})