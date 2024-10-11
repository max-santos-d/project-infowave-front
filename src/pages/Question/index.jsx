import React from 'react';
import { MainContent } from '../../styles/GlobalStyled';
import { useParams } from 'react-router-dom';

import CardQuestion from '../../components/CardQuestion';
import QuestionShow from '../../components/QuestionShow';
import api from '../../services/axios';

export default function Question() {
  const [questions, setQuestions] = React.useState([]);
  const { id: questionID } = useParams();
  const [looding, setLooding] = React.useState(false);

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

  React.useEffect(() => {
    !questionID && getAllQuestions();
  }, [questionID]);

  return (
    <MainContent>
      <h1>PERGUNTAS</h1>
      <br />
      {looding && <p>Carregando...</p>}

      {!looding && !questionID && !questionID && !questions.length && <p>Nenhuma pergunta encontrado!</p>}

      {!looding && questionID && <QuestionShow questionID={questionID} />}

      {!looding &&
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
