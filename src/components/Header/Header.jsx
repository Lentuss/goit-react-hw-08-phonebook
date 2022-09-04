import React from 'react';
import { useSelector } from 'react-redux';

import logo from '../../assets/logo1.png';
import UserMenu from 'components/UserMenu';

import {
  HeaderSection,
  Logo,
  NavBar,
  AuthBar,
  NavigationLink,
} from './Header.styled';

const Header = () => {
  const user = useSelector(state => state.contacts.authSlice);
  return (
    <HeaderSection>
      <Logo src={logo} alt="logo" />
      <NavBar>
        <NavigationLink to="/">home</NavigationLink>
        {user.isLoggedIn && (
          <NavigationLink to="/contacts">contacts</NavigationLink>
        )}
      </NavBar>
      <AuthBar>
        {user.isLoggedIn && <UserMenu email={user.user.email} />}
        {!user.isLoggedIn && (
          <>
            <NavigationLink to="/register">register</NavigationLink>
            <NavigationLink to="/login">login</NavigationLink>
          </>
        )}
      </AuthBar>
    </HeaderSection>
  );
};

export default Header;
