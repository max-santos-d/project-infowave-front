import { Routes, Route } from 'react-router-dom';

//import AuthRoute from './Auth.routes';
import Page404 from '../pages/Page404';
import Home from '../pages/Home';
import Question from '../pages/Question';

export default function MainRoutes() {
  return (
    <Routes>
      {/* <Route exact path='/about' element={<AuthRoute element={<About />}></AuthRoute>} /> */}
      <Route exact path='/' element={<Home />} />
      <Route exact path='/post/:id' element={<Home />} />
      <Route exact path='/question' element={<Question />} />
      <Route exact path='/question/:id' element={<Question />} />
      <Route path='*' element={<Page404 />} />
    </Routes>
  );
}
