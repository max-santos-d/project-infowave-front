import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Logout = styled.button`
  margin: 2rem;
`;

export const UserHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  background: ${colors.color3};
  justify-content: left;
  align-items: center;
  border-radius: 2rem;

  img {
    width: 5rem;
    height: 5rem;
    margin-left: -1.5rem;
    background: ${colors.white};
    border: 4px solid ${colors.white};
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const UserContent = styled.div`
  padding: 1rem;
  margin-right: 3rem;
  color: ${colors.white};
`;
