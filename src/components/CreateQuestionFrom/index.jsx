import React from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { MainContent } from '../../styles/GlobalStyled';
import { Form, Textarea } from './style';
import api from '../../services/axios';

export default function CreateQuestionForm() {
  const [text, setText] = React.useState('');
  const textareaRef = React.useRef(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!text.length) {
      return toast.error('Nenhum texto inserido.');
    }

    try {
      await (
        await api.post('/question', { text })
      ).data;
      setText('');
      toast.success('Pergunta criada.');
      navigate('/question');
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
        <Textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Digite sua pergunta aqui...'
        />

        <button>Criar</button>
      </Form>
    </MainContent>
  );
}
