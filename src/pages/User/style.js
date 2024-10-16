import styled from 'styled-components';
import * as colors from '../../config/colors';
import { FaUserCircle } from 'react-icons/fa';

export const UserHeader = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  background: ${colors.color3};
  align-items: center;
  border-radius: 3rem 1rem 3rem 1rem;

  img {
    width: 7rem;
    height: 7rem;
    margin-top: -3rem;
    background: ${colors.white};
    border: 2px solid ${colors.white};
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const MyFaUserCircle = styled(FaUserCircle)`
  width: 7rem;
  height: 7rem;
  margin-top: -3rem;
  background: ${colors.white};
  border: 2px solid ${colors.white};
  border-radius: 50%;
  object-fit: cover;
`;

export const Options = styled.div`
  position: absolute;
  margin: -3.5rem 0 0 15rem;
`;

export const UserContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  color: ${colors.white};
  font-size: 0.8rem;
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
