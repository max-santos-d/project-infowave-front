import styled from 'styled-components';
import { color1, color3 } from '../../config/colors';

export const Title = styled.h1`
  color: ${(props) => (props.$isRed ? 'red' : 'blue')};

  small {
    font-size: 12px;
    color: ${(props) => (props.$isRed ? 'blue' : 'red')};
  }
`;

export const Content = styled.p`
  text-transform: uppercase;
`;

export const Button = styled.button`
  background: ${color3};
  border: none;
  color: ${color1};
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: 700;
`;
