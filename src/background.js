'use strict'

import { app, protocol, BrowserWindow, Menu } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment = process.env.NODE_ENV !== 'production'

// Scheme must be registered before the app is ready
// 必须在应用准备好之前注册 Scheme
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])
async function createWindow() {
  // Create the browser window.
  // 创建浏览器窗口
  Menu.setApplicationMenu(null); // 将菜单栏设置为空以禁用
  const win = new BrowserWindow({
    width: 1200,
    height: 600,
    center: true,
    titleBarStyle: 'hidden', // 隐藏标题栏
    titleBarOverlay: {
      color: "#fff",
      height: 10
    }, // 隐藏顶栏时显示控制按钮
    webPreferences: {

      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    // 如果处于开发模式，则加载开发服务器的 url
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) {
      win.webContents.openDevTools()
    }
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    // 未开发时加载 index.html
    win.loadURL('app://./index.html')
  }
}
// 当所有窗口都关闭时退出。
// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  // 在 macOS 上，应用程序及其菜单栏很常见
  // 在用户使用 Cmd + Q 明确退出之前保持活动状态
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  // 在 macOS 上，当
  // 停靠图标被单击并且没有其他窗口打开。
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
// 这个方法会在 Electron 完成时调用
// 初始化并准备好创建浏览器窗口。
// 某些API只有在该事件发生后才能使用。
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    // 安装 Vue 开发工具
    try {
      await installExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  createWindow()
})

// 在开发模式下根据父进程的请求干净地退出。
// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
