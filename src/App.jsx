import React from 'react';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
// import PrivateRoute from './components/auth/Auth0PrivateRoute.jsx';
import AuthButtons from './components/auth/AuthButtons.jsx';
import Profile from './components/auth/Auth0Profile.jsx';
// import Login from './components/auth/Auth0Login.jsx';
// import Logout from './components/auth/Auth0Logout.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx'; // Importing Home component
import './styles/App.css';
import './styles/Header.css';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Simulator from './Simulator.jsx';
import Info from './Info.jsx';
import Feedback from './Feedback.jsx';
import About from './About.jsx';

function App() {
  let { isLoading, isAuthenticated } = useAuth0();

  useEffect(() => {
    console.log('LOADING FROM AUTH0', isLoading);
   }, [isLoading]);


  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Router>
          <AuthButtons/>
          <Routes>
          {/* {isAuthenticated ? (
            <> */}
              {/* Auth0 Start routes */}
              <Route exact path="/profile" element={<Profile/>}/>
              {/* Auth0 End routes */}
              <Route exact path="/" element={<Home />} />
              <Route exact path="/simulator" element={<Simulator />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/info" element={<Info />} />
              <Route exact path="/feedback" element={<Feedback />} />
            {/* </>
          ) : (
            <Route path="/" element={<Home />} />
            )} */}
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;


          {/* <Route exact path="/login" component={<Login/>} />
          <Route exact path="/logout" component={<Logout/>} /> */}
          {/* <Route exact path='/' component={<PrivateRoute/>}/> */}