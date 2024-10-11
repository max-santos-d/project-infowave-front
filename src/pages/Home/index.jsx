import React from 'react';
import { MainContent } from '../../styles/GlobalStyled';
import { useParams } from 'react-router-dom';

import CardPost from '../../components/CardPost';
import PostShow from '../../components/PostShow';
import api from '../../services/axios';

export default function Home() {
  const { id: postID } = useParams();
  const [posts, setPosts] = React.useState([]);

  const getAllPost = async () => {
    const response = await (await api.get('/post')).data.response;
    setPosts(response);
  };

  React.useEffect(() => {
    !postID && getAllPost();
  }, [postID]);

  return (
    <React.Fragment>
      <MainContent>
        {!postID && !posts && !posts.length && <p>Nenhum post encontrado!</p>}

        {postID && <PostShow postID={postID} />}

        {posts &&
          !postID &&
          posts.map((post) => (
            <CardPost
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
