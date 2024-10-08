import React from 'react';
import P from 'prop-types';

import { Button, Form, Input, MyFaRegPaperPlane } from './styled';
import Comments from '../Comments';
import questionsService from '../../services/axios/questions.service';
import CardQuestionShow from '../CardQuestionShow';

export default function QuestionShow({ id }) {
  const [question, setQuestion] = React.useState({});
  const [comments, setComments] = React.useState([]);

  const getQuestion = async (id) => {
    return (await questionsService.getQuestion(id)).data.response;
  };

  React.useEffect(() => {
    getQuestion(id).then((response) => {
      setQuestion(response);
      setComments(response.comments);
    });
  }, [id]);

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
          likes={question.likes.length}
        />
      )}

      <Form action=''>
        <Input type='text' placeholder='Comentar' />

        <Button type='submit'>
          <MyFaRegPaperPlane />
        </Button>
      </Form>

      <br />
      <p>Comentários:</p>
      <br />

      {comments.length === 0 && <p>Sem comentários!</p>}

      {comments.length > 0 &&
        question.comments &&
        comments.map((comment) => (
          <Comments key={comment._id} text={comment.comment} user={comment.user} createdAt={comment.createdAt} />
        ))}
    </React.Fragment>
  );
}

QuestionShow.propTypes = {
  id: P.string,
};
