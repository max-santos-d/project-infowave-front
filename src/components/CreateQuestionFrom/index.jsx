import React from 'react';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { get } from 'lodash';

import { MainContent } from '../../styles/GlobalStyled';
import { Form, Textarea } from './style';
import api from '../../services/axios';

export default function CreateQuestionForm() {
  const [text, setText] = React.useState('');
  const textareaRef = React.useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const previousPath = get(location, 'state.prevPath', '/question');
  const textStorage = get(location, 'state.text', '');
  const idQuestion = get(location, 'state.id', '');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!text.length) return toast.error('Nenhum texto inserido.');

    try {
      if (idQuestion) {
        await api.patch(`/question/${idQuestion}`, { text });
        toast.success('pergunta atualizada.');
        navigate(previousPath);
      } else {
        await (
          await api.post('/question', { text })
        ).data;
        setText('');
        toast.success('pergunta criada.');
        navigate('/question');
      }
    } catch (err) {
      console.log(err);
      toast.error('erro ao criar pergunta.');
    }
  };

  React.useEffect(() => {
    if (!text && textStorage) setText(textStorage);
    const textarea = textareaRef.current;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [text, textStorage]);

  return (
    <MainContent>
      <Form onSubmit={handleSubmit}>
        <Textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Digite sua pergunta aqui...'
        />

        <button>salvar</button>
      </Form>
    </MainContent>
  );
}
