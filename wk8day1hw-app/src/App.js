import logo from './logo.svg';
import './App.css';
import Inventory from './views/Inventory';

import Profile from './Components/Profile';
import Home from './Components/Home';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/inventory">Inventory</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </nav>
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/inventory" element = {<Inventory/>} />
          <Route path="/profile" element = {<Profile/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}


