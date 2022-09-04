import styled from 'styled-components';
import theme from '../../constants/theme';

const { colors } = theme;

export const Form = styled.form`
  position: absolute;
  top: 180px;
  left: 110px;

  display: flex;
  flex-direction: column;

  padding: 30px;

  color: #c5c6c7;
  box-shadow: 2px 2px 10px black;
  border: 2px solid white;
  border-radius: 10px;
`;

export const Title = styled.h1`
  margin: 0 0 20px;
  cursor: default;

  color: white;
  text-shadow: 3px 3px 3px ${colors.mainGrey}, 5px 5px 5px ${colors.textGrey};
  font-size: 32px;
  font-weight: bold;
`;

export const FormLabel = styled.label`
  text-align: start;
  display: flex;
  flex-direction: column;
`;

export const LabelTitle = styled.span`
  display: inline-block;
  color: ${colors.white};
  margin: 10px 0;
`;

export const FormInput = styled.input`
  box-sizing: border-box;
  width: 420px;
  padding: 10px;
  border-radius: 5px;
`;

export const Button = styled.button`
  display: block;
  width: 180px;

  margin: 20px auto 10px;
  padding: 10px;

  background-color: ${colors.textGrey};

  color: ${colors.mainGrey};
  border-radius: 10px;
  box-shadow: -2px -2px 5px ${colors.dark};

  font-size: 18px;
  font-weight: bold;

  cursor: pointer;

  transition: background-color 250ms linear, box-shadow 250ms linear;

  &:hover,
  &:focus {
    background-color: ${colors.lightGreen};
  }
  &:active {
    box-shadow: 2px 2px 5px ${colors.dark};
  }
`;
