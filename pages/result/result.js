// pages/result/result.js
const util = require('../../utils/util.js');
const app = util.app;
const db = util.dbUtil;

Page({

  /**
   * Page initial data
   */
  data: {
    // userInfo: {},
    result: "",
    // imagesrc: "",
    // visible: false,
    array: []
  },

  //事件处理函数
  // show: function () {
  //   let resultPage = this;  // @@@@@@@@ great example of the limitation of 'this'

  //   // ---------- check authority
  //   wx.getSetting({
  //     success(res) {
  //       if (res.authSetting['scope.writePhotosAlbum']) {
  //         resultPage.setData({ visible: true, })
  //       } else if (res.authSetting['scope.writePhotosAlbum'] === undefined) {
  //         wx.authorize({
  //           scope: 'scope.writePhotosAlbum',
  //           success() {
  //             resultPage.setData({ visible: true, })
  //           },
  //           fail() {
  //             wx.showToast({
  //               title: '您没有授权，无法保存到相册',
  //               icon: 'none'
  //             })
  //           }
  //         })
  //       } else {
  //         wx.openSetting({
  //           success(res) {
  //             if (res.authSetting['scope.writePhotosAlbum']) {
  //               resultPage.setData({ visible: true, })
  //             } else {
  //               wx.showToast({
  //                 title: '您没有授权，无法保存到相册',
  //                 icon: 'none'
  //               })
  //             }
  //           }
  //         })
  //       }
  //     }
  //   })
  //   // ---------- end of checking authority
  // },

  // close: function () {
  //   this.setData({ visible: false })
  // },

  
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData({
      result: options.result
      // userInfo: app.globalData.userInfo,
    })

    // db.collection('questions-lists').where({
    //   name: options.test
    // }).get({
    //   success: res => {
    //     // console.log('[数据库] [查询记录] 成功: ', res);
    //     this.setData({
    //       imagesrc: res.data[0].imagesrc,
    //     });
    //   }
    // })
    
    db.collection('questions-lists').where({ 
      name: db.command.neq(options.test)
     }).get({
      success: res => {
        // console.log(res);
        res.data.sort((a, b) => 0.5 - Math.random());
        this.setData({
          array: res.data.slice(0, 3)
        })
      }
    });
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