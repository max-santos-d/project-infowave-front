import styled from 'styled-components';
import { color1, color5 } from '../../config/colors';

export const Nav = styled.nav`
  background: ${color5};
  padding: 1rem;
  gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: ${color1};
  }
`;
