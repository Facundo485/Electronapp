const {app, BrowserWindow, Menu} = require("electron");

const path = require("path");

const isDev = require("electron-is-dev");

if (process.env.NODE_ENV !== 'production') {
    require('electron-reload')(__dirname, {
      electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    })
}

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({width: 980, height: 680});
    mainWindow.loadURL(
        isDev ? "http://localhost:3000" : `file://${paht.join(__dirname, "../build/index.html")}`
    );
    mainWindow.on("closed", () => (mainWindow == null));
}

function createMenu() {
    const templateMenu = [
      {
        label: 'File',
        submenu: [
          {
            label: 'New PDF',
            accelarator: 'Ctrol+K',
            click() {
  
            }
          }
        ]
      }
    ];
    
    const mainMenu = Menu.buildFromTemplate(templateMenu);
    Menu.setApplicationMenu(mainMenu);
}

app.on('ready', function() {
    createWindow();
    createMenu();
  })  

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow == null) {
        createWindow();
    }
});