
import React from 'react';
import { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './styles/App.css';
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


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<p>home</p>} />
          <Route exact path="/simulator" element={<Simulator />} />
          <Route exact path="/about" element={<p>about</p>} />
          <Route exact path="/info" element={<Info />} />
          <Route exact path="/feedback" element={<Feedback />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
