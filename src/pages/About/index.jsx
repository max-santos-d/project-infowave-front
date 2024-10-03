import { useParams, useSearchParams } from 'react-router-dom';
import { MainContent } from '../../styles/GlobalStyled';

export default function About() {
  const params = useParams();
  const [qs] = useSearchParams();

  return (
    <MainContent>
      <h1>About</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      {params.id && `Params: ${params.id}`} <br />
      {qs.size > 0 && `Querry: ${qs.get('page')}`}
    </MainContent>
  );
}
