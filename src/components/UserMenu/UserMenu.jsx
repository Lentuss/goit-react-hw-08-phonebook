import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';

import { MenuContainer, LogOutBtn, User } from './UserMenu.styled';

const UserMenu = ({ email }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <MenuContainer>
      <User>hello, {email}</User>
      <LogOutBtn type="button" onClick={handleClick}>
        Log Out
      </LogOutBtn>
    </MenuContainer>
  );
};

UserMenu.propTypes = {
  email: PropTypes.string.isRequired,
};

export default UserMenu;
