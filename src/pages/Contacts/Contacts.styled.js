import styled from 'styled-components';
import theme from 'constants/theme';

const { colors } = theme;
export const Container = styled.div`
  background-color: ${colors.dark};
  padding: 70px 50px;
  height: 70vh;
`;

export const BookContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 120px;
  width: 90vw;

  margin: 30px auto;
  padding-top: 20px;

  overflow: hidden;
`;
