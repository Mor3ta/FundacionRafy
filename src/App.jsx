// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Noticias from './components/Noticias';
import TorneoInscripcionFlujo from './pages/TorneoInscripcionFlujo';


function App() {
  return (
    <Router>
     <Header />
      <Routes>
        <Route path="/" element={<>
         
          <Banner />
          
          
        </>} />
        <Route path="/inscripcion-torneo" element={<TorneoInscripcionFlujo />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
