
import React from 'react';
import { useState } from 'react';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx'; // Importing Home component
import './styles/App.css';
import './styles/Header.css';
import './styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Simulator from './Simulator.jsx';
import Info from './Info.jsx';
import Feedback from './Feedback.jsx';
import About from './About.jsx';

function App() {

  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/simulator" element={<Simulator />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/info" element={<Info />} />
          <Route exact path="/feedback" element={<Feedback />} />
        </Routes>
      </Router>
      </div>
      <Footer />
    </div>
  )
}

export default App;
