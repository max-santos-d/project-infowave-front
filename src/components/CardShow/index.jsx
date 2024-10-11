import React from 'react';
import P from 'prop-types';
import { FaRegComment } from 'react-icons/fa';

import { Container, Header, HeaderContentContent, HeaderContentInteractions, StyledLink } from './styled';
import { CardText } from '../CardText';
import LikeButton from '../LikeButton';

export default function CardShow({ id, publication, title, text, banner = '', comments, likes }) {
  const data = new Date(publication);
  const dateForm = data.getDate() + '-' + (data.getMonth() + 1) + '-' + data.getFullYear();
  return (
    <React.Fragment>
      <Container>
        <img src={banner} alt='img' />

        <Header>
          <HeaderContentContent>
            <CardText text={title} isTitle={true} />
            <span>Publicado em: {dateForm}</span>
          </HeaderContentContent>

          <HeaderContentInteractions>
            <section>
              <FaRegComment size={24} />
              <span>{comments}</span>
            </section>

            <LikeButton id={id} likes={likes} type={'post'} />
          </HeaderContentInteractions>
        </Header>
        <StyledLink to={`/post/${id}`}>
          <CardText text={text} />
        </StyledLink>
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
  comments: P.number.isRequired,
  likes: P.array.isRequired,
};
