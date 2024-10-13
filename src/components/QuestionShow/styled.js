import { FaRegPaperPlane } from 'react-icons/fa';
import styled from 'styled-components';

import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
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

  &:focus {
    outline: none;
    border-color: ${colors.color2};
  }
`;

export const MyFaRegPaperPlane = styled(FaRegPaperPlane)`
  font-size: 2.5rem;
  padding: 0.5rem;
  color: ${colors.white};
  background: ${colors.color2};
  border-radius: 50%;
`;

export const Button = styled.button`
  margin-left: 0.4rem;
  border: none;
  background: none;
`;

export const CommentsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
