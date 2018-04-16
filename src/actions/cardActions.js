import firebase from 'firebase';
import { database } from '../firebase/firebase'; // eslint-disable-line no-unused-vars
import * as constants from '../constants/constants';

export const createCardSuccess = card => ({
  type: constants.ADD_CARD,
  payload: card,
});

export const fetchCardsSuccess = lists => ({
  type: constants.FETCH_ALL_CARDS,
  payload: lists,
});

/* TODO add listId to this function. Fix creation structure in firebase */

export function createCard(newText, cardId, listId) {
  const db = firebase.database();
  return (dispatch) => {
    const userID = firebase.auth().currentUser.uid;
    dispatch(createCardSuccess(newText, cardId));
    db.ref(`users/${userID}/lists/${listId}/cards`).push({ newText, cardId });
  };
}

export function getAllCards(listID) {
  console.log(test)
  const db = firebase.database();
  return (dispatch) => {
    // const userID = firebase.auth().currentUser.uid;
    const userID = window.localStorage.getItem('id');
    const cards = db.ref(`users/${userID}/lists/${listID}/cards`);
    cards.on('value', (snapshot) => {
      const arr = [];
      snapshot.forEach((childItem) => {
        const childData = childItem.val();
        arr.push(childData);
        console.log(arr);
      });
      dispatch(fetchCardsSuccess(arr));
    });
  };
}
