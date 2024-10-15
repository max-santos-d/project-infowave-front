import styled from 'styled-components';
import * as colors from '../../config/colors';

export const UserHeader = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  background: ${colors.color3};
  align-items: center;
  border-radius: 2rem;

  img {
    width: 7rem;
    height: 7rem;
    margin-left: -3rem;
    background: ${colors.white};
    border: 4px solid ${colors.white};
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderInteractions = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  gap: 0.5rem;

  button {
    display: flex;
    align-items: center;
    background: ${colors.color1};
    border: none;
    color: ${colors.white};
    border-radius: 50%;
    padding: 0.5rem;
    transition: 0.2s ease-in-out;

    &:hover {
      background: ${colors.warningColor};
    }
  }
`;

export const UserContent = styled.div`
  padding: 0.5rem;
  color: ${colors.white};
  font-size: 0.8rem;

  p {
    margin-bottom: 0.5rem;
  }

  span {
    display: block;
  }
`;

export const ButtonSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

export const ButtonsHeader = styled.div`
  align-items: center;
  justify-content: space-around;
  display: flex;
  flex-direction: row;
`;

export const ButtonsLikesHeader = styled.div`
  display: flex;
  flex-direction: row;
  display: ${(props) => (props.$clickedvisible === 'true' ? 'hidden' : 'none')};
`;

export const Button = styled.button`
  width: 100%;
  border: none;
  padding: 0.7rem;
  border-radius: 1rem;
  background: none;

  &:hover {
    background: ${colors.color1};
    color: ${colors.white};
  }

  &:focus {
    background: ${colors.color2};
    color: ${colors.white};
  }
`;
