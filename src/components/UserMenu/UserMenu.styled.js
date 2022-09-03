import styled from 'styled-components';

import theme from '../../constants/theme';

const { colors } = theme;

export const MenuContainer = styled.div`
  display: inline-flex;
`;

export const LogOutBtn = styled.button`
  display: inline-flex;
  align-items: center;
  height: 30px;
  padding: 10px 30px;

  text-decoration: none;
  text-transform: uppercase;

  border: 2px solid ${colors.white};
  border-radius: 40px;
  mix-blend-mode: difference;

  cursor: pointer;

  &.active {
    color: ${colors.dark};
    background-color: ${colors.white};
  }
`;

export const User = styled.p`
  display: inline-flex;
  align-self: center;
  margin-right: 20px;

  font-weight: bold;
  text-transform: uppercase;
  color: ${colors.white};
  text-shadow: 3px 3px 3px ${colors.mainGrey}, 5px 5px 5px ${colors.textGrey};
`;
