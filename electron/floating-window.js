
const { BrowserWindow, screen } = require('electron')
const path = require('path')
const NODE_ENV = process.env.NODE_ENV

function createSBallWindow () {
  const win2 = new BrowserWindow({
    // parent: mainWindow,
    width: 200, //悬浮窗口的宽度 比实际DIV的宽度要多2px 因为有1px的边框
    height: 200, //悬浮窗口的高度 比实际DIV的高度要多2px 因为有1px的边框
    type: 'toolbar',  //创建的窗口类型为工具栏窗口
    frame: false,  //要创建无边框窗口
    resizable: false, //禁止窗口大小缩放
    show: true,  //窗口显示
    transparent: true, //设置透明
    hasShadow: false, //不显示阴影
    alwaysOnTop: true, //窗口是否总是显示在其他窗口之前
    webPreferences: {
      devTools: false, //关闭调试工具
      nodeIntegration: true,//是否启用Node integration
      contextIsolation: false,//是否在独立 JavaScript 环境中运行 Electron API和指定的preload 脚本
    }
  })

  if (NODE_ENV === "development") {
    // win2.webContents.openDevTools()
  }

  //通过获取用户屏幕的宽高来设置悬浮球的初始位置
  const size = screen.getPrimaryDisplay().workAreaSize;   //获取显示器的宽高
  const winheight = parseInt(size.height)
  const winSize = win2.getSize();  //获取窗口宽高
  //设置窗口的位置 注意x轴要桌面的宽度 - 窗口的宽度
  win2.setPosition(size.width - winSize[0] - 5, winheight - 300);//设置悬浮球位置
  win2.loadURL(
    NODE_ENV === 'development'
      ? 'http://localhost:5173/floating-window'
      : `file://${path.join(__dirname, '../dist/index.html/floating-window')}`
  )
  win2.once('ready-to-show', () => {
    win2.show()
  })
  win2.on('close', () => {
    win2 = null
  })
}
module.exports = {
  createSBallWindow
} 
