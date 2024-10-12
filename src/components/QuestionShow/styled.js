import { FaRegPaperPlane } from 'react-icons/fa';
import styled from 'styled-components';

import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
`;

export const Input = styled.input`
  width: 50%;
  border: 2px solid #ccc;
  border-radius: 5rem;
  font-size: 1rem;
  padding: 1rem 1rem 1rem 1.5rem;
  transition: width 0.4s ease-in-out;

  &[type='text']:focus {
    width: 100%;
  }
`;

export const MyFaRegPaperPlane = styled(FaRegPaperPlane)`
  font-size: 2.5rem;
  padding: 0.5rem;
  color: ${colors.white};
  background: ${colors.color1};
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
