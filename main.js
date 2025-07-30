/** ==========================================================
* NAME: ENTRY POINT
============================================================ */
/**@DESC: xxxxxxxxxx */
//# IMPORTS >
const { app, BrowserWindow } = require('electron')
//# FUN: Crear Ventana >
const createWindow = () => {
  // Instacia Ventana
  const win = new BrowserWindow({
    width: 1000,
    height: 600,
    // resizable: false // Evitar Reajustar el tamaño
  });
  // Archivo HTML a cargar en ventana
  win.loadFile('./index.html');
  // Abrir las dev tools
  // win.webContents.openDevTools()
}

//# ARRANQUE >
app.whenReady().then(() => {
  createWindow();
})
//# XXXXX >
