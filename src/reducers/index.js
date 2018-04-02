import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import listReducer from './listReducer';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  lists: listReducer,
});

export default rootReducer;
