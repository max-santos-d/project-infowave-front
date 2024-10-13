import { Routes, Route } from 'react-router-dom';

import AuthRoute from './Auth.routes';
import Page404 from '../pages/Page404';
import Home from '../pages/Home';
import Question from '../pages/Question';
import User from '../pages/User';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PostShow from '../components/PostShow';
import CreateQuestionForm from '../components/CreateQuestionFrom';

export default function MainRoutes() {
  return (
    <Routes>
      <Route exact path='/auth' element={<Login />} />

      <Route exact path='/post' element={<Home />} />
      <Route exact path='/post/:id' element={<PostShow />} />

      <Route exact path='/question' element={<Question />} />
      <Route exact path='/question/:id' element={<Question />} />

      <Route exact path='/register' element={<Register />} />

      <Route element={<AuthRoute />}>
        <Route exact path='/user' element={<User />} />

        <Route exact path='/createQuestion' element={<CreateQuestionForm />} />
      </Route>
      <Route path='*' element={<Page404 />} />
    </Routes>
  );
}
