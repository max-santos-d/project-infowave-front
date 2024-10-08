import { FaHome, FaUserAlt, FaRegComments } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Nav } from './style';
import { FaLocationDot } from 'react-icons/fa6';

export default function Header() {
  return (
    <Nav>
      <Link to='/'>
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
    </Nav>
  );
}
