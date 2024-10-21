import P from 'prop-types';
import React from 'react';

import { TextParagraph } from './style';

export function CardText({ text, limit = 3, isTitle = false, textSize = 0.8, type = '' }) {
  /* Limitador de texto
  let textLimited = text;
  const limit = 24;
  if (limit !== 0) textLimited = text.length > limit ? `${text.substring(0, limit)}` : text; */

  const [expanded, setExpanded] = React.useState(false);

  console.log(limit);
  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <TextParagraph
      $expanded={expanded}
      $limit={limit}
      $isTitle={isTitle}
      onClick={toggleExpansion}
      $textSize={textSize}
      $type={type}
    >
      {text}
    </TextParagraph>
  );
}

CardText.propTypes = {
  text: P.string.isRequired,
  type: P.string,
  limit: P.number,
  isTitle: P.bool,
  textSize: P.number,
};
