import {
  SUBMIT_MESSAGE_START,
  SUBMIT_MESSAGE_SUCCESS,
  SUBMIT_MESSAGE_FAIL,
  SUBMIT_MESSAGE_ERROR,
} from '../constants';

export default function contact(state = {
  isSent: false, isFailed: false,
}, action) {
  switch (action.type) {
    case SUBMIT_MESSAGE_START:
      return {
        ...state,
        isSent: false,
        isFailed: false,
      };
    case SUBMIT_MESSAGE_SUCCESS:
      return {
        ...state,
        isSent: true,
      };
    case SUBMIT_MESSAGE_FAIL:
      return {
        ...state,
      };
    case SUBMIT_MESSAGE_ERROR:
      return {
        ...state,
        isFailed: true,
      };
    default:
      return state;
  }
}
