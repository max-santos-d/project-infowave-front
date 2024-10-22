import P from 'prop-types';

import { Container, Header, HeaderContentContent, HeaderContentInteractions, StyledLink, TextContent } from './styled';
import { CardText } from '../CardText';
import dateFormat from '../../config/dateFormat';
import LikeButton from '../LikeButton';
import { CommentButton } from '../CommentButton';

export default function CardPost({
  id,
  publication,
  title,
  text,
  banner = '',
  comments = [],
  likes = [],
  fromAdm = false,
}) {
  const publicationDate = dateFormat(publication);

  return (
    <Container>
      <StyledLink to={`/post/${id}`}>{banner && <img src={banner} alt='img' />}</StyledLink>
      <Header>
        <HeaderContentContent>
          <CardText text={title} textSize={1} isTitle={true} />
          <span>Publicado em: {publicationDate}</span>
        </HeaderContentContent>
        <HeaderContentInteractions>
          <div>
            {!fromAdm && (
              <>
                <CommentButton id={id} route={'post'} />
                <span>{comments.length}</span>
              </>
            )}
          </div>
          {!fromAdm && <LikeButton id={id} likes={likes} type={'post'} />}
        </HeaderContentInteractions>
      </Header>

      <TextContent>
        <CardText text={text} type={'post'} />
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
  comments: P.array,
  likes: P.array,
  fromAdm: P.bool,
};
