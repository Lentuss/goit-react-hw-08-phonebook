import styled from 'styled-components';
import theme from 'constants/theme';

const { colors } = theme;

export const FilterLabel = styled.label`
  display: block;
  font-style: italic;
  color: ${colors.textGrey};
`;

export const FilterInput = styled.input`
  display: block;
  margin: 10px auto;
  width: 420px;
  padding: 10px;

  border-radius: 5px;
`;
