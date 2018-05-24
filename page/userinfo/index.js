Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo:{
      url: ' ',
      name: '请登录'
    },
    type1: 'primary',
    lign: '登录'
  },

  lign: function(){
    if(this.data.lign == '登录'){
      wx.login({
        success: (res) => {
          wx.getUserInfo({
            success: (res) => {
              this.setData({
                userinfo:{
                  url: res.userInfo.avatarUrl,
                  name: res.userInfo.nickName
                },
                type1: 'warn',
                lign: '退出登录'
              }),
              wx.setStorage({
                key: 'user',
                data: {
                  userinfo: {
                    url: res.userInfo.avatarUrl,
                    name: res.userInfo.nickName
                  },
                  type1: 'warn',
                  lign: '退出登录'
                },
              })
            }
          })
        }
      })
    }
    else if(this.data.lign == '退出登录'){
      wx.removeStorage({
        key: 'user',
      })
      this.setData({
        userinfo: {
          url: ' ',
          name: '未登录'
        },
        type1: 'primary',
        lign: '登录'
      })
    }
  },

  money: function(){
    if(this.data.lign == '登录'){
      wx.showToast({
        title: '请先登录',
        icon: 'none'
      })
    }else{
      wx.navigateTo({
        url: '/page/mymoney/index',
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'user',
      success: (res) => {
        this.setData({
          userinfo: {
            url: res.data.userinfo.url,
            name: res.data.userinfo.name
          },
          type1: res.data.type1,
          lign: res.data.lign
        })
      },
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