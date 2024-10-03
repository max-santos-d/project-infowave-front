import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'APPLICATION_NAME',
  storage,
  whitelist: ['example'],
};

export default persistConfig;
