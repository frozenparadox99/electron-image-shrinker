const { app, BrowserWindow } = require("electron");

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title: "ImageShrink",
    width: 500,
    height: 600,
  });
}

// use cmd+shift+i for accessing dev tools
app.on("ready", createMainWindow);
