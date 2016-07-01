// whereismystuff -- simplistic inventory manager for pedantic people
// Copyright (C) 2016 Jonas A. Hultén

// This program is free software: you can redistribute it and/or modify it under
// the terms of the GNU General Public License as published by the Free Software
// Foundation, either version 3 of the License, or (at your option) any later
// version.

// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
// FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more
// details.

// You should have received a copy of the GNU General Public License along with
// this program.  If not, see <http://www.gnu.org/licenses/>.

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const {ipcMain} = electron;

// Global reference to the main window
let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object.
    mainWindow = null;
  });
}

// Create the window when that's a good idea
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    dbmanager.close();
    app.quit();
  }
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// Load in the database manager
var dbmanager = require('./lib/sqlite');
global.dbm = dbmanager;

// Define the database initializer callback
function dbInitCallback(event){
  var callback = function(err){
    if(err == null){
      loadInventoryScreen();
    }
    else{
      throw err;
    }
  }
  return callback;
}

// Recieve db-create-request
ipcMain.on('db-create-request', (event, arg) => {
  console.log("Request to create database at " + arg + " recieved.");
  dbmanager.createDatabase(arg, dbInitCallback(event));
});

// Recieve db-load-request
ipcMain.on('db-load-request', (event, arg) => {
  console.log("Request to load database " + arg + " recieved.");
  dbmanager.loadDatabase(arg, dbInitCallback(event));
});

// Load the next page after a database has been loaded
function loadInventoryScreen(){
  mainWindow.loadURL('file://' + __dirname + '/page/inv/index.html');
}
