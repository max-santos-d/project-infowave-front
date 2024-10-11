import React from 'react';
import P from 'prop-types';

import { Button, Form, Input, MyFaRegPaperPlane } from './styled';
import CardShow from '../CardShow';
import Comments from '../Comments';
import api from '../../services/axios';

export default function PostShow({ postID }) {
  const [post, setPost] = React.useState({});
  const [comments, setComments] = React.useState([]);

  const getPost = async (postID) => {
    const response = await (await api.get(`/post/${postID}`)).data.response;
    setPost(response);
    setComments(response.comments);
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

      {post._id && (
        <Form action=''>
          <Input type='text' placeholder='Comentar' />

          <Button type='submit'>
            <MyFaRegPaperPlane />
          </Button>
        </Form>
      )}

      {post._id && <p>Comentários:</p>}

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
    </>
  );
}

PostShow.propTypes = {
  postID: P.string.isRequired,
};
