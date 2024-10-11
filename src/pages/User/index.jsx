import { MainContent } from '../../styles/GlobalStyled';
import { useDispatch } from 'react-redux';

import * as actions from '../../store/modules/auth/actions';
import { CreateUser } from './style';

export default function User() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(actions.loginFailure());
  };

  return (
    <MainContent>
      SEU PERFIL
      <h1>USER NAME</h1>
      <p>@username</p>
      <CreateUser onClick={handleLogout}>Logout</CreateUser>
    </MainContent>
  );
}
