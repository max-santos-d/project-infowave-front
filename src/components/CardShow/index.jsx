import React from 'react';
import P from 'prop-types';

import { Container, Header, HeaderContentContent, TextContent } from './styled';
import { CardText } from '../CardText';
import LikeButton from '../LikeButton';
import CardOptions from '../CardOption';
import { useSelector } from 'react-redux';

export default function CardShow({ id, publication, title, text, banner = '', likes }) {
  const data = new Date(publication);
  const dateForm = data.getDate() + '-' + (data.getMonth() + 1) + '-' + data.getFullYear();
  const userType = useSelector((state) => state.auth.user.userType);
  const verify = userType && userType.filter((types) => types.type === 'organization').length ? true : false;

  return (
    <React.Fragment>
      <Container>
        {banner && <img src={banner} alt='img' />}

        <Header>
          <HeaderContentContent>
            <CardText text={title} textSize={1} isTitle={true} />
            <span>Publicado em: {dateForm}</span>
          </HeaderContentContent>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {verify && <CardOptions id={id} information={{ text, title, banner }} type={'post'} />}
            <LikeButton id={id} likes={likes} type={'post'} />
          </div>
        </Header>
        <TextContent>
          <CardText text={text} type={'post'} />
        </TextContent>
      </Container>
    </React.Fragment>
  );
}

CardShow.propTypes = {
  id: P.string.isRequired,
  publication: P.string.isRequired,
  title: P.string,
  text: P.string.isRequired,
  banner: P.string,
  likes: P.array.isRequired,
};
