import React, { useEffect, useState } from 'react';
import P from 'prop-types';
import { FaRegComment, FaRegHeart } from 'react-icons/fa';

import { Container, Header, HeaderContentContent, HeaderContentInteractions, StyledLink } from './styled';
import { CardText } from '../CardText';
import dateFormat from '../../config/dateFormat';
import { useSelector } from 'react-redux';

export default function CardPost({ id, publication, title, text, banner = '', comments, likes }) {
  const publicationDate = dateFormat(publication);
  const user = useSelector((state) => state.auth.user);
  const [userLiked, setUserLiked] = useState('#11111');

  useEffect(() => {
    if (likes.length > 0) {
      likes.map((like) => {
        if (like.user === user._id) {
          setUserLiked('#ff6961');
        }
      });
    }
  }, [id, likes, user._id]);

  console.log(`POST: ${id} | COLOR: ${userLiked}`);

  return (
    <React.Fragment>
      <Container>
        <img src={banner} alt='img' />
        <Header>
          <HeaderContentContent>
            <CardText text={title} limit={35} isTitle={true} />
            <span>Publicado em: {publicationDate}</span>
          </HeaderContentContent>

          <HeaderContentInteractions>
            <section>
              <FaRegComment size={24} />
              <span>{comments.length}</span>
            </section>

            <section>
              <FaRegHeart size={24} color={userLiked} />
              <span>{likes.length}</span>
            </section>
          </HeaderContentInteractions>
        </Header>
        <StyledLink to={`/post/${id}`}>
          <CardText text={text} limit={227} />
        </StyledLink>
      </Container>
    </React.Fragment>
  );
}

CardPost.propTypes = {
  id: P.string.isRequired,
  publication: P.string.isRequired,
  title: P.string,
  text: P.string.isRequired,
  banner: P.string,
  comments: P.array.isRequired,
  likes: P.array.isRequired,
};
