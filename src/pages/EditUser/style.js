import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;

  input {
    width: 100%;
    padding: 0.6rem;
    margin-top: 0.5rem;
    font-size: 0.8rem;
    border-radius: 0.5rem;
    border: 1px solid ${colors.color2};
  }

  label {
    font-size: 0.8rem;
  }

  button {
    height: 2rem;
    border-radius: 0.5rem;
    border: none;
    background: ${colors.color1};
    color: ${colors.white};
  }
`;
