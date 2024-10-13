import React from 'react';
import { toast } from 'react-toastify';
import { Form, Textarea } from './style';
import api from '../../services/axios';
import { useNavigate } from 'react-router-dom';

export default function CreateQuestionForm() {
  const [text, setText] = React.useState('');
  const navigate = useNavigate();
  const textareaRef = React.useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!text.length) {
      return toast.error('Nenhum texto inserido.');
    }

    try {
      await (
        await api.post('/question', { text })
      ).data;
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
    <>
      <Form onSubmit={handleSubmit}>
        <Textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Digite sua pergunta aqui...'
        />

        <button>Criar</button>
      </Form>
    </>
  );
}
