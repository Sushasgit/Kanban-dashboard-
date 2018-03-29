import * as constants from '../constants/constants';

const INITIAL_STATE = {
  user: {},
};

export default function (
  state = INITIAL_STATE,
  action,
) {
  switch (
    action.type
    ) {
    case constants.TEST:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
