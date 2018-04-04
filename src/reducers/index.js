import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import listReducer from './listReducer';
import cardReducer from './cardReducer';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  lists: listReducer,
  cards: cardReducer,
});

export default rootReducer;
