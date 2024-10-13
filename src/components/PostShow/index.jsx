import React from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

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

  const getPost = async (postID) => {
    try {
      setLoading(true);
      const { response } = await (await api.get(`/post/${postID}`)).data;
      setPost(response);
      setComments(response.comments);
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast.error('Erro ao carregar posts');
      setLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { response } = await (await api.post(`/postMessage/${postID}`, { comment: commentText })).data;
      setComments(response.comments);
      toast.success('Comentário realizado');
      setCommentText('');
    } catch (err) {
      console.log(err);
      toast.error('Erro ao comentar.');
    }
  };

  React.useEffect(() => {
    postID && getPost(postID);
  }, [postID]);

  return (
    <MainContent>
      {loading && <p>Carregando...</p>}

      {!loading && post._id && (
        <CardShow
          key={post._id}
          id={post._id}
          publication={post.created_at}
          title={post.title}
          text={post.text}
          banner={post.banner}
          comments={post.comments.length}
          likes={post.likes}
        />
      )}

      <CommentsSection>
        {!loading && post._id && <p>Comentários:</p>}

        {!loading && post._id && (
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

        {!loading && comments.length === 0 && (
          <>
            <br /> <p>Sem comentários!</p>
          </>
        )}

        {!loading &&
          comments.length > 0 &&
          post.comments &&
          comments.map((comment) => (
            <Comments key={comment._id} text={comment.text} user={comment.user} createdAt={comment.createdAt} />
          ))}
      </CommentsSection>
    </MainContent>
  );
}
