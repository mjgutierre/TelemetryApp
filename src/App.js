//import logo from './logo.svg';
import './App.css';
import React, {useState , useEffect} from 'react';
//const {app, BrowserWindow} = require('electron')
//const electronReload = require('electron-reload')
//const path = require('path');
//const url = require('url');

  
function App() {
const url= 'https://my-json-server.typicode.com/mjgutierre/TelemetryApp/db'
const [db , setdb] = useState()
const fetchApi = async () => {
  const response = await fetch(url)//cuando se puedan obtener los resultados se guardan en la var db utilizando la funcion setdb 
  //console.log(response.status)
  const responseJSON= await response.json()//procesar la respuesta en json
  setdb(responseJSON)
  }

  useEffect( () => {
    fetchApi()
  },[])
  
  return (
    <div className="App">
      Telemetry
      <ul>
      { !db ? 'Cargando...' : 
        db.map((db,index)=>{
          return <li>{db.nombre}</li>
        })
      }
      </ul>
    </div>
  );
}

/*
if (process.env.NODE_ENV !== 'production') {
    require('electron-reload')(__dirname, {
      electron: path.join(__dirname,'../node_modules','.bin','electron')
    })
}

let mainWindow  

app.on('ready', () => {
    mainWindow = new BrowserWindow ({width: 800, height:600})
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/index.html'),
        protocol: 'file',
        slashes: true
    }))
      
    mainWindow.on('closed', () => {
      app.quit();
    })
});
*/

export default App;
