
Page({

  /**
   * 页面的初始数据
   */
  data: {
      longitude: 0,
      latitude: 0
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { 
    console.log(options)
    this.timer3 = options.id;
    var self = this;
    wx.getLocation({
      success: function(res) {
        self.setData({
          longitude: res.longitude,
          latitude: res.latitude,
          scale: 16      
        })
    }}),
    wx.getSystemInfo({
      success: function(res) {
        self.setData({
          controls: [{
            id: 1,
            iconPath: '/images/location.png',
            clickable: true,
            position: {
              width: 50,
              height: 50,
              left: 20,
              top: res.windowHeight - 80
            }
          },
          {
            id: 2,
            iconPath: '/images/use.png',
            clickable: true,
            position: {
              width: 100,
              height: 100,
              left: res.windowWidth / 2 - 50,
              top: res.windowHeight - 120
            }
          },
          {
            id: 3,
            iconPath: '/images/warn.png',
            clickable: true,
            position: {
              width: 50,
              height: 50,
              left: res.windowWidth - 70,
              top: res.windowHeight - 80
            }
          },
          {
            id: 4,
            iconPath: '/images/avatar.png',
            clickable: true,
            position: {
              width: 50,
              height: 50,
              left: res.windowWidth - 70,
              top: res.windowHeight - 155
            }
          },
          {
            id: 5,
            iconPath: '/images/marker.png',
            clickable: false,
            position: {
              width: 30,
              height: 50,
              left: res.windowWidth / 2 - 15,
              top: res.windowHeight / 2 - 50
            }
          }]
        })
      },
    })
  },

  bindcontroltap: function (e) {
    console.log(e)
    switch (e.controlId) {
      case 1: this.mapCtx.moveToLocation();
      break;
      case 2: if(this.timer3){
        wx.navigateBack({
          delta: 1
        })
      }else{
        wx.scanCode({
          success: (res) => {
            wx.showLoading({
              title: '正在加载'
            })
            wx.request({
              url: 'https://www.easy-mock.com/mock/5affb026882a1c75f9aeb366/ofo/ofo',
              success: function (res) {
                // console.log(res.data.user)
                wx.hideLoading()
                wx.redirectTo({
                  url: '../index2/index2' + '?name=' + res.data.user.name + '&number=' + res.data.user.number,//拼接字符串把得到的信息传到index2的options里面
                  success: () => {
                    wx.showToast({
                      title: '获取密码成功',
                      duration: 2000
                    })
                  }
                })
              }
            })
          },
          fail: () => {
            console.log('error')
          }
        })
      }
      break;
      case 3: 
        wx.navigateTo({
          url: '/page/warn/index',
        })
        break;
      case 4: 
        wx.navigateTo({
          url: '/page/userinfo/index',
        })
        break;
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.mapCtx = wx.createMapContext('map1')
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