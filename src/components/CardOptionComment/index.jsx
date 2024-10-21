import React from 'react';
import { FaBan, FaEllipsisV, FaExclamationCircle } from 'react-icons/fa';
import { FaRectangleXmark } from 'react-icons/fa6';
import P from 'prop-types';
import { toast } from 'react-toastify';
//import api from '../../services/axios';

import { ActionButton, ButtonContainer, ConfirmButton, Container, OptionButton } from './style';
import { useSelector } from 'react-redux';

export default function CardOptionsComment({ idCard, idComment, userCard }) {
  const [showOptions, setShowOptions] = React.useState(false);
  const [deleteToggle, setDeleteToggle] = React.useState(false);
  const [banToggle, setBanToggle] = React.useState(false);
  const userStorage = useSelector((state) => state.auth.user);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
    setDeleteToggle(false);
    setBanToggle(false);
  };

  const handleDelete = async () => {
    try {
      toast.success('requisição bem sucessida - delete');
      setShowOptions(!showOptions);
      setDeleteToggle(false);
      setBanToggle(false);
    } catch (err) {
      console.log(err);
      toast.error('erro inesperado ao realizar requisição');
    }
  };

  const handleBan = async () => {
    try {
      console.log(idCard);
      console.log(idComment);
      toast.success('requisição bem sucessida - ban');
      setShowOptions(!showOptions);
      setDeleteToggle(false);
      setBanToggle(false);
    } catch (err) {
      console.log(err);
      toast.error('erro inesperado ao realizar requisição');
    }
  };

  const handleConfirmDelete = () => {
    setDeleteToggle(true);
  };

  const handleConfirmBan = () => {
    setBanToggle(true);
  };

  return (
    <Container>
      <OptionButton onClick={toggleOptions}>
        <FaEllipsisV title='opções' size={12} />
      </OptionButton>

      <ButtonContainer $visible={showOptions}>
        {banToggle ? (
          <ConfirmButton onClick={handleBan}>
            <FaExclamationCircle title='confirmar' size={12} />
          </ConfirmButton>
        ) : (
          <ActionButton onClick={handleConfirmBan}>
            <FaBan title='reportar' size={12} />
          </ActionButton>
        )}

        {userStorage._id === userCard._id &&
          (deleteToggle ? (
            <ConfirmButton onClick={handleDelete}>
              <FaExclamationCircle title='confirmar' size={12} />
            </ConfirmButton>
          ) : (
            <ActionButton onClick={handleConfirmDelete}>
              <FaRectangleXmark title='apagar' size={12} />
            </ActionButton>
          ))}
      </ButtonContainer>
    </Container>
  );
}

CardOptionsComment.propTypes = {
  idCard: P.string.isRequired,
  idComment: P.string.isRequired,
  userCard: P.object.isRequired,
};
