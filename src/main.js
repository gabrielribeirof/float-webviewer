const { app, screen, BrowserWindow } = require('electron');

const createWindow = (width, height) => {
  if (!width && !height) {
    var { width, height } = screen.getPrimaryDisplay().workAreaSize;
  }

  mainWindow = new BrowserWindow({
    width,
    height,
    autoHideMenuBar: true
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});