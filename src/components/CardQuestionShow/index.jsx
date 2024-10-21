import P from 'prop-types';
import { FaUserCircle } from 'react-icons/fa';

import { Container, Header, HeaderContent, HeaderContentInteractions, HeaderUser, TextContent } from './styled';
import { CardText } from '../CardText';
import LikeButton from '../LikeButton';
import CardOptions from '../CardOption';
import { useSelector } from 'react-redux';
import { get } from 'lodash';

export default function CardQuestionShow({ id, user = {}, created_at, text, likes }) {
  const data = new Date(created_at);
  const dateForm = data.getDate() + '-' + (data.getMonth() + 1) + '-' + data.getFullYear();

  const authState = useSelector((state) => state.auth);
  const userStorage = get(authState, 'user', '{}');
  const verifyUserLogged = userStorage && true;

  return (
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
          {verifyUserLogged && <CardOptions userCard={user} information={text} id={id} type={'question'} />}
          <LikeButton id={id} likes={likes} type={'question'} />
        </HeaderContentInteractions>
      </Header>
      <TextContent>
        <CardText text={text} />
      </TextContent>
    </Container>
  );
}

CardQuestionShow.propTypes = {
  id: P.string.isRequired,
  user: P.object,
  created_at: P.string.isRequired,
  title: P.string,
  text: P.string.isRequired,
  banner: P.string,
  likes: P.array.isRequired,
};
