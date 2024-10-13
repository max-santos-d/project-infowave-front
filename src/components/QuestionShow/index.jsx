import React from 'react';
import P from 'prop-types';

import { Button, Form, MyFaRegPaperPlane, CommentsSection, Textarea } from './styled';
import Comments from '../Comments';
import CardQuestionShow from '../CardQuestionShow';
import api from '../../services/axios';
import { toast } from 'react-toastify';

export default function QuestionShow({ questionID }) {
  const [question, setQuestion] = React.useState({});
  const [comments, setComments] = React.useState([]);
  //const [commentText, setCommentText] = React.useState('');

  const [commentText, setCommentText] = React.useState('');
  const textareaRef = React.useRef(null);

  const getQuestion = async (questionID) => {
    const response = await (await api.get(`/question/${questionID}`)).data.response;
    setQuestion(response);
    setComments(response.comments);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!commentText.length) return toast.error('insira um texto para comentário.');

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

    if (question._id) {
      const textarea = textareaRef.current;
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [questionID, commentText, question._id]);

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
            <Textarea
              ref={textareaRef}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder='Digite sua pergunta aqui...'
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
