import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from './componenets/dashboard/';
import Preferences from './componenets/preferences';
import Login from './componenets/login/login'

function App() {
  const [token, setToken] = useState();

  if(!token){
    return(<Login setToken={setToken} />)
  }
  return (
     <div>
      <h1>Application</h1>
      <BrowserRouter>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/' element={<Preferences/>} />
      </BrowserRouter>
     </div>
  );
}

export default App;
