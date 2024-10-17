import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export default function AuthOrgRoute() {
  const location = useLocation();
  const userType = useSelector((state) => state.auth.user.userType);
  const verify = userType.filter((types) => types.type === 'organization');

  return verify.length ? <Outlet /> : <Navigate to={'/post'} state={{ previousPath: location.pathname }} replace />;
}
