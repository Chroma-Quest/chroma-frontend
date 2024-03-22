// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Auth0Provider } from '@auth0/auth0-react';
// import PrivateRoute from './Auth0PrivateRoute.jsx'; // not entirely sure what this does
// import Profile from './Auth0Profile.jsx';
// import Login from './Auth0Login.jsx';
// import Logout from './Auth0Logout.jsx';

// const DOMAIN = import.meta.env.VITE_AUTH0_DOMAIN;
// const CLIENT_ID = import.meta.env.VITE_AUTH0_CLIENT_ID;
// const REDIRECT_URI = import.meta.env.VITE_AUTH0_REDIRECT_URI;
// const AUDIENCE = import.meta.env.VITE_AUTH0_AUDI_ID;

// const Auth = () => {
//     return (
//         <Auth0Provider
//           domain={DOMAIN}
//           clientId={CLIENT_ID}
//           authorizationParams={{
//             redirect_uri: REDIRECT_URI
//           }}
//           // redirectUri={REDIRCT_URI}//{window.location.origin}
//           audience={AUDIENCE}
//         >
//           <Router>
//             <Routes>
//               <Route exact path="/login" component={<p>Placeholder</p>} />
//               <Route exact path="/logout" component={Logout} />
//               {/* <PrivateRoute exact path="/profile" component={Profile} /> */}
//             </Routes>
//           </Router>
//         </Auth0Provider>
//       );
//     };

// export default Auth;