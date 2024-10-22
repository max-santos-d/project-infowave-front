import { MainContent } from '../../styles/GlobalStyled';
import { toast } from 'react-toastify';
import React from 'react';

import { Button, ButtonSection } from './style';
import api from '../../services/axios';
import CardPost from '../../components/CardPost';
import CardQuestion from '../../components/CardQuestion';

export default function Adm() {
  const [posts, setPosts] = React.useState([]);
  const [questions, setQuestions] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const handleQuestions = async () => {
    try {
      setLoading(true);
      const { response } = await (await api.get('/admReqForQuestion?report=true')).data;
      setPosts([]);
      setQuestions(response);
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast.error('Erro ao realizar requisição');
      setLoading(false);
    }
  };
  const handlePost = async () => {
    try {
      setLoading(true);
      const { response } = await (await api.get('/admReqForPost?report=true')).data;
      setQuestions([]);
      setPosts(response);
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast.error('Erro ao realizar requisição');
      setLoading(false);
    }
  };

  React.useEffect(() => {
    handleQuestions();
  }, []);

  return (
    <MainContent>
      <h1 style={{ fontSize: '1.3rem' }}>Verificação de Denúncias</h1>
      <ButtonSection>
        <Button onClick={handleQuestions}>Perguntas</Button>
        <Button onClick={handlePost}>Posts</Button>
      </ButtonSection>

      {loading && <p>Carregando...</p>}

      {!loading && (
        <>
          {posts &&
            posts.map((post) => (
              <CardPost
                key={post._id}
                id={post._id}
                publication={post.created_at}
                title={post.title}
                text={post.text}
                banner={post.banner}
                fromAdm={true}
              />
            ))}

          {questions
            ? questions.map((question) => (
                <CardQuestion
                  key={question._id}
                  id={question._id}
                  text={question.text}
                  user={question.user}
                  created_at={question.created_at}
                  fromAdm={true}
                />
              ))
            : !loading && <p>Nada encontrado.</p>}
        </>
      )}
    </MainContent>
  );
}
