import { FaRegComment } from 'react-icons/fa';
import { Button } from './styled';
import { useNavigate } from 'react-router-dom';
import P from 'prop-types';

export function CommentButton({ id, route }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${route}/${id}`);
  };

  return (
    <>
      <Button onClick={handleClick}>
        <FaRegComment size={18} />
      </Button>
    </>
  );
}

CommentButton.propTypes = {
  id: P.string.isRequired,
  route: P.string.isRequired,
};
