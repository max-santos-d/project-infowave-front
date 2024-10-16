import { MainContent } from '../../styles/GlobalStyled';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import React from 'react';

import {
  Button,
  ButtonSection,
  ButtonsHeader,
  ButtonsLikesHeader,
  MyFaUserCircle,
  Options,
  UserContent,
  UserHeader,
} from './style';
import api from '../../services/axios';
import CardPost from '../../components/CardPost';
import CardQuestion from '../../components/CardQuestion';
import UserOptions from '../../components/UserOptions';

export default function User() {
  const user = useSelector((state) => state.auth.user);
  const [posts, setPosts] = React.useState([]);
  const [questions, setQuestions] = React.useState([]);
  const [clickedLikes, setClickedLikes] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleQuestions = async () => {
    try {
      setLoading(true);
      const { response } = await (await api.get('/questionSearchByUser')).data;
      setClickedLikes(false);
      setPosts([]);
      setQuestions(response);
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast.error('Erro ao realizar requisição');
      setClickedLikes(false);
      setLoading(false);
    }
  };

  const handleLikesPosts = async () => {
    try {
      setLoading(true);
      const { response } = await (await api.get('/postLike')).data;
      setQuestions([]);
      setPosts(response);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleLikesQuestions = async () => {
    try {
      setLoading(true);
      const { response } = await (await api.get('/questionLike')).data;
      setPosts([]);
      setQuestions(response);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleLikes = () => {
    setClickedLikes(true);
  };

  React.useEffect(() => {
    handleQuestions();
  }, []);

  return (
    <MainContent>
      <h1>SEU PERFIL</h1>

      <UserHeader>
        <Options>
          <UserOptions />
        </Options>
        {user.avatar ? <img src={user.avatar} alt='' /> : <MyFaUserCircle />}

        <UserContent>
          <p>@{user.username}</p>
        </UserContent>
      </UserHeader>

      <ButtonSection>
        <ButtonsHeader>
          <Button onClick={handleQuestions}>Suas Perguntas</Button>
          <Button onClick={handleLikes}>Suas curtidas</Button>
        </ButtonsHeader>

        <ButtonsLikesHeader $clickedvisible={clickedLikes ? 'true' : undefined}>
          <Button onClick={handleLikesPosts}>Postágens</Button>
          <Button onClick={handleLikesQuestions}>Perguntas</Button>
        </ButtonsLikesHeader>
      </ButtonSection>

      {loading && <p>Carregando...</p>}

      {!loading &&
        posts &&
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

      {!loading && questions
        ? questions.map((question) => (
            <CardQuestion
              key={question._id}
              id={question._id}
              text={question.text}
              user={question.user}
              comments={question.comments}
              likes={question.likes}
              created_at={question.created_at}
            />
          ))
        : !loading && <p>Nada encontrado.</p>}
    </MainContent>
  );
}
