import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
import './styles/index.css';
import './styles/App.css';

const CLIENT_ID = import.meta.env.VITE_AUTH0_CLIENT_ID;
const DOMAIN = import.meta.env.VITE_AUTH0_DOMAIN;
const REDIRECT_URI = import.meta.env.VITE_AUTH0_REDIRECT_URI;
console.log("REDIRECT URI", REDIRECT_URI);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain = {DOMAIN}
      clientId= {CLIENT_ID}
      authorizationParams={{
        redirect_uri:REDIRECT_URI
      }}
      // audience= {AUDIENCE}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)