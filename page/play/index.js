Page({

  /**
   * 页面的初始数据
   */
  data: {
    min: 0,
    hour: 0,
    sec: 0,
    number1: 132,
    mess: '正在计费'
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let se = 0;
    let mi = 0;
    let hour = 0;
    this.setData({
      number1: options.number
    });
    this.timer1 = setInterval(() => {
      this.setData({
        sec: se++
      })
      if(se == 60){
        se = 0;
        mi ++;
        setTimeout( () => {
          this.setData({
            min: mi
          })
        }, 1000);
        if(mi == 60){
          mi = 0;
          hour++;
          setTimeout(()=>{
            this.setData({
              hour: hour
            })
          },1000)
        }        
      }
    },1000);
  },
  end:function(){
    clearInterval(this.timer1);
    this.timer1 = '';
    this.setData({
      mess: '本次骑行时间'
    });
  },
  first: function () {
    if(this.timer1 == ''){
      wx.showLoading({
        title: '加载中',
        success: () => {
          console.log('a')
        }
      }),
        wx.redirectTo({
          url: '/page/index/index',
          success: () => {
            wx.hideLoading()
          }
        })
    }else{
      wx.navigateTo({
        url: '/page/index/index?id=' + this.timer1
      })
    }
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