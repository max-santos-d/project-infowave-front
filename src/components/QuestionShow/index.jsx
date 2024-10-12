import React from 'react';
import P from 'prop-types';

import { Button, Form, Input, MyFaRegPaperPlane, CommentsSection } from './styled';
import Comments from '../Comments';
import CardQuestionShow from '../CardQuestionShow';
import api from '../../services/axios';
import { toast } from 'react-toastify';

export default function QuestionShow({ questionID }) {
  const [question, setQuestion] = React.useState({});
  const [comments, setComments] = React.useState([]);
  const [commentText, setCommentText] = React.useState('');

  const getQuestion = async (questionID) => {
    const response = await (await api.get(`/question/${questionID}`)).data.response;
    setQuestion(response);
    setComments(response.comments);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { response } = await (await api.post(`/questionMessage/${questionID}`, { comment: commentText })).data;
      setComments(response.comments);
      toast.success('Comentário realizado');
      setCommentText('');
    } catch (err) {
      console.log(err);
      toast.error('Erro ao comentar.');
    }
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

      <CommentsSection>
        {question._id && <p>Comentários:</p>}

        {question._id && (
          <Form onSubmit={handleSubmit}>
            <Input
              type='text'
              value={commentText}
              onChange={(event) => setCommentText(event.target.value)}
              placeholder='Comentar'
            />

            <Button type='submit'>
              <MyFaRegPaperPlane />
            </Button>
          </Form>
        )}

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
      </CommentsSection>
    </React.Fragment>
  );
}

QuestionShow.propTypes = {
  questionID: P.string,
};
