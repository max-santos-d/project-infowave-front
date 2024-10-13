import { MainContent } from '../../styles/GlobalStyled';
import { useDispatch, useSelector } from 'react-redux';
import { FaSignOutAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import React from 'react';

import * as actions from '../../store/modules/auth/actions';
import { Button, ButtonSection, ButtonsHeader, ButtonsLikesHeader, Logout, UserContent, UserHeader } from './style';
import api from '../../services/axios';
import CardPost from '../../components/CardPost';
import CardQuestion from '../../components/CardQuestion';

export default function User() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [posts, setPosts] = React.useState([]);
  const [questions, setQuestions] = React.useState([]);
  const [looding, setLooding] = React.useState(false);
  const [clickedLikes, setClickedLikes] = React.useState(false);

  const handleLogout = () => {
    dispatch(actions.loginFailure());
  };

  const handleQuestions = () => {
    toast.success('Suas perguntas.');
    setClickedLikes(false);
    setPosts([]);
  };

  const handleLikesPosts = async () => {
    try {
      setLooding(true);
      const { response } = await (await api.get('/postLike')).data;
      setQuestions([]);
      setPosts(response);
      setLooding(false);
    } catch (err) {
      console.log(err);
      setLooding(false);
    }
  };

  const handleLikesQuestions = async () => {
    try {
      setLooding(true);
      const { response } = await (await api.get('/questionLike')).data;
      setPosts([]);
      setQuestions(response);
      setLooding(false);
    } catch (err) {
      console.log(err);
      setLooding(false);
    }
  };

  const handleLikes = () => {
    setClickedLikes(true);
  };

  return (
    <MainContent>
      <h1>SEU PERFIL</h1>
      <UserHeader>
        <img src={user.avatar} alt='' />

        <UserContent>
          <p>User: {user.name}</p>
          <p>Username: {user.username}</p>
          <p>E-mail: {user.email}</p>
        </UserContent>

        <Logout onClick={handleLogout}>
          <FaSignOutAlt size={20} />
        </Logout>
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

      {!looding &&
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

      {!looding &&
        questions &&
        questions.map((question) => (
          <CardQuestion
            key={question._id}
            id={question._id}
            text={question.text}
            user={question.user}
            comments={question.comments}
            likes={question.likes}
            created_at={question.created_at}
          />
        ))}
    </MainContent>
  );
}
