import React from 'react';
import {Route,Routes,Link } from 'react-router-dom';
import Info from './components/info';
import Mappage from './components/mappage';


export default function App() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Info</Link> | <Link to="/map">Map</Link>
        </nav>
      </header>
      
      <Routes>
        <Route path="/" element={<info />} />
        <Route path="/map" element={<mappage />} />
      </Routes>
    </div>
  );
}


