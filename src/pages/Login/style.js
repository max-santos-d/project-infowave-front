import styled from 'styled-components';
import * as colors from '../../config/colors';
import { Link } from 'react-router-dom';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

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

export const CreateUser = styled(Link)`
  display: flex;
  color: ${colors.color3};
  margin-left: 78%;
`;
