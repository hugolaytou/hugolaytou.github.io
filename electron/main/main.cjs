const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { Menu } = require("electron");

const isDev = !app.isPackaged;

let mainWindow = null;

Menu.setApplicationMenu(null);

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        icon: path.join(__dirname, "../../src/assets/logo_pixels_and_palettes_V3.ico"),
        show: false,
        webPreferences: {
            preload: path.join(__dirname, "../preload/preload.js"),
            nodeIntegration: false,
            contextIsolation: true
        }

    });

    mainWindow.removeMenu();

    if (isDev) {
        mainWindow.loadURL("http://localhost:5173");
        mainWindow.webContents.openDevTools();
    } else {
        mainWindow.loadFile(
            path.join(__dirname, "../../dist/index.html")
        );
    }

    mainWindow.once("ready-to-show", () => {
        mainWindow.show();
    });
}

ipcMain.handle("ping", () => {
    return "pong depuis le main process";
});

app.whenReady().then(createWindow);

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
