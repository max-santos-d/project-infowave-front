import { MainContent } from '../../styles/GlobalStyled';
import { useDispatch, useSelector } from 'react-redux';
import { FaEdit, FaPlusCircle, FaSignOutAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as actions from '../../store/modules/auth/actions';
import {
  Button,
  ButtonSection,
  ButtonsHeader,
  ButtonsLikesHeader,
  HeaderInteractions,
  UserContent,
  UserHeader,
  UserInfo,
} from './style';
import api from '../../services/axios';
import CardPost from '../../components/CardPost';
import CardQuestion from '../../components/CardQuestion';

export default function User() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [posts, setPosts] = React.useState([]);
  const [questions, setQuestions] = React.useState([]);
  const [clickedLikes, setClickedLikes] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(actions.loginFailure());
  };

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

  const handleNewQuestion = () => {
    navigate('/createQuestion');
  };

  const handleEditUser = () => {
    navigate('/editUser');
  };

  React.useEffect(() => {
    handleQuestions();
  }, []);

  return (
    <MainContent>
      <h1>SEU PERFIL</h1>
      <UserHeader>
        <UserInfo>
          <img src={user.avatar} alt='' />

          <UserContent>
            <p>
              User: <span>{user.name}</span>
            </p>
            <p>
              Username: <span>{user.username}</span>
            </p>
            <p>
              E-mail: <span>{user.email}</span>
            </p>
          </UserContent>
        </UserInfo>

        <HeaderInteractions>
          <button onClick={handleEditUser}>
            <FaEdit size={12} />
          </button>

          <button onClick={handleLogout}>
            <FaSignOutAlt size={12} />
          </button>

          <button onClick={handleNewQuestion}>
            <FaPlusCircle size={12} />
          </button>
        </HeaderInteractions>
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
