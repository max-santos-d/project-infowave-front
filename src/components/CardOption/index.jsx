import React from 'react';
import { FaEdit, FaEllipsisV, FaExclamationCircle } from 'react-icons/fa';
import { FaRectangleXmark } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import P from 'prop-types';

import { ActionButton, ButtonContainer, ConfirmButton, Container } from './style';

export default function CardOptions({ text }) {
  const [showOptions, setShowOptions] = React.useState(false);
  const [deleteToggle, setDeleteToggle] = React.useState(false);
  const navigate = useNavigate();

  const toggleOptions = () => {
    setShowOptions(!showOptions);
    setDeleteToggle(false);
  };

  const handleEditUser = () => {
    navigate('/createQuestion', { state: { text: text, action: showOptions } });
  };

  const handleDelete = () => {
    setDeleteToggle(true);
  };

  const handleConfirmDelete = () => {};

  return (
    <Container>
      <ActionButton onClick={toggleOptions}>
        <FaEllipsisV title='Opções' size={12} />{' '}
      </ActionButton>

      <ButtonContainer $visible={showOptions}>
        <ActionButton onClick={handleEditUser}>
          <FaEdit title='Editar' size={12} />
        </ActionButton>

        {deleteToggle ? (
          <ConfirmButton onClick={handleConfirmDelete}>
            <FaExclamationCircle title='Confirmar' size={12} />
          </ConfirmButton>
        ) : (
          <ActionButton onClick={handleDelete}>
            <FaRectangleXmark title='Apagar' size={12} />
          </ActionButton>
        )}
      </ButtonContainer>
    </Container>
  );
}

CardOptions.propTypes = {
  text: P.string.isRequired,
};
