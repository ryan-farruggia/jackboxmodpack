const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 900,
    minWidth: 1200,
    minHeight: 1000,
    maxWidth: 1200,
    maxHeight: 1000,
    webPreferences: {
      nodeIntegration: true,
    },
    resizable: false,
    title: 'The Jackbox Mod Pack',
    icon: path.join(__dirname, 'ydkjfs.ico')
  });

  // Load the React app
  mainWindow.loadURL('http://localhost:3000/');

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
