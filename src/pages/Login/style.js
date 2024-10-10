import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  input {
    margin-bottom: 2rem;
    height: 3rem;
    padding: 0 1rem;
    border-radius: 0.5rem;
    border: 1px solid #ddd;
  }

  button {
    height: 2.5rem;
    border-radius: 0.5rem;
    border: none;
    background: ${colors.color1};
    color: ${colors.white};
  }
`;
