import P from 'prop-types';
import { FaUserCircle } from 'react-icons/fa';

import { Container, Header, HeaderContent, HeaderContentInteractions, HeaderUser, TextContent } from './styled';
import { CardText } from '../CardText';
import LikeButton from '../LikeButton';
import CardOptions from '../CardOption';

export default function CardQuestionShow({ id, user = {}, created_at, text, likes }) {
  const data = new Date(created_at);
  const dateForm = data.getDate() + '-' + (data.getMonth() + 1) + '-' + data.getFullYear();

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
          <CardOptions text={text} />
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
  comments: P.number.isRequired,
  likes: P.array.isRequired,
};
