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
  font-size: 0.8rem;
  text-align: justify;

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 1rem 1rem 0 0;
  }

  span {
    font-size: 0.6rem;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  margin: 0.5rem 0 0.5rem 0;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const HeaderContentContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.2rem;
`;

export const TextContent = styled.div`
  width: 100%;
`;
