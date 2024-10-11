import React from 'react';
import P from 'prop-types';

import { Button, Form, Input, MyFaRegPaperPlane } from './styled';
import Comments from '../Comments';
import CardQuestionShow from '../CardQuestionShow';
import api from '../../services/axios';

export default function QuestionShow({ questionID }) {
  const [question, setQuestion] = React.useState({});
  const [comments, setComments] = React.useState([]);

  const getQuestion = async (questionID) => {
    const response = await (await api.get(`/question/${questionID}`)).data.response;
    setQuestion(response);
    setComments(response.comments);
  };

  React.useEffect(() => {
    questionID && getQuestion(questionID);
  }, [questionID]);

  return (
    <React.Fragment>
      {question._id && (
        <CardQuestionShow
          key={question._id}
          id={question._id}
          user={question.user}
          created_at={question.created_at}
          text={question.text}
          comments={question.comments.length}
          likes={question.likes}
        />
      )}

      {question._id && (
        <Form action=''>
          <Input type='text' placeholder='Comentar' />

          <Button type='submit'>
            <MyFaRegPaperPlane />
          </Button>
        </Form>
      )}

      {question._id && <p>Comentários:</p>}

      {comments.length === 0 && (
        <>
          <br /> <p>Sem comentários!</p>
        </>
      )}

      {comments.length > 0 &&
        question.comments &&
        comments.map((comment) => (
          <Comments key={comment._id} text={comment.comment} user={comment.user} createdAt={comment.createdAt} />
        ))}
    </React.Fragment>
  );
}

QuestionShow.propTypes = {
  questionID: P.string,
};
