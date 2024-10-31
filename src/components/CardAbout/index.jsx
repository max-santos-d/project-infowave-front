import P from 'prop-types';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { FaEdit, FaExclamationCircle } from 'react-icons/fa';
import { FaRectangleXmark } from 'react-icons/fa6';

import { ActionButton, ConfirmButton, Container, Context, Header, Options } from './style';
import { CardText } from '../CardText';
import api from '../../services/axios';

export default function CardAbout({ id, title, description, location, banner = '' }) {
  const newDescription = 'Descrição: ' + description;
  const newLocation = 'Como chegar: ' + location;

  const navigate = useNavigate();
  const [deleteToggle, setDeleteToggle] = React.useState(false);
  const userType = useSelector((state) => state.auth.user.userType);
  const verifyOrganization =
    userType && userType.filter((types) => types.type === 'organization').length ? true : false;

  const handleConfirmDelete = async () => {
    toast.success('delete');
    setDeleteToggle(false);
    try {
      if (verifyOrganization) await api.delete(`/about/${id}`);
      toast.success('requisição bem sucessida');
      navigate('/about', { replace: true });
    } catch (err) {
      console.log(err);
      toast.error('erro inesperado ao realizar requisição');
    }
  };

  const handleEditPost = () => {
    navigate('/createAbout', {
      state: {
        id,
        banner: banner,
        title: title,
        description: description,
        location: location,
        prevPath: location.pathname,
      },
    });
  };

  const handleConfirm = () => {
    setDeleteToggle(true);
  };

  return (
    <Container>
      {banner && <img src={banner} alt='' />}
      <Header>
        <CardText text={title} textSize={1} isTitle={true} />
        {verifyOrganization && (
          <Options>
            <ActionButton onClick={handleEditPost}>
              <FaEdit title='editar' size={12} />
            </ActionButton>

            {deleteToggle ? (
              <ConfirmButton onClick={handleConfirmDelete}>
                <FaExclamationCircle title='confirmar' size={12} />
              </ConfirmButton>
            ) : (
              <ActionButton onClick={handleConfirm}>
                <FaRectangleXmark title='apagar' size={12} />
              </ActionButton>
            )}
          </Options>
        )}
      </Header>
      <Context>
        <CardText text={newDescription} type={'post'} />
        <CardText text={newLocation} type={'post'} />
      </Context>
    </Container>
  );
}

CardAbout.propTypes = {
  id: P.string.isRequired,
  title: P.string.isRequired,
  description: P.string.isRequired,
  location: P.string.isRequired,
  banner: P.string,
};
