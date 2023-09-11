const { app, BrowserWindow } = require('electron');
const { exec } = require('child_process');
const path = require('path');

const fs = require('fs');

const logStream = fs.createWriteStream(path.join(__dirname, 'flask_server.log'), { flags: 'a' });

const flaskProcess = exec('python server/app.py');

flaskProcess.stdout.pipe(logStream);
flaskProcess.stderr.pipe(logStream);

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 1000,
    minWidth: 1200,
    minHeight: 1000,
    maxWidth: 1200,
    maxHeight: 1000,
    webPreferences: {
      nodeIntegration: true,
    },
    resizable: false,
    title: 'The Jackbox Mod Pack',
    icon: path.join(__dirname, 'jackboxlogodevlight.ico')
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

app.on('will-quit', () => {
  flaskProcess.kill();
});

// Start Flask server when the Electron app starts
exec('python server/app.py', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`Flask server stdout: ${stdout}`);
  console.error(`Flask server stderr: ${stderr}`);
});
