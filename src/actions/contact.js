/* eslint-disable import/prefer-default-export */

import { SubmissionError } from 'redux-form';
import formspree from '../core/formspree';

import {
SUBMIT_MESSAGE_START,
SUBMIT_MESSAGE_SUCCESS,
SUBMIT_MESSAGE_FAIL,
SUBMIT_MESSAGE_ERROR,
} from '../constants';

export const submitMessage = async (data, dispatch) => {
  try {
    dispatch({ type: SUBMIT_MESSAGE_START });
    await formspree(data);
    dispatch({ type: SUBMIT_MESSAGE_SUCCESS });
    return true; // Is this needed?
  } catch (error) {
    if (error instanceof SubmissionError) {
      dispatch({ type: SUBMIT_MESSAGE_FAIL });
    } else {
      dispatch({ type: SUBMIT_MESSAGE_ERROR });
    }
    throw error;
  }
};
