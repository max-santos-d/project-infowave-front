import React from 'react';
import { MainContent } from '../../styles/GlobalStyled';

export default function Register() {
  return (
    <React.Fragment>
      <MainContent>
        <h1>Crie sua conta:</h1>

        <input type='text' placeholder='Informe seu nome' />
      </MainContent>
    </React.Fragment>
  );
}
