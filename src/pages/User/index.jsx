import { MainContent } from '../../styles/GlobalStyled';
import { useDispatch, useSelector } from 'react-redux';
import { FaSignOutAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import React from 'react';

import * as actions from '../../store/modules/auth/actions';
import { ButtonSection, Logout, UserContent, UserHeader } from './style';
import api from '../../services/axios';
import CardPost from '../../components/CardPost';

export default function User() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [posts, setPosts] = React.useState([]);
  const [looding, setLooding] = React.useState(false);

  const handleLogout = () => {
    dispatch(actions.loginFailure());
  };

  const handleQuestions = () => {
    toast.success('Suas perguntas.');
  };

  const handleLikes = async () => {
    try {
      setLooding(true);
      const { response } = await (await api.get('/postLike')).data;
      setPosts(response);
      console.log(response);
      setLooding(false);
    } catch (err) {
      console.log(err);
      setLooding(false);
    }
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
        <button onClick={handleQuestions}>Suas Perguntas</button>
        <button onClick={handleLikes}>Suas curtidas</button>
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
            comments={post.comments.length}
            likes={post.likes.length}
          />
        ))}
    </MainContent>
  );
}
