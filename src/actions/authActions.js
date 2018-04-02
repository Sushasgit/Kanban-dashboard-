import firebase from 'firebase';
import { database } from '../firebase/firebase'; // eslint-disable-line no-unused-vars
import { history } from '../history';
import * as constants from '../constants/constants';


export const registerError = error => ({
  type: constants.CREATE_USER_FAIL,
  payload: error,
});

export const loginError = error => ({
  type: constants.LOGIN_USER_FAIL,
  payload: error,
});

export function register(email, password) {
  const db = firebase.database();

  return (dispatch) => {
    dispatch({ type: constants.CREATE_USER_REQUEST });

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch({ type: constants.CREATE_USER_SUCCESS });
        db.ref(`users/${user.uid}`).set({ name: user.email });
        history.push('/signin');
      })
      .catch((error) => {
        dispatch(registerError(error.message));
      });
  };
}

export function login(email, password) {
  return (dispatch) => {
    dispatch({ type: constants.LOGIN_USER_REQUEST });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch({ type: constants.LOGIN_USER_SUCCESS });
        window.localStorage.setItem('id', user.uid);// eslint-disable-line no-unused-vars
        history.push(`/dashboard/${user.uid}`);
      })
      .catch((error) => {
        dispatch(loginError(error.message));
      });
  };
}

