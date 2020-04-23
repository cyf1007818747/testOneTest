// pages/home/home.js
Page({

  /**
   * Page initial data
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular: true,
    imgUrls: [
      "cloud://inuyasha.696e-inuyasha-1301310234/qyn-poster.jpg",
      "cloud://inuyasha.696e-inuyasha-1301310234/naruto-poster.jpeg",
    ],
    array: [
      {
        "img": "cloud://inuyasha.696e-inuyasha-1301310234/qyn-pic1.jpg",
        "title": "测一测你是庆余年中的哪一个角色"
      },
      {
        "img": "cloud://inuyasha.696e-inuyasha-1301310234/naruto-pic1.jpg",
        "title": "测一测你是火影忍者中的哪一个角色"
      }
    ]
  },

  chosen: function(e){
    console.log(e);
      wx.redirectTo({
        url: '../main/main?id=' + e.currentTarget.id
      });
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})