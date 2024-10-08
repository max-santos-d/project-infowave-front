import { useEffect, useRef, useState } from 'react';
import { MainContent } from '../../styles/GlobalStyled';
import { useNavigate } from 'react-router-dom';

export default function Page404() {
  const [time, setTime] = useState(2);
  const timeout = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      setTime((t) => t - 1);
    }, 1000);

    if (time <= 0) navigate('/post');
    return () => {
      clearTimeout(timeout.current);
    };
  }, [time, navigate]);

  return (
    <MainContent>
      <h1>Error 404</h1>
      <p>route not found</p>
      <p>redirecting to the Home page at: {time}</p>
    </MainContent>
  );
}
