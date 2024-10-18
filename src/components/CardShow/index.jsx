import React from 'react';
import P from 'prop-types';

import { Container, Header, HeaderContentContent, TextContent } from './styled';
import { CardText } from '../CardText';
import LikeButton from '../LikeButton';

export default function CardShow({ id, publication, title, text, banner = '', likes }) {
  const data = new Date(publication);
  const dateForm = data.getDate() + '-' + (data.getMonth() + 1) + '-' + data.getFullYear();
  return (
    <React.Fragment>
      <Container>
        {banner && <img src={banner} alt='img' />}

        <Header>
          <HeaderContentContent>
            <CardText text={title} isTitle={true} />
            <span>Publicado em: {dateForm}</span>
          </HeaderContentContent>
          <LikeButton id={id} likes={likes} type={'post'} />
        </Header>
        <TextContent>
          <CardText text={text} />
        </TextContent>
      </Container>
    </React.Fragment>
  );
}

CardShow.propTypes = {
  id: P.string.isRequired,
  publication: P.string.isRequired,
  title: P.string,
  text: P.string.isRequired,
  banner: P.string,
  likes: P.array.isRequired,
};
