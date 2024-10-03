import { Routes, Route } from 'react-router-dom';

import AuthRoute from './Auth.routes';
import Page404 from '../pages/Page404';
import Home from '../pages/Home';
import About from '../pages/About';
import User from '../pages/User';
import Login from '../pages/Login';

export default function MainRoutes() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/about' element={<AuthRoute element={<About />}></AuthRoute>} />
      <Route exact path='/about/:id' element={<About />} />
      <Route exact path='/user' element={<AuthRoute element={<User />} />} />
      <Route exact path='/login' element={<Login />} />
      <Route path='*' element={<Page404 />} />
    </Routes>
  );
}
