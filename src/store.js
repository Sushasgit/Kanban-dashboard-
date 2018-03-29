import { createStore } from 'redux';
import rootReducer from '../src/reducers/index';

export const store = createStore(rootReducer);
