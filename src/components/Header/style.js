import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Nav = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.color2};
  height: 100vh;
  width: 2rem;
  padding: 1.5rem;
  gap: 1rem;

  a {
    color: ${colors.white};
  }
`;
