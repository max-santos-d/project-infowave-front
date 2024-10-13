import React from 'react';
import { MainContent } from '../../styles/GlobalStyled';
import { useParams } from 'react-router-dom';

import api from '../../services/axios';
import { Button, CreateQuestion, Form, Input, MyFaRegPaperPlane } from './style';
import CardQuestion from '../../components/CardQuestion';
import QuestionShow from '../../components/QuestionShow';
import CreateQuestionForm from '../../components/CreateQuestionFrom';

export default function Question() {
  const [questions, setQuestions] = React.useState([]);
  const { id: questionID } = useParams();
  const [looding, setLooding] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');
  const [questionCreationChecker, setquestionCreationChecker] = React.useState(false);

  const getAllQuestions = async () => {
    try {
      setLooding(true);
      const { response } = await (await api.get('/question')).data;
      setQuestions(response);
      setLooding(false);
    } catch (err) {
      console.log(err);
      setLooding(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setquestionCreationChecker(false);

    try {
      setLooding(true);
      const { response } = await (await api.get(`/question?searchText=${searchText}`)).data;
      setQuestions(response);
      setLooding(false);
    } catch (err) {
      console.log(err);
      setLooding(false);
    }
  };

  const handleCreateQuestion = (event) => {
    event.preventDefault();
    setquestionCreationChecker(!questionCreationChecker);
  };

  React.useEffect(() => {
    !questionID && !questionCreationChecker && getAllQuestions();
  }, [questionID, questionCreationChecker]);

  return (
    <MainContent>
      {!questionID && <h1>PERGUNTAS</h1>}

      {!looding && !questionID && questionCreationChecker && (
        <>
          <CreateQuestion onClick={handleCreateQuestion}>
            {!questionCreationChecker ? 'Criar Pergunta' : 'Visualizar Perguntas'}
          </CreateQuestion>

          <CreateQuestionForm />
        </>
      )}

      {!questionID && !questionCreationChecker && (
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

      <br />
      {looding && <p>Carregando...</p>}

      {!looding && !questionCreationChecker && !questionID && !questionID && !questions.length && (
        <p>Nenhuma pergunta encontrado!</p>
      )}

      {!looding && !questionCreationChecker && questionID && <QuestionShow questionID={questionID} />}

      {!looding &&
        !questionCreationChecker &&
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
    </MainContent>
  );
}
