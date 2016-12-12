import {
  SUBMIT_MESSAGE_START,
  SUBMIT_MESSAGE_SUCCESS,
  SUBMIT_MESSAGE_FAIL,
  SUBMIT_MESSAGE_ERROR,
} from '../constants';

export default function contact(state = { status: '' }, action) {
  switch (action.type) {
    case SUBMIT_MESSAGE_START:
      return {
        ...state,
        status: SUBMIT_MESSAGE_START,
      };
    case SUBMIT_MESSAGE_SUCCESS:
      return {
        ...state,
        status: SUBMIT_MESSAGE_SUCCESS,
      };
    case SUBMIT_MESSAGE_FAIL:
      return {
        ...state,
        status: SUBMIT_MESSAGE_FAIL,
      };
    case SUBMIT_MESSAGE_ERROR:
      return {
        ...state,
        status: SUBMIT_MESSAGE_ERROR,
      };
    default:
      return state;
  }
}
