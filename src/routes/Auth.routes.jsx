import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import P from 'prop-types';
import { useEffect } from 'react';

export default function AuthRoute({ element }) {
  const location = useLocation();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn && !token) return navigate('/auth', { state: { previousPath: location.pathname } });
  }, [isLoggedIn, location.pathname, navigate, token]);

  return element;
}

AuthRoute.propTypes = {
  element: P.oneOfType([P.element, P.func]),
};
