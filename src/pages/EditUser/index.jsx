import React from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

import { Form } from './style';
import { MainContent } from '../../styles/GlobalStyled';
import { useSelector } from 'react-redux';
import * as actions from '../../store/modules/auth/actions';

export default function EditUser() {
  const {
    name: nameStorage,
    username: usarnameStorage,
    avatar: avatarStorage,
    login: loginStorage,
  } = useSelector((state) => state.auth?.user._id && state.auth.user);
  const [name, setName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [avatar, setAvatar] = React.useState('');
  const dispatch = useDispatch();

  React.useEffect(() => {
    setName(nameStorage);
    setUsername(usarnameStorage);
    avatarStorage && setAvatar(avatarStorage);
  }, [nameStorage, usarnameStorage, avatarStorage, loginStorage]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let formErrors = true;

    if (name.length < 3 || name.length > 255) {
      formErrors = true;
      toast.error('Nome deve conter entre 3 e 255 caracteres.');
    }

    if (username.length < 3 || username.length > 15) {
      formErrors = true;
      toast.error('Nome deve conter entre 3 e 10 caracteres.');
    }

    if (avatar) {
      if (!urlValidation(avatar)) {
        formErrors = false;
        toast.error('URL inválida.');
      }
    }

    if (!formErrors) return;

    let nameEdited;
    let usernameEdited;
    let avatarEdited;
    let emailEdited;

    name !== nameStorage ? (nameEdited = name) : (nameEdited = undefined);
    username !== usarnameStorage ? (usernameEdited = username) : (usernameEdited = undefined);
    avatar !== avatarStorage ? (avatarEdited = avatar) : (avatarEdited = undefined);

    if (!nameEdited && !usernameEdited && !avatarEdited && !emailEdited)
      return toast.info('Nenhum valor informado foi alterado');

    dispatch(actions.editUserRequest({ nameEdited, usernameEdited, avatarEdited, emailEdited }));
  };

  const urlValidation = (url) => {
    try {
      new URL(url);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  return (
    <MainContent>
      <h1>Edite suas informações</h1>

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

        <label htmlFor='login'>
          Login:
          <input type='text' value={loginStorage} readOnly />
        </label>

        <button>Salvar</button>
      </Form>
    </MainContent>
  );
}
