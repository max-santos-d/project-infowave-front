import P from 'prop-types';
import { FaRegComment, FaUserCircle } from 'react-icons/fa';

import { Container, HeaderUser, ContentInteractions, StyledLink, HeaderContent } from './styled';
import { CardText } from '../CardText';
import dateFormat from '../../config/dateFormat';
import LikeButton from '../LikeButton';

export default function CardQuestion({ id, text, user = {}, comments = [], likes = [], created_at, fromAdm = false }) {
  const publicationDate = dateFormat(created_at);

  return (
    <Container>
      <HeaderUser>
        <StyledLink to={`/question/${id}`}>
          <div>
            {user?.avatar ? <img src={user.avatar} alt='User avatar' /> : <FaUserCircle size={40} />}

            <HeaderContent>
              {user?._id ? <p>{user.username}</p> : <p>Usuário não identificado</p>}
              <span>Publicado em: {publicationDate}</span>
            </HeaderContent>
          </div>
        </StyledLink>

        <ContentInteractions>
          <div>
            {!fromAdm > 0 && (
              <>
                <FaRegComment size={18} />
                <span>{comments.length}</span>
              </>
            )}
          </div>
          {!fromAdm && <LikeButton id={id} likes={likes} type={'question'} />}
        </ContentInteractions>
      </HeaderUser>

      <CardText text={text} type={'card'} />
    </Container>
  );
}

CardQuestion.propTypes = {
  id: P.string.isRequired,
  created_at: P.string.isRequired,
  text: P.string.isRequired,
  comments: P.array,
  likes: P.array,
  user: P.object,
  fromAdm: P.bool,
};
