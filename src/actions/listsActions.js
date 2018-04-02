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

export function createList (listTitle, listId) {
  const db = firebase.database();

  return (dispatch) => {
    const userID = firebase.auth().currentUser.uid;
    dispatch(createListSuccess(listTitle, listId));
    db.ref(`users/${userID}/lists`).push({ listTitle: listTitle, listId: listId });
  };
}

export function getAllLists() {
  const db = firebase.database();
  return (dispatch) => {
    const userID = firebase.auth().currentUser.uid;
    const lists = db.ref(`users/${userID}/lists`);
    lists.on('value', snapshot => {
      const arr = [];
      snapshot.forEach(childItem => {
        const childData = childItem.val();
          arr.push(childData);
    });
      dispatch(fetchListSuccess(arr));
    });
  };
}
