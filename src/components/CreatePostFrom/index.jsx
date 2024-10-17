import React from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { MainContent } from '../../styles/GlobalStyled';
import { Form, Textarea } from './style';
import api from '../../services/axios';

export default function CreatePostForm() {
  const navigate = useNavigate();
  const textareaRef = React.useRef(null);
  const [banner, setBanner] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [text, setText] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!text.length || !title.length) {
      console.log(title, text);
      return toast.error('Titulo e o campo texto são obrigatórios');
    }

    try {
      await (
        await api.post('/post', { banner, title, text })
      ).data;
      toast.success('Pergunta criada.');
      navigate('/post');
    } catch (err) {
      console.log(err);
      toast.error('Erro ao criar pergunta.');
    }
  };

  React.useEffect(() => {
    const textarea = textareaRef.current;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [text]);

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
