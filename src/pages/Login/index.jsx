import { useState } from 'react';
import { isEmail } from 'validator';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';
import { useLocation } from 'react-router-dom';

import { MainContent } from '../../styles/GlobalStyled';
import { Form } from './style';
import * as actions from '../../store/modules/auth/actions';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();
  const previousPath = get(location, 'state.previousPath', '/post');

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = false;

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Email inválido');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Senha inválida');
    }

    if (formErrors) return;

    dispatch(actions.loginRequest({ email, password, previousPath }));
  };

  return (
    <MainContent>
      <h1>Login</h1>

      <Form onSubmit={handleSubmit}>
        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder={'Seu e-mail'} />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={'Sua senha'}
        />

        <button type='submit'>Acessar</button>
      </Form>
    </MainContent>
  );
}