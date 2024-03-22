import { useAuth0 } from '@auth0/auth0-react';
import Login from "./AuthLogin.jsx";
import Logout from "./AuthLogout.jsx";

function AuthButtons() {

  const {
    isAuthenticated,
  } = useAuth0();

  return isAuthenticated ? <Logout /> : <Login />
}

export default AuthButtons;