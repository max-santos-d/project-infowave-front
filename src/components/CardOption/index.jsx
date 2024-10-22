import React from 'react';
import { FaBan, FaEdit, FaEllipsisV, FaExclamationCircle } from 'react-icons/fa';
import { FaRectangleXmark } from 'react-icons/fa6';
import { useLocation, useNavigate } from 'react-router-dom';
import P, { object, string } from 'prop-types';
import { toast } from 'react-toastify';
import api from '../../services/axios';
import { useSelector } from 'react-redux';
import { get } from 'lodash';

import { ActionButton, ButtonContainer, ConfirmButton, Container, OptionButton } from './style';

export default function CardOptions({ id, userCard = {}, information, type }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [showOptions, setShowOptions] = React.useState(false);
  const [deleteToggle, setDeleteToggle] = React.useState(false);
  const [banToggle, setBanToggle] = React.useState(false);
  const authState = useSelector((state) => state.auth);
  const userStorage = get(authState, 'user', '{}');

  const userType = useSelector((state) => state.auth.user.userType);

  const verifyUser = userStorage._id === userCard._id;
  const verifyOrganization =
    userType && userType.filter((types) => types.type === 'organization').length ? true : false;

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

  const handleBanQuestion = async () => {
    try {
      await api.patch(`/report/question/${id}`);
      toast.success('requisição bem sucessida - ban');
      setShowOptions(!showOptions);
      setDeleteToggle(false);
      setBanToggle(false);
    } catch (err) {
      console.log(err);
      toast.error('erro inesperado ao realizar requisição');
    }
  };

  const handleBanPost = async () => {
    try {
      toast.success('requisição bem sucessida - ban');
      setShowOptions(!showOptions);
      setDeleteToggle(false);
      setBanToggle(false);
    } catch (err) {
      console.log(err);
      toast.error('erro inesperado ao realizar requisição');
    }
  };

  const handleConfirm = () => {
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
        {type === 'post' && (
          <>
            {verifyOrganization ? (
              <>
                <ActionButton onClick={handleEditPost}>
                  <FaEdit title='editar' size={12} />
                </ActionButton>

                {deleteToggle ? (
                  <ConfirmButton onClick={handleConfirmDeletePost}>
                    <FaExclamationCircle title='confirmar' size={12} />
                  </ConfirmButton>
                ) : (
                  <ActionButton onClick={handleConfirm}>
                    <FaRectangleXmark title='apagar' size={12} />
                  </ActionButton>
                )}
              </>
            ) : banToggle ? (
              <ConfirmButton onClick={handleBanPost}>
                <FaExclamationCircle title='confirmar' size={12} />
              </ConfirmButton>
            ) : (
              <ActionButton onClick={handleConfirmBan}>
                <FaBan title='reportar' size={12} />
              </ActionButton>
            )}
          </>
        )}

        {type === 'question' && (
          <>
            {verifyUser && (
              <ActionButton onClick={handleEditQuestion}>
                <FaEdit title='editar' size={12} />
              </ActionButton>
            )}

            {verifyUser &&
              (deleteToggle ? (
                <ConfirmButton onClick={handleConfirmDeleteQuestion}>
                  <FaExclamationCircle title='confirmar' size={12} />
                </ConfirmButton>
              ) : (
                <ActionButton onClick={handleConfirm}>
                  <FaRectangleXmark title='apagar' size={12} />
                </ActionButton>
              ))}

            {!verifyUser &&
              (banToggle ? (
                <ConfirmButton onClick={handleBanQuestion}>
                  <FaExclamationCircle title='confirmar' size={12} />
                </ConfirmButton>
              ) : (
                <ActionButton onClick={handleConfirmBan}>
                  <FaBan title='reportar' size={12} />
                </ActionButton>
              ))}
          </>
        )}
      </ButtonContainer>
    </Container>
  );
}

CardOptions.propTypes = {
  information: P.oneOfType([object, string]),
  id: P.string.isRequired,
  userCard: P.object,
  type: P.string.isRequired,
};
