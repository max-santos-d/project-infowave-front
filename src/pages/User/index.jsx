import { MainContent } from '../../styles/GlobalStyled';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../../store/modules/auth/actions';
import { Logout, UserContent, UserHeader } from './style';
import { FaSignOutAlt } from 'react-icons/fa';

export default function User() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(actions.loginFailure());
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
          <FaSignOutAlt size={26} />
        </Logout>
      </UserHeader>

      <button>Suas Perguntas</button>
      <button>Suas curtidas</button>
    </MainContent>
  );
}
