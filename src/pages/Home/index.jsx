import React from 'react';
import { MainContent } from '../../styles/GlobalStyled';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import CardPost from '../../components/CardPost';
import PostShow from '../../components/PostShow';
import api from '../../services/axios';

export default function Home() {
  const { id: postID } = useParams();
  const [posts, setPosts] = React.useState([]);
  const [looding, setLooding] = React.useState(false);

  const getAllPost = async () => {
    try {
      setLooding(true);
      const response = await (await api.get('/post')).data.response;
      setPosts(response);
      setLooding(false);
    } catch (err) {
      console.log(err);
      toast.error('Erro de requisição.');
      setLooding(false);
    }
  };

  React.useEffect(() => {
    !postID && getAllPost();
  }, [postID]);

  return (
    <React.Fragment>
      <MainContent>
        <h1>POSTAGENS</h1>
        <br />

        {looding && <p>Carregando...</p>}

        {!looding && !postID && !posts && !posts.length && <p>Nenhum post encontrado!</p>}

        {!looding && postID && <PostShow postID={postID} />}

        {!looding &&
          posts &&
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
