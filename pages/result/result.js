
// pages/result/result.js
Page({

  /**
   * Page initial data
   */
  data: {
    result: "",
    imagesrc: "",
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

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData({
      result: options.result
    })

    const db = wx.cloud.database();
    db.collection('questions-lists').where({
      name: options.test
    }).get({
      success: res => {
        // console.log('[数据库] [查询记录] 成功: ', res);
        this.setData({
          imagesrc: res.data[0].imagesrc,
        });
      }
    })
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