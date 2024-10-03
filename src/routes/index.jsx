import { Routes, Route } from 'react-router-dom';

//import AuthRoute from './Auth.routes';
import Page404 from '../pages/Page404';
import Home from '../pages/Home';

export default function MainRoutes() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      {/* <Route exact path='/about' element={<AuthRoute element={<About />}></AuthRoute>} /> */}
      <Route path='*' element={<Page404 />} />
    </Routes>
  );
}
