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

window.$ = require('jquery');

const electron = require('electron');
const dialog = electron.remote.dialog;
const {ipcRenderer} = electron;

function dialogconf(mode){
  if(mode == "create"){
    var title = "Create new database";
  }
  else if(mode == "load"){
    var title = "Load database";
  }
  var conf = {
    title: title,
    defaultPath: ".",
    filters: [
      {
        name: 'WIMS DB (.wms)',
        extensions: ['wms']
      },
      {
        name: 'All Files',
        extensions: ['*']
      }
    ],
    properties: [
      'openFile'
    ]
  };
  return conf;
}

// Site IO
$(document).ready(function(){
  // Handle new database request
  $('#new-database').click(function(){
    dialog.showSaveDialog(
    dialogconf("create"), 
    function(filename){
      if(undefined != filename){
        ipcRenderer.send('db-create-request', filename);
      }
    });
  });

  // Handle database load request
  $('#load-database').click(function(){
    dialog.showOpenDialog(
      dialogconf("load"),
    function(filename){
      if(undefined != filename){
        ipcRenderer.send('db-load-request', filename[0]);
      }
    });
  });
});
