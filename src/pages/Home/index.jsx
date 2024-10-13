import React from 'react';
import { MainContent } from '../../styles/GlobalStyled';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import CardPost from '../../components/CardPost';
import api from '../../services/axios';
import { Button, Form, Input, MyFaRegPaperPlane } from './styled';

export default function Home() {
  const { id: postID } = useParams();
  const [posts, setPosts] = React.useState([]);
  const [looding, setLooding] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLooding(true);
      const { response } = await (await api.get(`/post?searchText=${searchText}`)).data;
      setPosts(response);
      setLooding(false);
    } catch (err) {
      console.log(err);
      setLooding(false);
    }
  };

  React.useEffect(() => {
    !postID && getAllPost();
  }, [postID]);

  return (
    <MainContent>
      <Form onSubmit={handleSubmit}>
        <Input
          type='text'
          placeholder='Pesquisar'
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />

        <Button type='submit'>
          <MyFaRegPaperPlane />
        </Button>
      </Form>

      <h1>POSTAGENS</h1>
      <br />
      {looding && <p>Carregando...</p>}

      {!looding && !postID && !posts && !posts.length && <p>Nenhum post encontrado!</p>}

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
  );
}
