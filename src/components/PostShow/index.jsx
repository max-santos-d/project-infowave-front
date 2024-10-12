import React from 'react';
import P from 'prop-types';
import { toast } from 'react-toastify';

import { Button, CommentsSection, Form, Input, MyFaRegPaperPlane } from './styled';
import CardShow from '../CardShow';
import Comments from '../Comments';
import api from '../../services/axios';

export default function PostShow({ postID }) {
  const [post, setPost] = React.useState({});
  const [comments, setComments] = React.useState([]);
  const [commentText, setCommentText] = React.useState('');

  const getPost = async (postID) => {
    const { response } = await (await api.get(`/post/${postID}`)).data;
    setPost(response);
    setComments(response.comments);
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
    <>
      {post._id && (
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
        {post._id && <p>Comentários:</p>}

        {post._id && (
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
          post.comments &&
          comments.map((comment) => (
            <Comments key={comment._id} text={comment.text} user={comment.user} createdAt={comment.createdAt} />
          ))}
      </CommentsSection>
    </>
  );
}

PostShow.propTypes = {
  postID: P.string.isRequired,
};
