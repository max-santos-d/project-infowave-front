import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'INFOWAVE',
  storage,
  whitelist: ['auth'],
};

export default persistConfig;
