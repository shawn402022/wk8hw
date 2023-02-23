import logo from './logo.svg';
import './App.css';
import Inventory from './views/Inventory';
import InventorySingle from './views/InventorySingle';
import { useState, useContext } from 'react';
import Profile from './Components/Profile';
import Home from './Components/Home';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AuthContext } from './contexts/AuthProvider';


export default function App() {
  const { login, logout, user } = useContext(AuthContext)

  return (
    <div className="App">
      <h2>Loggedin User: { user.username }</h2>
      <BrowserRouter>
        <nav>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/inventory">Inventory</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          {
            (user.loggedIn) ?
            <li><button onClick={logout}>Logout</button></li> :
            <li><button onClick={login}>Login</button></li>
          }
          
         
        </nav>
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/inventory" element = {<Inventory/>} />
          <Route path="/inventory/:id" element = {<InventorySingle/>} />
          <Route path="/profile" element = {<Profile/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}


