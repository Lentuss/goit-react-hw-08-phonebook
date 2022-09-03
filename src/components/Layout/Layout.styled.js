import styled from 'styled-components';
import theme from '../../constants/theme';

const { colors } = theme;

export const LayoutContainer = styled.div`
  background-color: ${({ location }) => {
    switch (location) {
      case '/contacts':
        return `${colors.dark}`;
      case '/register':
        return `${colors.dark}`;
      case '/login':
        return `${colors.mainGrey}`;
      default:
        return `${colors.mainGrey}`;
    }
  }};
  min-height: 100vh;
`;

export const Container = styled.div`
  display: block;
  max-width: 1728px;
  margin: 0 auto;
`;
