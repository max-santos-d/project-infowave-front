import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import P from 'prop-types';
import { useEffect } from 'react';

export default function AuthRoute({ element }) {
  const location = useLocation();
  const isLoggedIn = useSelector((state) => state.example.buttonClicked);
  const navigate = useNavigate();

  //console.log('Console do Auth.routes: ', location);

  //return isLoggedIn ? element : <Navigate to={{ pathname: '/login', state: { prevPath: location.pathname } }} />;

  useEffect(() => {
    if (!isLoggedIn) return navigate('/login', { state: { previousPath: location.pathname } });
  }, [isLoggedIn, location.pathname, navigate]);

  return element;
}

AuthRoute.propTypes = {
  element: P.oneOfType([P.element, P.func]),
};
