import React from 'react';
import P from 'prop-types';
import { FaRegComment, FaRegHeart } from 'react-icons/fa';

import { Container, Header, HeaderContentContent, HeaderContentInteractions } from './styled';
import { CardText } from '../CardText';

export default function Card({ id, publication, title, text, banner = '', comments, likes }) {
  const data = new Date(publication);
  const dateForm = data.getDate() + '-' + (data.getMonth() + 1) + '-' + data.getFullYear();

  return (
    <React.Fragment>
      <Container>
        <img src={banner} alt='img' />
        {id}

        <Header>
          <HeaderContentContent>
            <CardText text={title} limit={35} isTitle={true} />
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
        <CardText text={text} limit={227} />
      </Container>
    </React.Fragment>
  );
}

Card.propTypes = {
  id: P.string.isRequired,
  publication: P.string.isRequired,
  title: P.string,
  text: P.string.isRequired,
  banner: P.string,
  comments: P.number.isRequired,
  likes: P.number.isRequired,
};
