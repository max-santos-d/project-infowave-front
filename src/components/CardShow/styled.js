import styled from 'styled-components';
import { Link } from 'react-router-dom';
//import * as colors from '../../config/colors';

export const StyledLink = styled(Link)`
  color: black;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: auto;
  margin-bottom: 2rem;

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 1rem 1rem 0 0;
  }

  p {
    font-size: 1rem;
    text-align: justify;
  }

  span {
    font-size: 0.7rem;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin: 0.5rem 0 0.5rem 0;
  gap: 1rem;
  margin-bottom: 1rem;

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    margin-top: -1.8rem;
  }
`;

export const HeaderContentContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;
