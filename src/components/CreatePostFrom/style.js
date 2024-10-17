import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;

  input {
    width: 100%;
    padding: 1rem;
    font-size: 0.8rem;
    border-radius: 0.5rem;
    border: 1px solid ${colors.color2};
    overflow: hidden;
    resize: none;
    font-size: 0.8rem;

    &:focus {
      border-color: ${colors.color1};
    }
  }

  button {
    height: 2rem;
    border-radius: 0.4rem;
    border: none;
    background: ${colors.color1};
    color: ${colors.white};
    font-size: 0.8rem;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 8rem;
  resize: none;
  padding: 1rem;
  border-radius: 0.4rem;
  border: 1px solid ${colors.color2};
  overflow: hidden;

  &:focus {
    outline: none;
    border-color: ${colors.color1};
  }
`;
