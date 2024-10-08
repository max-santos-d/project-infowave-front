import React from 'react';
import P from 'prop-types';

import postService from '../../services/axios/post.service';
import { Button, Form, Input, MyFaRegPaperPlane } from './styled';
import CardShow from '../CardShow';
import Comments from '../Comments';

export default function PostShow({ id }) {
  const [post, setPost] = React.useState({});
  const [comments, setComments] = React.useState([]);

  const getPost = async (id) => {
    return (await postService.getPost(id)).data.response;
  };

  React.useEffect(() => {
    getPost(id).then((response) => {
      console.log(response);
      setPost(response);
      setComments(response.comments);
    });
  }, [id]);

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
          likes={post.likes.length}
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
        post.comments &&
        comments.map((comment) => (
          <Comments key={comment._id} text={comment.text} user={comment.user} createdAt={comment.createdAt} />
        ))}
    </>
  );
}

PostShow.propTypes = {
  id: P.string.isRequired,
};
