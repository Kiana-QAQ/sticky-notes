// electron/main.js

// 控制应用生命周期和创建原生浏览器窗口的模组
const { app, BrowserWindow, ipcMain, Menu, Tray, screen } = require('electron')
const path = require('path')
const { createSBallWindow } = require('./floating-window')

const NODE_ENV = process.env.NODE_ENV

function createWindow () {
  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 360,
    height: 560,
    frame: false,  //要创建无边框窗口
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,//是否启用Node integration
      contextIsolation: false,//是否在独立 JavaScript 环境中运行 Electron API和指定的preload 脚本
    }
  })

  // 加载 index.html
  // mainWindow.loadFile('dist/index.html') 将该行改为下面这一行，加载url
  mainWindow.loadURL(
    NODE_ENV === 'development'
      ? 'http://localhost:5173'
      : `file://${path.join(__dirname, '../dist/index.html')}`
  );

  // 打开开发工具
  if (NODE_ENV === "development") {
    mainWindow.webContents.openDevTools()
  }

}
// 这段程序将会在 Electron 结束初始化
app.whenReady().then(() => {
  createWindow()
  // createSBallWindow()
  app.on('activate', function () {
    // 打开的窗口，那么程序会重新创建一个窗口。
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此，通常对程序和它们在
// 任务栏上的图标来说，应当保持活跃状态，直到用户使用 Cmd + Q 退出。
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})