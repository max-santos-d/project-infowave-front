import styled from 'styled-components';
import * as colors from '../../config/colors';

export const TextParagraph = styled.p`
  text-align: justify;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  word-break: break-word;
  border: ${(props) => (props.$type === 'post' ? 'none' : `1px solid ${colors.color2}`)};
  border-radius: ${(props) => (props.$type === 'post' ? 'none' : '0.6rem')};
  padding: ${(props) => (props.$type === 'post' ? 'none' : '0.8rem')};
`;

export const TextTitle = styled.h1`
  text-align: justify;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  word-break: break-word;
`;
