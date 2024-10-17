import P from 'prop-types';
import { TextParagraph, TextTitle } from './style';

export function CardText(props) {
  const { text, limit = 0, isTitle = false, type = '' } = props;
  let textLimited = text;

  if (limit !== 0) textLimited = text.length > limit ? `${text.substring(0, limit)} ...` : text;

  return isTitle ? <TextTitle>{textLimited}</TextTitle> : <TextParagraph $type={type}>{textLimited}</TextParagraph>;
}

CardText.propTypes = {
  text: P.string.isRequired,
  limit: P.number,
  isTitle: P.bool,
  type: P.string,
};
