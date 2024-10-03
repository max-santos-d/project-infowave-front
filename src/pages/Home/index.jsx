import React, { useState } from 'react';
import { MainContent } from '../../styles/GlobalStyled';

import responseBD from '../../services/Data';
import Card from '../../components/Card';

export default function Home() {
  const [posts, setPosts] = useState([]);

  React.useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = responseBD.response;
    setPosts(response);
  }

  return (
    <React.Fragment>
      <MainContent>
        {posts.map((post) => (
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
