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
  section {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }

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
  min-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0 0.5rem 0;
`;

export const HeaderContentContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.2rem;
`;

export const HeaderContentInteractions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.3rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
  }
`;
