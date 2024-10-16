import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  padding-bottom: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  border: 2px solid #ccc;
  border-radius: 0.5rem 0 0 0.5rem;
  padding: 0.5rem 0.5rem 0.5rem 1.5rem;
`;

export const MyFaRegPaperPlane = styled(FaSearch)`
  height: 100%;
  font-size: 2rem;
  padding: 0.5rem;
  color: ${colors.white};
  background: ${colors.color2};
  border-radius: 0 0.5rem 0.5rem 0;
`;

export const Button = styled.button`
  border: none;
  background: none;
`;

export const CreateQuestion = styled.button`
  border-radius: 0.3rem;
  width: 100%;
  padding: 0.5rem;
  margin: 1rem 0;
  border: none;
  background: ${colors.color2};
  color: ${colors.white};

  a {
    color: ${colors.white};
  }
`;
