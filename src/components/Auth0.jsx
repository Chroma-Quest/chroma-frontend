import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import PrivateRoute from './Auth0PrivateRoute'; // not entirely sure what this does
import Profile from './Auth0Profile';
import Login from './Auth0Login';
import Logout from './Auth0Logout';

// add env thingys below
const domain = ;
const clientId = ;
const audience = ;

const App = () => {
    return (
        <Auth0Provider
          domain={domain}
          clientId={clientId}
          redirectUri={window.location.origin}
          audience={audience}
        >
            {/* this needs to be revisited */}
          <Router>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/logout" component={Logout} />
              <PrivateRoute exact path="/profile" component={Profile} />
            </Switch>
          </Router>
        </Auth0Provider>
      );
    };

export default App;