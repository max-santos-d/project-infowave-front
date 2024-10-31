import P from 'prop-types';
import { FaRegComment, FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { Container, HeaderUser, ContentInteractions, StyledLink, HeaderContent } from './styled';
import { CardText } from '../CardText';
import dateFormat from '../../config/dateFormat';
import LikeButton from '../LikeButton';

export default function CardQuestion({ id, text, user = {}, comments = [], likes = [], created_at, fromAdm = false }) {
  const publicationDate = dateFormat(created_at);
  const navigate = useNavigate();

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
              <div onClick={() => navigate(`/question/${id}`)} style={{ cursor: 'pointer' }}>
                <FaRegComment size={18} />
                <span>{comments.length}</span>
              </div>
            )}
          </div>
          {!fromAdm && <LikeButton id={id} likes={likes} type={'question'} />}
        </ContentInteractions>
      </HeaderUser>

      <CardText text={text} type={'post'} />
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
