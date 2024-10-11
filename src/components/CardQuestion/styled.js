import styled from 'styled-components';
import { Link } from 'react-router-dom';
//import * as colors from '../../config/colors';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: auto;
  margin-bottom: 2rem;

  p {
    font-size: 1rem;
    text-align: justify;
  }

  span {
    font-size: 0.7rem;
  }
`;

export const Header = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0 0.5rem 0;
`;

export const HeaderUser = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;

  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-left: 1rem;
`;

export const HeaderContentInteractions = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
  }
`;

export const StyledLink = styled(Link)`
  color: black;
`;
