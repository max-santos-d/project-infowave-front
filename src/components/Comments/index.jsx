import P from 'prop-types';
import { FaUserCircle } from 'react-icons/fa';
import dateFormat from '../../config/dateFormat';
import { CommentContent, Header, HeaderContent } from './style';

export default function Comments({ text, user, createdAt }) {
  const publicationDate = dateFormat(createdAt);

  return (
    <>
      <Header>
        {user.avatar ? <img src={user.avatar} alt='User avatar' /> : <FaUserCircle size={40} />}

        <HeaderContent>
          <p>{user.username}</p>
          <span>{publicationDate}</span>
        </HeaderContent>
      </Header>

      <CommentContent>{text}</CommentContent>
    </>
  );
}

Comments.propTypes = {
  text: P.string.isRequired,
  user: P.object.isRequired,
  createdAt: P.string.isRequired,
};
