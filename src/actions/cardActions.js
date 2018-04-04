import firebase from 'firebase';
import { database } from '../firebase/firebase'; // eslint-disable-line no-unused-vars
import * as constants from '../constants/constants';

export const createCardSuccess = card => ({
  type: constants.ADD_CARD,
  payload: card,
});

/* TODO add listId to this function. Fix creation structure in firebase */

export function createCard(newText, cardId) {
  const db = firebase.database();
  return (dispatch) => {
    const userID = firebase.auth().currentUser.uid;
    dispatch(createCardSuccess(newText, cardId));
    const usersListsRef = db.ref(`users/${userID}/lists/`).push();
    const userListKey = usersListsRef.key;
    db.ref(`users/${userID}/lists/${userListKey}/cards`).push({ newText, cardId });
  };
}

