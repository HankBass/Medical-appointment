// pages/booking/selectTime/selectTime.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    steps: [
      {
        text: '选择时间',
      },
      {
        text: '选择加项',
      },
      {
        text: '确认信息',
      },
    ],
    time:"",
    address:"",
    currentDate: new Date().getTime(),
    minDate: new Date().getTime(),
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      }
      if (type === 'month') {
        return `${value}月`;
      }
      return value;
    },
    show: false,
  },
  onInput(event) {
    this.setData({
      currentDate: event.detail,
      time: this.timer(event.detail),
      show:false
    });
  },
  handleTime(){
    this.setData({
      show:true
    })
  },
  onClose(){
    this.setData({
      show:false
    })
  },
  timer(timestamp){ 
    let d = new Date(timestamp);    
    let date = (d.getFullYear()) + "-" + (d.getMonth() + 1) + "-" +(d.getDate())
    return date
  },
  oncancel(){
    this.setData({
      shouw:false
    })
  },
  goPage(){
    wx.navigateTo({
      url: '../addPage/index'
    })
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