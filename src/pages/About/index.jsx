import { toast } from 'react-toastify';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, CreateAbout, Form, Input, MyFaRegPaperPlane } from './style';
import { MainContent } from '../../styles/GlobalStyled';
import api from '../../services/axios';
import CardAbout from '../../components/CardAbout';
import { useSelector } from 'react-redux';

export default function About() {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const navigate = useNavigate();

  const [searchText, setSearchText] = React.useState();

  const userType = useSelector((state) => state.auth.user.userType);
  const verifyOrganization =
    userType && userType.filter((types) => types.type === 'organization').length ? true : false;

  const getAllAbouts = async () => {
    try {
      setLoading(true);
      const { response } = await (await api.get('/about')).data;
      setData(response);
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast.error('erro ao carregar Abouts');
    }
  };

  const handleNewAbout = () => {
    navigate('/createAbout');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      const { response } = await (await api.get(`/about?searchText=${searchText}`)).data;
      setData(response);
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast.error('erro ao realizar requisição');
    }
  };

  React.useEffect(() => {
    getAllAbouts();
  }, []);

  return (
    <MainContent>
      <Form onSubmit={handleSubmit}>
        <Input
          type='text'
          placeholder='pesquisar'
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />

        <Button type='submit'>
          <MyFaRegPaperPlane />
        </Button>
      </Form>

      <h1>Sobre o IFSertãoPE</h1>

      {verifyOrganization && <CreateAbout onClick={handleNewAbout}>criar nova informação</CreateAbout>}

      {!loading &&
        data &&
        data.map((about) => (
          <CardAbout
            key={about._id}
            id={about._id}
            title={about.title}
            description={about.description}
            location={about.location}
            banner={about.banner}
          />
        ))}
    </MainContent>
  );
}
