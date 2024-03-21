import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

// must stlye ze buttons
const Logout = () => {
  const { logout } = useAuth0();

  return <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>;
};

export default Logout;