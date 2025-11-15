import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/routes/home';
import Products from './components/routes/products';
import Contact from './components/routes/contact';
import Careers from './components/routes/careers';
import './App.css';

function App() {
  return (

    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" replace />} /> {/* This sets the home page to the default page */}
        <Route path='/Home' element={<Home />}/>
        <Route path='/Products' element={<Products />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Careers' element={<Careers />} />
      </Routes>
    </div>
  );
}

export default App;
