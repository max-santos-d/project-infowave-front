import React from 'react';
import P from 'prop-types';

import { Container, Header, HeaderContentContent, HeaderContentInteractions } from './styled';
import { FaRegComment, FaRegHeart } from 'react-icons/fa';

export default function Card({ id, publication, title, text, banner = '', comments, likes }) {
  const data = new Date(publication);
  const dateForm = data.getDate() + '-' + (data.getMonth() + 1) + '-' + data.getFullYear();

  return (
    <React.Fragment>
      {id}
      <Container>
        <img src={banner} alt='img' />

        <Header>
          <HeaderContentContent>
            <h1>{title}</h1>
            <span>Publicado em: {dateForm}</span>
          </HeaderContentContent>

          <HeaderContentInteractions>
            <section>
              <FaRegComment size={26} />
              <span>{comments}</span>
            </section>

            <section>
              <FaRegHeart size={26} />
              <span>{likes}</span>
            </section>
          </HeaderContentInteractions>
        </Header>
        <p>{text}</p>
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
