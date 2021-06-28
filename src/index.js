import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {App} from './App';
import {LogInAuth} from "./contexts/LogInContext/LogInContext"


ReactDOM.render(
  <React.StrictMode>
    <LogInAuth> 
    <App/>
    </LogInAuth> 
  </React.StrictMode>,
  document.getElementById('root')
);
