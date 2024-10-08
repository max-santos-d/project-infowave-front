import React from 'react';
import P from 'prop-types';
import { FaRegComment, FaRegHeart, FaUserCircle } from 'react-icons/fa';

import { Container, Header, HeaderContent, HeaderContentInteractions, HeaderUser, StyledLink } from './styled';
import { CardText } from '../CardText';

export default function CardQuestionShow({ id, user = {}, created_at, text, comments, likes }) {
  const data = new Date(created_at);
  const dateForm = data.getDate() + '-' + (data.getMonth() + 1) + '-' + data.getFullYear();

  console.log(user);
  return (
    <React.Fragment>
      <Container>
        <Header>
          <HeaderUser>
            {user.avatar ? <img src={user.avatar} alt='User avatar' /> : <FaUserCircle size={40} />}
            <HeaderContent>
              {user._id ? <p>{user.username}</p> : <p>Usuário não identificado</p>}
              <span>Publicado em: {dateForm}</span>
            </HeaderContent>
          </HeaderUser>

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
  user: P.object,
  created_at: P.string.isRequired,
  title: P.string,
  text: P.string.isRequired,
  banner: P.string,
  comments: P.number.isRequired,
  likes: P.number.isRequired,
};
