import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../src/reducers/index';


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
