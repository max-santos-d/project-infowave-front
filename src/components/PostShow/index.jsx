import React from 'react';
import { toast } from 'react-toastify';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { Button, CommentsSection, Form, Input, MyFaRegPaperPlane } from './styled';
import CardShow from '../CardShow';
import Comments from '../Comments';
import api from '../../services/axios';
import { MainContent } from '../../styles/GlobalStyled';

export default function PostShow() {
  const { id: postID } = useParams();
  const [post, setPost] = React.useState({});
  const [comments, setComments] = React.useState([]);
  const [commentText, setCommentText] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const getPost = React.useCallback(
    async (postID) => {
      try {
        setLoading(true);
        const { response } = await (await api.get(`/post/${postID}`)).data;
        setPost(response);
        setComments(response.comments);
        setLoading(false);
      } catch (err) {
        console.log(err);
        toast.error('erro ao carregar posts');
        setLoading(false);
        navigate('/', { replace: true });
      }
    },
    [navigate]
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { response } = await (await api.post(`/postMessage/${postID}`, { comment: commentText })).data;
      setComments(response.comments);
      toast.success('comentário realizado');
      setCommentText('');
    } catch (err) {
      console.log(err);
      if (err.status === 401) {
        toast.error('sem autorização para realização requisição, faça ou crie um login');
        return navigate('/auth', { state: { previousPath: location.pathname }, replace: true });
      }
      toast.error('erro inesperado ao comentar.');
    }
  };

  React.useEffect(() => {
    if (!postID) {
      toast.error('post não encontrado');
      navigate('/', { replace: true });
    }
    getPost(postID);
  }, [postID, getPost, navigate]);

  return (
    <MainContent>
      {loading && <p>Carregando...</p>}

      {!loading && (
        <>
          {post._id && (
            <CardShow
              key={post._id}
              id={post._id}
              publication={post.created_at}
              title={post.title}
              text={post.text}
              banner={post.banner}
              likes={post.likes}
            />
          )}

          <CommentsSection>
            {<p>Comentários: {comments.length}</p>}

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

            {comments.length === 0 && <p>Sem comentários!</p>}

            {post.comments &&
              comments.length > 0 &&
              comments.map((comment) => (
                <Comments key={comment._id} text={comment.text} user={comment.user} createdAt={comment.created_at} />
              ))}
          </CommentsSection>
        </>
      )}
    </MainContent>
  );
}
