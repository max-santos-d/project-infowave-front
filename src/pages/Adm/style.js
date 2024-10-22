import styled from 'styled-components';
import * as colors from '../../config/colors';

export const ButtonSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  padding-top: 2rem;
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
