import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;

  input {
    width: 100%;
    padding: 1rem;
    margin-top: 0.5rem;
    font-size: 1rem;
    border-radius: 0.5rem;
    border: 1px solid ${colors.color2};
  }
  button {
    height: 2.5rem;
    border-radius: 0.5rem;
    border: none;
    background: ${colors.color1};
    color: ${colors.white};
  }
`;
