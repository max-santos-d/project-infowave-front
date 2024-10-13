import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

import * as colors from '../../config/colors';

export const CommentsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Form = styled.form`
  display: flex;
  padding-bottom: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  border: 2px solid #ccc;
  border-radius: 0.5rem 0 0 0.5rem;
  font-size: 0.7rem;
  padding: 1rem 1rem 1rem 1.5rem;
`;

export const MyFaRegPaperPlane = styled(FaSearch)`
  height: 100%;
  font-size: 2.5rem;
  padding: 0.5rem;
  color: ${colors.white};
  background: ${colors.color2};
  border-radius: 0 0.5rem 0.5rem 0;
`;

export const Button = styled.button`
  border: none;
  background: none;
`;
