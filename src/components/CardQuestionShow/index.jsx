import React from 'react';
import P from 'prop-types';
import { FaRegComment, FaRegHeart } from 'react-icons/fa';

import { Container, Header, HeaderContentContent, HeaderContentInteractions, StyledLink } from './styled';
import { CardText } from '../CardText';

export default function CardQuestionShow({ id, publication, title, text, banner = '', comments, likes }) {
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

            <section>
              <FaRegHeart size={24} />
              <span>{likes}</span>
            </section>
          </HeaderContentInteractions>
        </Header>
        <StyledLink to={`/post/${id}`}>
          <CardText text={text} />
        </StyledLink>
      </Container>
    </React.Fragment>
  );
}

CardQuestionShow.propTypes = {
  id: P.string.isRequired,
  publication: P.string.isRequired,
  title: P.string,
  text: P.string.isRequired,
  banner: P.string,
  comments: P.number.isRequired,
  likes: P.number.isRequired,
};
