import React from 'react';
import P from 'prop-types';

import postService from '../../services/axios/post.service';
import CardShow from '../CardShow';

export default function PostIndex({ id = '' }) {
  const [post, setPost] = React.useState({});
  const [comments, setComments] = React.useState([]);

  const getPost = async (id) => {
    return (await postService.getPost(id)).data.response;
  };

  React.useEffect(() => {
    getPost(id).then((response) => {
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

      <p>Comentários:</p>

      <br />

      {comments.length && post.comments && comments.map((comment) => <p key={comment._id}>{comment.text}</p>)}
    </>
  );
}

PostIndex.propTypes = {
  id: P.string.isRequired,
};
