import styled from 'styled-components';

import * as colors from '../../config/colors';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 2rem;
  margin-top: 2rem;

  border-bottom: 1px solid ${colors.color3};

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
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 0 0.5rem 0;

  span {
    font-size: 0.5rem;
  }
`;

export const Context = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
`;

export const ActionButton = styled.button`
  display: flex;
  justify-content: flex-end;
  background: ${colors.color1};
  border: none;
  color: ${colors.white};
  border-radius: 50%;
  padding: 0.5rem;
  margin-bottom: 5px;
  transition: 0.2s ease-in-out;

  &:hover {
    background: ${colors.color3};
  }
`;

export const ConfirmButton = styled.button`
  display: flex;
  align-items: center;
  background: ${colors.warningColor};
  border: none;
  color: ${colors.white};
  border-radius: 50%;
  padding: 0.5rem;
  margin-bottom: 5px;
  transition: 0.2s ease-in-out;

  &:hover {
    background: red;
  }
`;
