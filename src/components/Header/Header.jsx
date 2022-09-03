import React from 'react';
import { useSelector } from 'react-redux';
// import {useLocation } from 'react-router-dom'
// import PropTypes from 'prop-types'
import logo from '../../assets/logo1.png';
import UserMenu from 'components/UserMenu';

import {
  HeaderSection,
  Logo,
  NavBar,
  AuthBar,
  NavigationLink,
} from './Header.styled';

const Header = props => {
  const user = useSelector(state => state.contacts.authSlice); ///надо задать нулевое
  console.log(user);
  return (
    <HeaderSection>
      <Logo src={logo} alt="logo" />
      <NavBar>
        <NavigationLink to="/">home</NavigationLink>
        <NavigationLink to="/contacts">contacts</NavigationLink>
      </NavBar>
      <AuthBar>
        {user.isLoggedIn && <UserMenu email={user.user.email} />}
        <NavigationLink to="/register">register</NavigationLink>
        <NavigationLink to="/login">login</NavigationLink>
      </AuthBar>
    </HeaderSection>
  );
};

Header.propTypes = {};

export default Header;
