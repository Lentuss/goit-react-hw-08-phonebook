import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const PublicRoute = ({ children, restricted = false }) => {
  const isLoggedIn = useSelector(state => state.contacts.authSlice.isLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to="/contacts" replace /> : children;
};

PublicRoute.propTypes = {
  children: PropTypes.element.isRequired,
  restricted: PropTypes.bool,
};

export default PublicRoute;
