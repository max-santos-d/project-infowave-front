import P from 'prop-types';
import { FaUserCircle } from 'react-icons/fa';

import { CommentContent, Header, HeaderContent } from './style';
import dateFormat from '../../config/dateFormat';

export default function Comments({ text, user, createdAt }) {
  const publicationDate = dateFormat(createdAt);

  return (
    <>
      <Header>
        <HeaderContent>
          {user.avatar ? <img src={user.avatar} alt='User avatar' /> : <FaUserCircle size={40} />}

          <div>
            <p>{user.username}</p>
            <span>{publicationDate}</span>
          </div>
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
