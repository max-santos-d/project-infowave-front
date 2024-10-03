import { useLocation } from 'react-router-dom';
import Card from '../../components/Card';
import { get } from 'lodash';

export default function Login() {
  const location = useLocation();
  const previousPath = get(location, 'state.previousPath', '/');

  return (
    <>
      <Card title={'Login'} previousPath={previousPath} />
    </>
  );
}
