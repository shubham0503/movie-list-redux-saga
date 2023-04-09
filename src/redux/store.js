import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer';
import movieSaga from './movieSaga'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({reducer: rootReducer, middleware: () => [sagaMiddleware]});
sagaMiddleware.run(movieSaga)
export default store;
