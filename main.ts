import { app, BrowserWindow } from 'electron';

let mainWindow: Electron.BrowserWindow | null;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1100,
    height: 700,
    alwaysOnTop: true,
    autoHideMenuBar: true
  });

  mainWindow.loadURL(`http://localhost:3000`);
}

app.on('ready', () => createWindow());
