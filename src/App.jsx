import GlobalStyled from './styles/GlobalStyled';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './store';
import Header from './components/Header';
import MainRoutes from './routes';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Header />
          <MainRoutes />
          <GlobalStyled />
          <ToastContainer autoClose={2000} className='toast-container' />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
