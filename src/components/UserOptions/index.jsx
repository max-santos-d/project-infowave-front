import React from 'react';
import { FaAngleDoubleRight, FaEdit, FaPlusCircle, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { ActionButton, ButtonContainer, Container } from './style';
import * as actions from '../../store/modules/auth/actions';

export default function UserOptions() {
  const [showOptions, setShowOptions] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleLogout = () => {
    dispatch(actions.loginFailure());
  };

  const handleEditUser = () => {
    navigate('/editUser');
  };

  const handleNewQuestion = () => {
    navigate('/createQuestion');
  };

  return (
    <Container>
      <button onClick={toggleOptions}>
        <FaAngleDoubleRight title='Opções' size={12} />{' '}
      </button>

      <ButtonContainer $visible={showOptions}>
        <ActionButton onClick={handleLogout}>
          <FaSignOutAlt title='Logout' size={12} />
        </ActionButton>

        <ActionButton onClick={handleEditUser}>
          <FaEdit title='Editar Usuário' size={12} />
        </ActionButton>

        <ActionButton onClick={handleNewQuestion}>
          <FaPlusCircle title='Criar Pergunta' size={12} />
        </ActionButton>
      </ButtonContainer>
    </Container>
  );
}
