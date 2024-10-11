import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export default function AuthRoute() {
  const location = useLocation();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const token = useSelector((state) => state.auth.token);

  return isLoggedIn && token ? (
    <Outlet />
  ) : (
    <Navigate to={'/auth'} state={{ previousPath: location.pathname }} replace />
  );
}
