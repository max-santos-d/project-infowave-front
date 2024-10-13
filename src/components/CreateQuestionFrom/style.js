import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  button {
    height: 2.5rem;
    border-radius: 0 0 0.4rem 0.4rem;
    border: none;
    background: ${colors.color1};
    color: ${colors.white};
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 10rem;
  resize: none;
  padding: 1rem;
  font-size: 1rem;
  border-radius: 0.4rem 0.4rem 0 0;
  border: 1px solid #ccc;
  box-sizing: border-box;
  overflow: hidden;

  &:focus {
    outline: none;
    border-color: ${colors.color2};
  }
`;
