import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Notify } from 'notiflix';
import { PropTypes } from 'prop-types';

const PrivateRoute = ({ children }) => {
  const stateLoggedIn = useSelector(
    state => state.contacts.authSlice.isLoggedIn
  );
  const isLoggedIn = JSON.parse(localStorage.getItem('isLogged'))
    ? true
    : stateLoggedIn;
  if (!isLoggedIn) {
    Notify.warning('Log-in or create new account to continue');
  }
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PrivateRoute;
