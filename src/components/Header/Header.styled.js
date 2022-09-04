import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import theme from '../../constants/theme';

const { colors } = theme;

export const HeaderSection = styled.header`
  position: fixed;
  z-index: 3;
  top: 0;

  display: flex;
  align-items: center;
  width: calc((100% - 100px));
  padding: 30px 50px;

  color: ${colors.white};
  font-size: 12px;
  font-weight: 700;

  mix-blend-mode: difference;
  background-color: transparent;
`;

export const NavBar = styled.nav`
  display: inline-flex;
  gap: 20px;
  margin-left: 20px;
`;
export const AuthBar = styled.nav`
  display: inline-flex;
  align-items: center;
  gap: 20px;
  margin-left: auto;
`;

export const NavigationLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  height: 30px;
  padding: 10px 30px;

  text-decoration: none;
  text-transform: uppercase;

  color: ${colors.white};
  border: 2px solid ${colors.white};
  border-radius: 40px;
  mix-blend-mode: difference;

  &.active {
    color: ${colors.dark};
    background-color: ${colors.white};
  }
`;

export const Logo = styled.img`
  display: block;
  align-items: center;
  height: 60px;
`;
