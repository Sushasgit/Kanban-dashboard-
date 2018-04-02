import {
  ADD_LIST,
  CHANGE_LIST_TITLE,
  DELETE_LIST,
  FETCH_ALL_LISTS
} from '../constants/constants';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_LIST': {
      const { listId, listTitle } = action.payload;
      return {
        ...state,
        [listId]: { _id: listId, title: listTitle, cards: [] },
      };
    }

      case 'FETCH_ALL_LISTS': {
      return {
        ...state,
        lists: action.payload,
      };
    }

    case 'CHANGE_LIST_TITLE': {
      const { listId, listTitle } = action.payload;
      return {
        ...state,
        [listId]: { ...state[listId], title: listTitle },
      };
    }

    case 'DELETE_LIST': {
      const { listId } = action.payload;
      const { [listId]: deletedList, ...restOfLists } = state;
      return restOfLists;
    }

    default:
      return state;
  }
};
