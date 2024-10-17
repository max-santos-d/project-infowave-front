import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  div {
    display: flex;
  }

  p {
    font-size: 0.8rem;
    text-align: justify;
  }

  span {
    font-size: 0.5rem;
  }
`;

export const HeaderUser = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.6rem;

  div {
    display: flex;
    align-items: center;
  }

  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const HeaderContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-left: 0.5rem;
`;

export const ContentInteractions = styled.div`
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
