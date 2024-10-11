import React from 'react';
import P from 'prop-types';
import { FaRegComment, FaUserCircle } from 'react-icons/fa';

import { Container, Header, HeaderUser, HeaderContentInteractions, StyledLink, HeaderContent } from './styled';
import { CardText } from '../CardText';
import dateFormat from '../../config/dateFormat';
import LikeButton from '../LikeButton';

export default function CardQuestion({ id, text, user = {}, comments, likes, created_at }) {
  const publicationDate = dateFormat(created_at);

  return (
    <React.Fragment>
      <Container>
        <Header>
          <HeaderUser>
            {user.avatar ? <img src={user.avatar} alt='User avatar' /> : <FaUserCircle size={40} />}

            <HeaderContent>
              {user._id ? <p>{user.username}</p> : <p>Usuário não identificado</p>}
              <span>Publicado em: {publicationDate}</span>
            </HeaderContent>
          </HeaderUser>

          <HeaderContentInteractions>
            <div>
              <FaRegComment size={24} />
              <span>{comments.length}</span>
            </div>

            <LikeButton id={id} likes={likes} type={'question'} />
          </HeaderContentInteractions>
        </Header>

        <StyledLink to={`/question/${id}`}>
          <CardText text={text} limit={227} />
        </StyledLink>
      </Container>
    </React.Fragment>
  );
}

CardQuestion.propTypes = {
  id: P.string.isRequired,
  created_at: P.string.isRequired,
  text: P.string.isRequired,
  comments: P.array.isRequired,
  likes: P.array.isRequired,
  user: P.object,
};
