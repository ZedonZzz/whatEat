// pages/restList/index.ts
const restDate = {
  西丽湖校区: [1, 2, 3],
  关龙山校区: [4, 5, 6],
  留仙洞校区: []
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    columns: [
      {
        values: Object.keys(restDate),
        className: 'place',
      },
      {
        values: restDate['西丽湖校区'],
        className: 'rest',
        defaultIndex: 2,
      },
    ],
    show: false,
    place: '全部校区',
    mark: 3.5
  },
  onSearch () {

  },
  selectCancel () {
    this.setData({
      value: ''
    })
  },
  selectClick () {
    this.setData({
      show: true
    })
  },
  selectConfirm () {
    let selectDate = this.data.picket.getValues()
    this.setData({
      show: false,
      place: selectDate[0] + ' ' + selectDate[1]
    })
  },
  selectChange (event) {
    const { picker, value, index } = event.detail
    picker.setColumnValues(1, restDate[value[0]]);
  },
  selectCancel () {
    this.setData({
      show: false
    })
  },
  onClose () {
    this.setData({
      show: false
    })
  },
  getStyle() {
    return 'red'
  },
  goDetail() {
    wx.navigateTo({
      url: '/pages/restDetail/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    this.setData({
      picket: this.selectComponent('.picker')
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage () {

  }
})