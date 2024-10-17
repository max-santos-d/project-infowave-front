import { FaRegPaperPlane } from 'react-icons/fa';
import styled from 'styled-components';

import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 100%;
  resize: none;
  padding: 1rem;
  font-size: 1rem;
  border-radius: 0.4rem;
  border: 1px solid ${colors.color2};
  box-sizing: border-box;
  overflow: hidden;
  font-size: 0.8rem;

  &:focus {
    outline: none;
    border-color: ${colors.color1};
  }
`;

export const MyFaRegPaperPlane = styled(FaRegPaperPlane)`
  font-size: 2rem;
  padding: 0.5rem;
  color: ${colors.white};
  background: ${colors.color2};
  border-radius: 50%;
`;

export const Button = styled.button`
  border: none;
  background: ${colors.color2};
  padding: 0.3rem 0.6rem 0.3rem 0.6rem;
  margin-top: 0.2rem;
  border-radius: 0.7rem;
  color: ${colors.white};

  &:hover {
    background: ${colors.color3};
  }
`;

export const CommentsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    font-size: 0.8rem;
  }
`;
