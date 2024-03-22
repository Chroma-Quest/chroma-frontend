import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// import Auth from './components/Auth0.jsx'; 
import './styles/index.css';
import './styles/App.css';
import { Auth0Provider } from '@auth0/auth0-react';

const CLIENT_ID = import.meta.env.VITE_AUTH0_CLIENT_ID;
const DOMAIN = import.meta.env.VITE_AUTH0_DOMAIN;
const REDIRCT_URI = import.meta.env.VITE_AUTH0_REDIRECT_URI;
// const AUDIENCE = import.meta.env.VITE_AUTH0_AUDI_ID;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain = {DOMAIN}
      clientId= {CLIENT_ID}
      authorizationParams={{
        redirect_uri:REDIRCT_URI
      }}
      // audience= {AUDIENCE}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)