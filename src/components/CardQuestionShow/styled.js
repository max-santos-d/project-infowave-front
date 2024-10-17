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
  margin-bottom: 1rem;

  p {
    font-size: 0.7rem;
    text-align: justify;
  }
`;

export const Header = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0.5rem 0 0.5rem 0;
  gap: 1rem;
`;

export const HeaderUser = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
  }

  p {
    font-size: 1rem;
    text-align: justify;
  }

  span {
    font-size: 0.6rem;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const HeaderContentInteractions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  section {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
  }
`;
