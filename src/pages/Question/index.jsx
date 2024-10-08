import React from 'react';
import { MainContent } from '../../styles/GlobalStyled';

import questionsService from '../../services/axios/questions.service';
import CardQuestion from '../../components/CardQuestion';

export default function Question() {
  const [questions, setQuestions] = React.useState([]);

  const getAllQuestions = async () => {
    const response = (await questionsService.getAllQuestions()).data.response;
    setQuestions(response);
  };

  React.useEffect(() => {
    getAllQuestions();
  }, []);

  return (
    <MainContent>
      {!questions && !questions.length && <p>Nenhuma pergunta encontrado!</p>}

      {questions &&
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
