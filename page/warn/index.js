Page({

  /**
   * 页面的初始数据
   */
  data: {
    mess: [{
      name: '私琐私用',
      check: false
      },
      {
        name: '车牌缺损',
        check: false
      },
      {
        name: '轮胎坏了',
        check: false
      },
      {
        name: '车锁坏了',
        check: false
      },
      {
        name: '违规乱停',
        check: false
      },
      {
        name: '密码不对',
        check: false
      },
      {
        name: '刹车坏了',
        check: false
      },
      {
        name: '其他故障',
        check: false
      }],
    imgurl: [],
    btntype: 'default',
    checkg:[],
    ad: '拍摄/相册'
  },
    
  bindchange: function(e){
    this.setData({
      checkg: e.detail.value
    })
  },

  cancel:function(e){
    console.log(e.target.dataset.id)
    var index = e.target.dataset.id;
    var _imgurl = this.data.imgurl;
    _imgurl.splice(index, 1);
    this.setData({
      imgurl: _imgurl
    })
    if (_imgurl == 0) {
      this.setData({
        ad: '拍摄/相册'
      })
    }
  },

  add: function(){
    wx.chooseImage({
      success: (res) => {
        // console.log(res.tempFilePaths)  
        this.data.imgurl
        var temp = res.tempFilePaths;
        for(var i = 0; i < temp.length; i++){
          this.data.imgurl.push(temp[i]);
          this.setData({
            imgurl: this.data.imgurl
          })
        }
        this.setData({
          ad: '+'
        })
      }
    })
  },

  sub:function(){
    if (this.data.imgurl.length <= 0 && this.data.checkg.length <= 0) {
      wx.showModal({
        title: '请填写故障类型和图片',
        content: '赶紧填，打你哦！！！',
        cancelText: '我不填',
        success: (res) => {
          console.log(res.cancel)
          if(res.cancel){
            wx.redirectTo({
              url: '/page/index/index',
              success: function(res) {},
            })
          }
        }
      })
    }else{
      wx.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 2000,
        success: () => {
          wx.navigateTo({
            url: '/page/index/index',
            success: function (res) { },
          })
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    if (this.data.imgurl.length > 0 && this.data.checkg.length > 0) {
      console.log(111)
      this.setData({
        btntype: 'primary'
      })
    }
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