import React from 'react';
import { useDispatch } from 'react-redux';
import P from 'prop-types';

import { Button, Content, Title } from './styled';
import { MainContent } from '../../styles/GlobalStyled';
import * as exampleActions from '../../store/modules/example/actions';

export default function Card({ title, previousPath }) {
  const dispatch = useDispatch();

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch(exampleActions.clickButtonRequest({ previousPath }));
  };

  return (
    <React.Fragment>
      <MainContent>
        <Title $isRed={true}>
          {title} <small>Your small tittle</small>
        </Title>

        <Content>Lorem ipsum dolor sit amet.</Content>

        <Button onClick={handleClick}>Button</Button>
      </MainContent>
    </React.Fragment>
  );
}

Card.propTypes = {
  title: P.string,
  previousPath: P.string.isRequired,
};
