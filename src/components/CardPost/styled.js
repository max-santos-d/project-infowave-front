import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: black;
  width: 100%;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 2rem;

  section {
    width: 100%;
  }

  img {
    width: 100%;
    height: 13rem;
    object-fit: cover;
    object-position: center;
    border-radius: 0.4rem;
  }

  p {
    font-size: 0.8rem;
    text-align: justify;
  }

  span {
    font-size: 0.5rem;
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
  font-size: 0.8rem;
`;

export const HeaderContentInteractions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  padding-left: 0.3rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const TextContent = styled.div`
  width: 100%;
`;
