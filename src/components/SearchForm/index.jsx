import React, { useState } from 'react';
import P from 'prop-types';

import { Button, Form, Input, MyFaRegPaperPlane } from './style';

export default function SearchForm({ typeSearch }) {
  const [search, setSearch] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    switch (typeSearch) {
      case 'post':
        console.log('post');
        break;
      case 'question':
        console.log('question');
        break;
      default:
        console.log('erro!');
        break;
    }
  };
  return (
    <React.Fragment>
      <Form onSubmit={handleSubmit}>
        <Input type='text' placeholder='Pesquisar' value={search} onChange={(event) => setSearch(event.target.value)} />

        <Button type='submit'>
          <MyFaRegPaperPlane />
        </Button>
      </Form>
    </React.Fragment>
  );
}

SearchForm.propTypes = {
  typeSearch: P.string.isRequired,
};
