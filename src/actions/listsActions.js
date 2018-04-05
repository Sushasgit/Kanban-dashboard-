import firebase from 'firebase';
import { database } from '../firebase/firebase'; // eslint-disable-line no-unused-vars
import * as constants from '../constants/constants';

export const createListSuccess = list => ({
  type: constants.ADD_LIST,
  payload: list,
});

export const fetchListSuccess = lists => ({
  type: constants.FETCH_ALL_LISTS,
  payload: lists,
});

export const changeTitleSuccess = list => ({
  type: constants.CHANGE_LIST_TITLE,
  payload: list,
});

export function createList(listTitle, listId) {
  const db = firebase.database();

  return (dispatch) => {
    const userID = firebase.auth().currentUser.uid;
    dispatch(createListSuccess(listTitle, listId));
    const usersListsRef = db.ref(`users/${userID}/lists/`).push();
    const listKey = usersListsRef.key;
    usersListsRef.set({ listId, listTitle, listKey });
  };
}

export function getAllLists() {
  const db = firebase.database();
  return (dispatch) => {
    // const userID = firebase.auth().currentUser.uid;
    const userID = window.localStorage.getItem('id');
    const lists = db.ref(`users/${userID}/lists`);
    lists.on('value', (snapshot) => {
      const arr = [];
      snapshot.forEach((childItem) => {
        const childData = childItem.val();
        arr.push(childData);
      });
      dispatch(fetchListSuccess(arr));
    });
  };
}

export function changeListTitle(listTitle, listId) {
  const db = firebase.database();

  return (dispatch) => {
    const userID = firebase.auth().currentUser.uid;
    dispatch(changeTitleSuccess(listTitle, listId));
    db.ref(`users/${userID}/lists`).push({ listTitle, listId });
  };
}
