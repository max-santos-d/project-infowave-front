import { FaHome, FaUserAlt, FaRegComments } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Nav } from './style';
import { FaGear, FaLocationDot } from 'react-icons/fa6';
import { useSelector } from 'react-redux';

export default function Header() {
  const userType = useSelector((state) => state.auth.user.userType);
  const verify = userType && userType.filter((types) => types.type === 'administration').length ? true : false;

  return (
    <Nav>
      <Link to='/post'>
        <FaHome size={24} />
      </Link>

      <Link to='/question'>
        <FaRegComments size={24} />
      </Link>

      <Link to='/location'>
        <FaLocationDot size={24} />
      </Link>

      <Link to='/user'>
        <FaUserAlt size={24} />
      </Link>

      {verify && (
        <Link to='/adm'>
          <FaGear size={24} />
        </Link>
      )}
    </Nav>
  );
}
