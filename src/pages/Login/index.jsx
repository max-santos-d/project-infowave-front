import React from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';
import { useLocation, useNavigate } from 'react-router-dom';

import { MainContent } from '../../styles/GlobalStyled';
import { Content, CreateUser, Form } from './style';
import * as actions from '../../store/modules/auth/actions';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  const location = useLocation();
  const previousPath = get(location, 'state.previousPath', '/post');
  const text = get(location, 'state.text', '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationLofin = /^\d+$/.test(login);
    let formErrors = false;

    if (!validationLofin) {
      formErrors = true;
      toast.error('login deve conter apenas números');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('senha deve conter entre 6 e 50 caracteres');
    }

    if (formErrors) return;

    dispatch(actions.loginRequest({ login, password, navigate, previousPath, text }));
  };

  return (
    <MainContent>
      <Content>
        <h1>Login</h1>

        <Form onSubmit={handleSubmit}>
          <input
            type='text'
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder={'Informe seu login.'}
          />

          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={'Informe sua senha.'}
          />

          <button type='submit'>Acessar</button>
        </Form>

        <CreateUser to={'/register'}>Criar usuário</CreateUser>
      </Content>
    </MainContent>
  );
}
