import * as constants from '../constants/constants';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.ADD_LIST: {
      const { listId, listTitle } = action.payload;
      return {
        ...state,
        [listId]: { _id: listId, title: listTitle, cards: [] },
      };
    }

    case constants.FETCH_ALL_LISTS: {
      return {
        ...state,
        lists: action.payload,
      };
    }

    case constants.CHANGE_LIST_TITLE: {
      const { listId, listTitle } = action.payload;
      return {
        ...state,
        [listId]: { ...state[listId], title: listTitle },
      };
    }

    case constants.DELETE_LIST: {
      const { listId } = action.payload;
      const { [listId]: deletedList, ...restOfLists } = state;
      return restOfLists;
    }

    default:
      return state;
  }
};
