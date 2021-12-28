// pages/detail/index.js

import http from "../../assets/js/http"
// 可选导入的包
import common from "../../assets/js/common.js"
import utils from "../../assets/js/utils"
import requestApi from "../../assets/js/requestApi.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderNum: "",
    orderDetail: []
  },
  initOrderDetai() {


    const data = {
      userCode: this.data.userCode,
      orderNum: this.data.orderNum
    }
    console.log('没有？', this.data)

    http.get(requestApi.order, data).then((res) => {
      if (res.data.code == 200) {
        this.setData({
          orderDetail: res.data.result
        })
      } else {
        wx.showToast({
          title: res.data.message,
          icon: 'none',
          duration: 1500
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      orderNum: options.orderNum || '',
      userCode: options.userCode || ''
    })
    this.initOrderDetai()
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