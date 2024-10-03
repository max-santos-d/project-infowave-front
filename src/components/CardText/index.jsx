import P from 'prop-types';
import { TextParagraph, TextTitle } from './style';

export function CardText(props) {
  const { text, limit, isTitle = false } = props;
  let textLimited;

  textLimited = text.length > limit ? `${text.substring(0, limit)} ...` : text;

  return isTitle ? <TextTitle>{textLimited}</TextTitle> : <TextParagraph>{textLimited}</TextParagraph>;
}

CardText.propTypes = {
  text: P.string.isRequired,
  limit: P.number.isRequired,
  isTitle: P.bool,
};
