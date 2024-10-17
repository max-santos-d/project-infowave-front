import React from 'react';
import { MainContent } from '../../styles/GlobalStyled';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Button, CreatePost, Form, Input, MyFaRegPaperPlane } from './styled';
import CardPost from '../../components/CardPost';
import api from '../../services/axios';

export default function Home() {
  const { id: postID } = useParams();
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');
  const navigate = useNavigate();

  React.useEffect(() => {
    !postID && getAllPost();
  }, [postID]);

  const getAllPost = async () => {
    try {
      setLoading(true);
      const response = await (await api.get('/post')).data.response;
      setPosts(response);
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast.error('Erro de requisição.');
      setLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      const { response } = await (await api.get(`/post?searchText=${searchText}`)).data;
      setPosts(response);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleNewPost = () => {
    navigate('/createPost');
  };

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
      {loading && <p>Carregando...</p>}

      {!loading && !postID && <CreatePost onClick={handleNewPost}>Criar Postagem</CreatePost>}

      {!loading && !postID && !posts && !posts.length && <p>Nenhum post encontrado!</p>}

      {!loading &&
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
