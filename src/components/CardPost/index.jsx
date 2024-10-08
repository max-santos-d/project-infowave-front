import React from 'react';
import P from 'prop-types';
import { FaRegComment, FaRegHeart } from 'react-icons/fa';

import { Container, Header, HeaderContentContent, HeaderContentInteractions, StyledLink } from './styled';
import { CardText } from '../CardText';
import dateFormat from '../../config/dateFormat';

export default function CardPost({ id, publication, title, text, banner = '', comments, likes }) {
  const publicationDate = dateFormat(publication);

  return (
    <React.Fragment>
      <Container>
        <img src={banner} alt='img' />
        <Header>
          <HeaderContentContent>
            <CardText text={title} limit={35} isTitle={true} />
            <span>Publicado em: {publicationDate}</span>
          </HeaderContentContent>

          <HeaderContentInteractions>
            <section>
              <FaRegComment size={24} />
              <span>{comments}</span>
            </section>

            <section>
              <FaRegHeart size={24} />
              <span>{likes}</span>
            </section>
          </HeaderContentInteractions>
        </Header>
        <StyledLink to={`/post/${id}`}>
          <CardText text={text} limit={227} />
        </StyledLink>
      </Container>
    </React.Fragment>
  );
}

CardPost.propTypes = {
  id: P.string.isRequired,
  publication: P.string.isRequired,
  title: P.string,
  text: P.string.isRequired,
  banner: P.string,
  comments: P.number.isRequired,
  likes: P.number.isRequired,
};
