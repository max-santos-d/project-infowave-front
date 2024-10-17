import P from 'prop-types';

import { Container, Header, HeaderContentContent, HeaderContentInteractions, StyledLink, TextContent } from './styled';
import { CardText } from '../CardText';
import dateFormat from '../../config/dateFormat';
import LikeButton from '../LikeButton';
import { CommentButton } from '../CommentButton';

export default function CardPost({ id, publication, title, text, banner = '', comments, likes }) {
  const publicationDate = dateFormat(publication);

  return (
    <Container>
      {banner && <img src={banner} alt='img' />}
      <Header>
        <HeaderContentContent>
          <CardText text={title} limit={35} isTitle={true} />
          <span>Publicado em: {publicationDate}</span>
        </HeaderContentContent>
        <HeaderContentInteractions>
          <div>
            <CommentButton id={id} route={'post'} />
            <span>{comments.length}</span>
          </div>

          <LikeButton id={id} likes={likes} type={'post'} />
        </HeaderContentInteractions>
      </Header>

      <TextContent>
        <StyledLink to={`/post/${id}`}>
          <CardText text={text} limit={227} type={'post'} />
        </StyledLink>
      </TextContent>
    </Container>
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
