var electron = require('electron');
const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready',function(){
    mainWindow = new BrowserWindow({
        width:500,
        height:500
    });

    app.mainWindow = mainWindow;
})