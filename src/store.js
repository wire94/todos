import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {}, middlewares = [thunk], store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));

export default store;
