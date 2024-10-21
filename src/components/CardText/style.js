import styled from 'styled-components';
import * as colors from '../../config/colors';

export const TextParagraph = styled.section`
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => (props.$expanded ? 'unset' : props.$limit)};
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: ${(props) => (props.$expanded ? 'pre-wrap' : 'normal')};
  text-align: justify;
  font-size: ${(props) => `${props.$textSize}rem`};
  border: ${(props) => (props.$type === 'post' || props.$isTitle ? 'none' : `1px solid ${colors.color2}`)};
  border-radius: ${(props) => (props.$type === 'post' || props.$isTitle ? 'none' : '0.6rem')};
  padding: ${(props) => (props.$type === 'post' || props.$isTitle ? 'none' : '0.2rem')};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;
