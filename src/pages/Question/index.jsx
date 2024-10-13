import React from 'react';
import { MainContent } from '../../styles/GlobalStyled';
import { Link, useParams } from 'react-router-dom';

import api from '../../services/axios';
import { Button, CreateQuestion, Form, Input, MyFaRegPaperPlane } from './style';
import CardQuestion from '../../components/CardQuestion';
import QuestionShow from '../../components/QuestionShow';

export default function Question() {
  const [questions, setQuestions] = React.useState([]);
  const { id: questionID } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');

  const getAllQuestions = async () => {
    try {
      setLoading(true);
      const { response } = await (await api.get('/question')).data;
      setQuestions(response);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    false;

    try {
      setLoading(true);
      const { response } = await (await api.get(`/question?searchText=${searchText}`)).data;
      setQuestions(response);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    !questionID && getAllQuestions();
  }, [questionID]);

  return (
    <MainContent>
      {loading && <p>Carregando...</p>}

      {!loading && !questionID && (
        <Form onSubmit={handleSubmit}>
          <Input
            type='text'
            placeholder='Pesquisar'
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />

          <Button type='submit'>
            <MyFaRegPaperPlane />
          </Button>
        </Form>
      )}

      {!questionID && <h1>PERGUNTAS</h1>}

      {!loading && !questionID && (
        <CreateQuestion>
          <Link to={'/createQuestion'}>{'Criar Pergunta'}</Link>
        </CreateQuestion>
      )}

      {!loading && questionID && <QuestionShow questionID={questionID} />}

      {!loading &&
        questions &&
        !questionID &&
        questions.map((question) => (
          <CardQuestion
            key={question._id}
            id={question._id}
            text={question.text}
            user={question.user}
            comments={question.comments}
            likes={question.likes}
            created_at={question.created_at}
          />
        ))}

      {!loading && !questionID && !questionID && !questions.length && <p>Nenhuma pergunta encontrado!</p>}
    </MainContent>
  );
}
