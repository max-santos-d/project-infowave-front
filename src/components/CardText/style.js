import styled from 'styled-components';
import * as colors from '../../config/colors';

export const TextParagraph = styled.p`
  text-align: justify;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  word-break: break-word;
  border: 1px solid ${colors.color2};
  border-radius: 0.6rem;
  padding: 0.8rem;
`;

export const TextTitle = styled.h1`
  text-align: justify;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  word-break: break-word;
  border: 1px solid ${colors.color2};
  border-radius: 0.6rem;
  padding: 0.5rem;
`;
