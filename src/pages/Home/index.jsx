import React, { useState } from 'react';
import { MainContent } from '../../styles/GlobalStyled';

import Card from '../../components/Card';
import postService from '../../services/axios/post.service';

export default function Home() {
  const [posts, setPosts] = useState([]);

  async function getAllPost() {
    const { response } = (await postService.getAllPost()).data;
    setPosts(response);
  }

  React.useEffect(() => {
    getAllPost();
  }, []);

  return (
    <React.Fragment>
      <MainContent>
        {posts.length &&
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
