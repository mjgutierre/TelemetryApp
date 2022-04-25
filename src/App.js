//import logo from './logo.svg';
import './App.css';
import React, {useState , useEffect} from 'react';
//const {app, BrowserWindow} = require('electron')
//const electronReload = require('electron-reload')
//const path = require('path');
//const url = require('url');

  
function App() {
const url= 'http://localhost:3000/datos2'
const [datos2 , setDatos2] = useState()
const fetchApi = async () => {
  const response = await fetch(url)//cuando se puedan obtener los resultados se guardan en la var datos2 utilizando la funcion setDatos2 
  //console.log(response.status)
  const responseJSON= await response.json()//procesar la respuesta en json
  setDatos2(responseJSON)
  }

  useEffect( () => {
    fetchApi()
  },[])
  
  return (
    <div className="App">
      Telemetry
      <ul>
      { !datos2 ? 'Cargando...' : 
        datos2.map((datos2,index)=>{
        return <li>{datos2.title}{datos2.completed ? 'check':'not check'}</li>
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
