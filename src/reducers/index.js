import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
});

export default rootReducer;
