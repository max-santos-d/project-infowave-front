import React from 'react';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

import { MainContent } from '../../styles/GlobalStyled';
import { Form, Textarea } from './style';
import api from '../../services/axios';
import { get } from 'lodash';

export default function CreatePostForm() {
  const navigate = useNavigate();
  const textareaRef = React.useRef(null);
  const [banner, setBanner] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [text, setText] = React.useState('');

  const location = useLocation();
  const previousPath = get(location, 'state.prevPath', '/post');
  const bannerStorage = get(location, 'state.banner', '');
  const titleStorage = get(location, 'state.title', '');
  const textStorage = get(location, 'state.text', '');
  const idPost = get(location, 'state.id', '');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!text.length || !title.length) return toast.error('Titulo e o campo texto são obrigatórios');

    try {
      if (idPost) {
        await api.patch(`/post/${idPost}`, { banner, title, text });
        toast.success('post atualizado');
        navigate(previousPath);
      } else {
        await api.post('/post', { banner, title, text });
        navigate(previousPath);
        toast.success('pergunta criada');
        navigate('/post');
      }
    } catch (err) {
      console.log(err);
      toast.error('erro ao criar pergunta');
    }
  };

  React.useEffect(() => {
    if (!banner && bannerStorage) setBanner(bannerStorage);
    if (!title && titleStorage) setTitle(titleStorage);
    if (!text && textStorage) setText(textStorage);

    const textarea = textareaRef.current;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [text, banner, title, bannerStorage, titleStorage, textStorage]);

  return (
    <MainContent>
      <Form onSubmit={handleSubmit}>
        <label htmlFor='banner'>
          <input
            type='text'
            value={banner}
            onChange={(event) => setBanner(event.target.value)}
            placeholder='informe a URL da postagem'
          />
        </label>

        <label htmlFor='title'>
          <input
            type='text'
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder='informe o titulo da postagem'
          />
        </label>

        <label htmlFor='text'>
          <Textarea
            ref={textareaRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='digite sua postagem aqui...'
          />
        </label>

        <button>criar</button>
      </Form>
    </MainContent>
  );
}
