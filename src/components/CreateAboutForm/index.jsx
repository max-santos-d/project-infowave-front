import React from 'react';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

import { MainContent } from '../../styles/GlobalStyled';
import { Form, Textarea } from './style';
import api from '../../services/axios';
import { get } from 'lodash';

export default function CreateAboutForm() {
  const navigate = useNavigate();
  const textareaDescriptionRef = React.useRef(null);
  const textareaLocationRef = React.useRef(null);
  const [banner, setBanner] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [locationText, setLocation] = React.useState('');

  const location = useLocation();
  const previousPath = get(location, 'state.prevPath', '/about');
  const bannerStorage = get(location, 'state.banner', '');
  const titleStorage = get(location, 'state.title', '');
  const descriptionStorage = get(location, 'state.description', '');
  const locationStorage = get(location, 'state.location', '');
  const idAbout = get(location, 'state.id', '');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!locationText.length || !description.length || !title.length)
      return toast.error('titulo, descrição e localização são obrigatórios');

    try {
      if (idAbout) {
        await api.patch(`/about/${idAbout}`, { banner, title, location: locationText, description });
        toast.success('atualizado');
        navigate(previousPath);
      } else {
        await api.post('/about', { banner, title, location: locationText, description });
        navigate(previousPath);
        toast.success('informação criada');
        navigate('/about');
      }
    } catch (err) {
      console.log(err);
      toast.error('erro ao criar informação');
    }
  };

  React.useEffect(() => {
    if (!banner && bannerStorage) setBanner(bannerStorage);
    if (!title && titleStorage) setTitle(titleStorage);
    if (!description && descriptionStorage) setDescription(descriptionStorage);
    if (!locationText && locationStorage) setLocation(locationStorage);

    const textareaDescription = textareaDescriptionRef.current;
    const textareaLocation = textareaDescriptionRef.current;
    textareaDescription.style.height = 'auto';
    textareaDescription.style.height = `${textareaDescription.scrollHeight}px`;
    textareaLocation.style.height = 'auto';
    textareaLocation.style.height = `${textareaLocation.scrollHeight}px`;
  }, [banner, title, bannerStorage, titleStorage, description, descriptionStorage, locationText, locationStorage]);

  return (
    <MainContent>
      <Form onSubmit={handleSubmit}>
        <label htmlFor='banner'>
          <input
            type='text'
            value={banner}
            onChange={(event) => setBanner(event.target.value)}
            placeholder='informe a URL para uma imagem aqui'
          />
        </label>

        <label htmlFor='title'>
          <input
            type='text'
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder='informe o titulo do setor'
          />
        </label>

        <label htmlFor='description'>
          <Textarea
            ref={textareaDescriptionRef}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='digite a descrição do setor aqui...'
          />
        </label>

        <label htmlFor='location'>
          <Textarea
            ref={textareaLocationRef}
            value={locationText}
            onChange={(e) => setLocation(e.target.value)}
            placeholder='digite a localização do setor aqui...'
          />
        </label>

        <button>{!idAbout ? 'criar' : 'editar'}</button>
      </Form>
    </MainContent>
  );
}
