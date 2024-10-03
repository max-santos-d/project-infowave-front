import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';

import persistedConfig from './modules/reduxPersist';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddeware = createSagaMiddleware();

const persistedReducer = persistReducer(persistedConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(sagaMiddeware));
sagaMiddeware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
