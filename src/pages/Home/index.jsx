import React, { useState } from 'react';
import { MainContent } from '../../styles/GlobalStyled';
import axios from '../../services/axios';

export default function Home() {
  const [data, setData] = useState('');

  React.useEffect(() => {
    async function getData() {
      const { data } = await axios.get('/user');
      setData(data);
    }
    getData();
  });
  return (
    <React.Fragment>
      <MainContent>
        <h1>Users</h1>
        {data.response && data.response.map((el) => <p key={el.id}>{el.email}</p>)}
      </MainContent>
    </React.Fragment>
  );
}
