import { Routes, Route } from 'react-router-dom';

import AuthRoute from './Auth.routes';
import Page404 from '../pages/Page404';
import Home from '../pages/Home';
import Question from '../pages/Question';
import Login from '../pages/Login';

export default function MainRoutes() {
  return (
    <Routes>
      <Route exact path='/post' element={<AuthRoute element={<Home />}></AuthRoute>} />
      <Route exact path='/post/:id' element={<Home />} />
      <Route exact path='/question' element={<AuthRoute element={<Question />}></AuthRoute>} />
      <Route exact path='/question/:id' element={<Question />} />
      <Route exact path='/auth' element={<Login />} />
      <Route path='*' element={<Page404 />} />
    </Routes>
  );
}
