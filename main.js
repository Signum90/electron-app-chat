/** ==========================================================
* NAME: ENTRY POINT
============================================================ */
/**@DESC: xxxxxxxxxx */
//# IMPORTS >
const { app, BrowserWindow, ipcMain, ipcRenderer } = require('electron');
//# SIMULACIÓN DE DATOS >
const { contacts, chats } = require('./data');
/**
 * ipcMain -> Permite comunicar el proceso principal
 * con las vistas , eventos y mensajes, Se comunica de forma asincrónica desde el proceso principal a los procesos de renderizado.
 * -------------------------------------
 * ipcRenderer -> El módulo ipcRenderer es un EventEmitter. Proporciona un par de métodos para enviar mensajes sincrónicos y asincrónicos desde el proceso de renderizado (página web) al proceso principal.
 */

//# FUN: Crear Ventana >
const createWindow = () => {
  // Instacia Ventana
  const win = new BrowserWindow({
    width: 1000,
    height: 600,
    // resizable: false // Evitar Reajustar el tamaño
    // Realizar Integración con NODE, solo para desarrollo
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  // Archivo HTML a cargar en ventana
  win.loadFile('./index.html');
  // Abrir las dev tools
  // win.webContents.openDevTools()
  /**EVENTOS: En electro existen multiples eventos, cada clase u objeto tiene sus propios eventos
   * el web content permite ejecutar eventos relativos a las pagias web de la aplicación
   *   win.webContents.on('event-name', () => {})
   */
  // EVENTOS: 
  win.webContents.on('did-finish-load', () => {
    console.log("Finalizo la carga de la página");
    // Enviar mensaje a la página que lo invoca
    win.webContents.send('data-from-server', 'Hola Página');
    // ENVIAR SIMULACIÓN DE DATOS
    win.webContents.send('contacts', contacts);
    win.webContents.send('chats', chats);
  })
  // ESCUCHAR EVENTOS DEL PROCESO DE RENDERIZADO
  ipcMain.on('data-from-web', (event, data) => {
    console.log("La página web dice", data);
  })
  ipcMain.on('data-from-web-click', (event, payload) => {
    console.log('La página envia: ', payload);
    
  })

}

//# ARRANQUE >
app.whenReady().then(() => {
  createWindow();
})
//# XXXXX >
