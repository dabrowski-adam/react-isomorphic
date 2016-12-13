/* eslint-disable import/prefer-default-export */

import { SubmissionError } from 'redux-form';

import {
// SUBMIT_MESSAGE_START,
// SUBMIT_MESSAGE_SUCCESS,
// SUBMIT_MESSAGE_FAIL,
// SUBMIT_MESSAGE_ERROR,
} from '../constants';

export const submitMessage = async data => {
  try {
    const response = await fetch('https://formspree.io/form@adamdabrowski.com', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return true;
    } else if (response.status === 400) {
      throw new SubmissionError(response.statusText);
    } else {
      throw response.status;
    }
  } catch (error) {
    throw error;
  }
};

