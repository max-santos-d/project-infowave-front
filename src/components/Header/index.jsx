import { FaHome, FaSignInAlt, FaUserAlt, FaAngleRight, FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav } from './style';

export default function Header() {
  const buttonClicked = useSelector((state) => state.example.buttonClicked);
  return (
    <Nav>
      <Link to='/'>
        <FaHome size={24} />
      </Link>

      <Link to='/user'>
        <FaUserAlt size={24} />
      </Link>

      <Link to='/about'>
        <FaAngleRight size={24} />
      </Link>

      <Link to='/about/2?page=10'>
        <FaAngleDoubleRight size={24} />
      </Link>

      <a href='/login'>
        <FaSignInAlt size={24} />
      </a>

      {buttonClicked ? 'clicked' : 'not clicked'}
    </Nav>
  );
}
