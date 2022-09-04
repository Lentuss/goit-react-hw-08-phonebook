import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Notify } from 'notiflix';
import { PropTypes } from 'prop-types';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(state => state.contacts.authSlice.isLoggedIn);
  Notify.warning('Log-in or create new account, please');
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PrivateRoute;
