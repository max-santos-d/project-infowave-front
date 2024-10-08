import React from 'react';
import { MainContent } from '../../styles/GlobalStyled';
import { useParams } from 'react-router-dom';

import postService from '../../services/axios/post.service';
import Card from '../../components/Card';
import PostShow from '../../components/PostShow';

export default function Home() {
  const { id: postID } = useParams();
  const [posts, setPosts] = React.useState([]);

  const getAllPost = async () => {
    const response = (await postService.getAllPost()).data.response;
    setPosts(response);
  };

  React.useEffect(() => {
    getAllPost();
  }, [postID]);

  return (
    <React.Fragment>
      <MainContent>
        {!postID && !posts && !posts.length && <p>Nenhum post encontrado!</p>}

        {postID && <PostShow id={postID} />}

        {posts &&
          !postID &&
          posts.map((post) => (
            <Card
              key={post._id}
              id={post._id}
              publication={post.created_at}
              title={post.title}
              text={post.text}
              banner={post.banner}
              comments={post.comments}
              likes={post.likes}
            />
          ))}
      </MainContent>
    </React.Fragment>
  );
}
