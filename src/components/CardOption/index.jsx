import React from 'react';
import { FaEdit, FaEllipsisV, FaExclamationCircle } from 'react-icons/fa';
import { FaRectangleXmark } from 'react-icons/fa6';
import { useLocation, useNavigate } from 'react-router-dom';
import P, { object, string } from 'prop-types';
import { toast } from 'react-toastify';
import api from '../../services/axios';

import { ActionButton, ButtonContainer, ConfirmButton, Container, OptionButton } from './style';

export default function CardOptions({ id, information, type }) {
  const [showOptions, setShowOptions] = React.useState(false);
  const [deleteToggle, setDeleteToggle] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleOptions = () => {
    setShowOptions(!showOptions);
    setDeleteToggle(false);
  };

  const handleEditQuestion = () => {
    navigate('/createQuestion', { state: { id, text: information, prevPath: location.pathname } });
  };

  const handleEditPost = () => {
    navigate('/createPost', {
      state: {
        id,
        banner: information.banner,
        title: information.title,
        text: information.text,
        prevPath: location.pathname,
      },
    });
  };

  const handleConfirmDeletePost = async () => {
    try {
      await api.delete(`/post/${id}`);
      toast.success('requisição bem sucessida');
      navigate('/post', { replace: true });
    } catch (err) {
      console.log(err);
      toast.error('erro inesperado ao realizar requisição');
    }
  };

  const handleConfirmDeleteQuestion = async () => {
    try {
      await api.delete(`/question/${id}`);
      toast.success('requisição bem sucessida');
      navigate('/question', { replace: true });
    } catch (err) {
      console.log(err);
      toast.error('erro inesperado ao realizar requisição');
    }
  };

  const handleConfirm = () => {
    setDeleteToggle(true);
  };

  return (
    <Container>
      <OptionButton onClick={toggleOptions}>
        <FaEllipsisV title='opções' size={12} />
      </OptionButton>

      <ButtonContainer $visible={showOptions}>
        <ActionButton onClick={type === 'question' ? handleEditQuestion : handleEditPost}>
          <FaEdit title='editar' size={12} />
        </ActionButton>

        {deleteToggle ? (
          <ConfirmButton onClick={type === 'question' ? handleConfirmDeleteQuestion : handleConfirmDeletePost}>
            <FaExclamationCircle title='confirmar' size={12} />
          </ConfirmButton>
        ) : (
          <ActionButton onClick={handleConfirm}>
            <FaRectangleXmark title='apagar' size={12} />
          </ActionButton>
        )}
      </ButtonContainer>
    </Container>
  );
}

CardOptions.propTypes = {
  information: P.oneOfType([object, string]),
  id: P.string.isRequired,
  type: P.string.isRequired,
};
