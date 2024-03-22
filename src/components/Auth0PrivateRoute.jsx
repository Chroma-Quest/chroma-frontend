import React from 'react';
import {Route, redirect} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// CHAT GPT review with jacob!!
const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated, isLoading } = useAuth0();
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    return (
      isAuthenticated ?
      <Route
        {...rest}
        render={(props) => <Component {...props} />}
      />
      : redirect('/login')
    );
  };
  
  export default PrivateRoute;