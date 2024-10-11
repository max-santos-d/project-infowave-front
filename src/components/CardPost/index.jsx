import React from 'react';
import P from 'prop-types';
import { FaRegComment } from 'react-icons/fa';

import { Container, Header, HeaderContentContent, HeaderContentInteractions, StyledLink } from './styled';
import { CardText } from '../CardText';
import dateFormat from '../../config/dateFormat';
import LikeButton from '../LikeButton';

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
            <div>
              <FaRegComment size={24} />
              <span>{comments.length}</span>
            </div>

            <LikeButton id={id} likes={likes} type={'post'} />
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
  comments: P.array.isRequired,
  likes: P.array.isRequired,
};
