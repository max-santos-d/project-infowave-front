import React from 'react';
import { MainContent } from '../../styles/GlobalStyled';
import { useParams } from 'react-router-dom';

import CardQuestion from '../../components/CardQuestion';
import QuestionShow from '../../components/QuestionShow';
import api from '../../services/axios';

export default function Question() {
  const [questions, setQuestions] = React.useState([]);
  const { id: questionID } = useParams();

  const getAllQuestions = async () => {
    const response = await (await api.get('/question')).data.response;
    setQuestions(response);
  };

  React.useEffect(() => {
    !questionID && getAllQuestions();
  }, [questionID]);

  return (
    <MainContent>
      {!questionID && !questionID && !questions.length && <p>Nenhuma pergunta encontrado!</p>}

      {questionID && <QuestionShow questionID={questionID} />}

      {questions &&
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
