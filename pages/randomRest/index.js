const app = getApp()
Page({
  data: {
    blocks: [
      { padding: '10px', background: '#869cfa' },
      { padding: '10px', background: '#e9e8fe' },
    ],
    slots: [
      { order: [1, 0, 1] },
    ],
    prizes: [
      { fonts: [{ text: '6', top: '15%' }] },
      { fonts: [{ text: '9', top: '15%' }] },
    ],
    defaultStyle: {
      borderRadius: Infinity,
      background: '#bac5ee',
      fontSize: '32px',
      fontColor: '#333'
    },
    defaultConfig: {
      rowSpacing: '25px',
      colSpacing: '10px'
    }
  },
  start() {
    const luck = this.selectComponent("#luck")
    console.log(luck)
    luck.lucky.play()
    setTimeout(() => {
      luck.lucky.stop(1)
    },3000)
  }
})