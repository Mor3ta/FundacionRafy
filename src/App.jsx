// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import Noticias from './components/Noticias';
import TorneoInscripcionFlujo from './pages/TorneoInscripcionFlujo';


function App() {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<>
          <Header />
          <Banner />
        </>} />
        <Route path="/inscripcion-torneo" element={<TorneoInscripcionFlujo />} />
      </Routes>
    </Router>
  );
}

export default App;
