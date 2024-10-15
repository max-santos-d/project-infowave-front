import React from 'react';
import { MainContent } from '../../styles/GlobalStyled';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useNavigate } from 'react-router-dom';
import { get } from 'lodash';

import { Form } from './style';
import api from '../../services/axios';

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [avatar, setAvatar] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const urlValidation = (url) => {
    try {
      new URL(url);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let formErrors = true;

    if (name.length < 3 || name.length > 255) {
      formErrors = true;
      toast.error('Nome deve conter entre 3 e 255 caracteres.');
    }

    if (username.length < 3 || username.length > 100) {
      formErrors = true;
      toast.error('Nome deve conter entre 3 e 255 caracteres.');
    }

    if (avatar) {
      if (!urlValidation(avatar)) {
        formErrors = false;
        toast.error('URL inválida.');
      }
    }
    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido.');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Senha deve conter entre 6 e 50 caracteres.');
    }

    if (!formErrors) return;

    try {
      await api.post('/user', { name, username, avatar, email, password });
      toast.success('Usuário criado com sucesso.');
      navigate('/auth', { replace: true });
    } catch (err) {
      console.log(err);
      const error = get(err, 'response.data.responseError', '');
      toast.error(error);
    }
  };
  return (
    <MainContent>
      <h1>Crie sua conta</h1>

      <Form onSubmit={handleSubmit}>
        <label htmlFor='name'>
          Nome:
          <input
            type='text'
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder='Informe seu nome'
          />
        </label>

        <label htmlFor='username'>
          Username:
          <input
            type='text'
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder='Informe seu username'
          />
        </label>

        <label htmlFor='avatar'>
          Avatar:
          <input
            type='text'
            value={avatar}
            onChange={(event) => setAvatar(event.target.value)}
            placeholder='Informe o link para uma imagem que será seu avatar'
          />
        </label>

        <label htmlFor='email'>
          E-mail:
          <input
            type='email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder='Informe seu e-mail'
          />
        </label>

        <label htmlFor='password'>
          Senha:
          <input
            type='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder='Informe sua senha'
          />
        </label>

        <button>Salvar</button>
      </Form>
    </MainContent>
  );
}
