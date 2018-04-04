import * as constants from '../constants/constants';

export default (state = {}, action) => {
  switch (action.type) {
    case constants.ADD_CARD: {
      const { cardText, cardId } = action.payload;
      return { ...state, [cardId]: { text: cardText, _id: cardId } };
    }
    case constants.CHANGE_CARD_TEXT: {
      const { cardText, cardId } = action.payload;
      return { ...state, [cardId]: { ...state[cardId], text: cardText } };
    }
    case constants.CHANGE_CARD_DATE: {
      const { date, cardId } = action.payload;
      return { ...state, [cardId]: { ...state[cardId], date } };
    }
    case constants.CHANGE_CARD_COLOR: {
      const { color, cardId } = action.payload;
      return { ...state, [cardId]: { ...state[cardId], color } };
    }

    case constants.DELETE_CARD: {
      const { cardId } = action.payload;
      const { [cardId]: deletedCard, ...restOfCards } = state;
      return restOfCards;
    }
    case constants.DELETE_LIST: {
      const { cards: cardIds } = action.payload;
      return Object.keys(state)
        .filter(cardId => !cardIds.includes(cardId))
        .reduce(
          (newState, cardId) => ({ ...newState, [cardId]: state[cardId] }),
          {},
        );
    }
    default:
      return state;
  }
};
