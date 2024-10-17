import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Container = styled.section`
  position: relative;
  display: flex;
  align-self: flex-end;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid ${colors.color2};
  border-radius: 0.2rem 1.5rem 1rem 1.5rem;
  margin: -0.8rem 0 0 2rem;
  padding: 0.5rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;

  opacity: ${({ $visible }) => ($visible ? '1' : '0')};
  transform: ${({ $visible }) => ($visible ? 'translateX(0)' : 'translateX(-10px)')};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
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
