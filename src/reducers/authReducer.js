import {
  CREATE_USER_SUCCESS,
  LOGIN_USER_SUCCESS,
  CREATE_USER_FAIL,
} from '../actions/authActions';

const initialState = {
  isAuthenticated: false,
  error: null,
  user: 'guest',
  uid: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: true,
        error: null,
      });

    case CREATE_USER_FAIL:
      return Object.assign({}, state, {
        isAuthenticated: false,
        error: action.payload,
      });
    case LOGIN_USER_SUCCESS:
      window.localStorage.setItem('isAuthenticated', true);
      return Object.assign({}, state, {
        isAuthenticated: true,
        error: null,
      });
    default:
      return state;
  }
};
