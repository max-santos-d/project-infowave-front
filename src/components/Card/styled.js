import styled from 'styled-components';
//import * as colors from '../../config/colors';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 3rem;

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 1rem 1rem 0 0;
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
  gap: 0.2rem;

  span {
    font-size: 0.8rem;
  }
`;

export const HeaderContentInteractions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  section {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;

    span {
      font-size: 0.8rem;
    }
  }
`;
