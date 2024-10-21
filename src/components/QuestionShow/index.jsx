import React from 'react';
import P from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import { Button, Form, CommentsSection, AutoResizeTextarea } from './styled';
import Comments from '../Comments';
import CardQuestionShow from '../CardQuestionShow';
import api from '../../services/axios';

export default function QuestionShow({ questionID }) {
  const location = useLocation();
  const initialComment = get(location, 'state.text', '');
  const textareaRef = React.useRef(null);
  const [commentText, setCommentText] = React.useState(initialComment);

  const [question, setQuestion] = React.useState({});
  const [comments, setComments] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const getQuestion = React.useCallback(
    async (questionID) => {
      try {
        setLoading(true);
        const response = await (await api.get(`/question/${questionID}`)).data.response;
        setQuestion(response);
        setComments(response.comments);
        setLoading(false);
      } catch (err) {
        console.log(err);
        toast.error('erro ao carregar pergunta');
        setLoading(false);
        navigate('/question', { replace: true });
      }
    },
    [navigate]
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!commentText.length) return toast.error('insira um texto para comentário.');

    try {
      const { response } = await (await api.post(`/questionMessage/${questionID}`, { comment: commentText })).data;
      console.log(response);
      setComments(response.comments);
      toast.success('comentário realizado');
      setCommentText('');

      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    } catch (err) {
      console.log(err);
      if (err.status === 401) {
        toast.error('sem autorização para realização requisição, faça ou crie um login');
        return navigate('/auth', { state: { previousPath: location.pathname, text: commentText }, replace: true });
      }
    }
  };

  const handleFocus = (e) => {
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleChange = (e) => {
    setCommentText(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  React.useEffect(() => {
    if (!questionID) {
      toast.error('pergunta não encontrada');
      navigate('/question', { replace: true });
    }

    getQuestion(questionID);

    setCommentText(initialComment);
  }, [questionID, getQuestion, navigate, initialComment]);

  return (
    <React.Fragment>
      {loading && <p>Carregando...</p>}

      {!loading && (
        <React.Fragment>
          {question._id && (
            <CardQuestionShow
              key={question._id}
              id={question._id}
              user={question.user}
              created_at={question.created_at}
              text={question.text}
              likes={question.likes}
            />
          )}

          <CommentsSection>
            {<p>Comentários: {comments.length}</p>}

            <Form onSubmit={handleSubmit}>
              <AutoResizeTextarea
                ref={textareaRef}
                value={commentText}
                onChange={handleChange}
                onFocus={handleFocus}
                placeholder='Digite seu comentário aqui...'
                rows={1}
              />
              <Button type='submit'>Comentar</Button>
            </Form>

            {comments.length === 0 && <p>Sem comentários!</p>}

            {question.comments &&
              comments.length > 0 &&
              comments.map((comment) => (
                <Comments key={comment._id} text={comment.text} user={comment.user} createdAt={comment.created_at} />
              ))}
          </CommentsSection>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

QuestionShow.propTypes = {
  questionID: P.string,
};
