import { app, BrowserWindow } from 'electron';

let mainWindow = null;

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  const loadURL = 'http://localhost:3000/';
  console.log('loadURL', loadURL);
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadURL(loadURL);
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});