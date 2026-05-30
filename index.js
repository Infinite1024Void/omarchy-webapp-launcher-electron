const { app, BrowserWindow } = require('electron');

function getURL() {
  const url = process.argv.find(arg => arg.startsWith('http://') || arg.startsWith('https://'));

  return url || 'https://omarchy.org';
}

function createWindow() {
  const url = getURL();
  
  // Debugging
  console.log(process.argv);
  console.log('Loading:',url);

  // Start Electron
  const win = new BrowserWindow({ autoHideMenuBar: true });

  win.removeMenu();
  win.loadURL(url);
}

app.whenReady().then(createWindow);
