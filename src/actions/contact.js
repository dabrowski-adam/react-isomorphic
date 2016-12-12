/* eslint-disable import/prefer-default-export */

import { SubmissionError } from 'redux-form';

import {
  SUBMIT_MESSAGE_START,
  SUBMIT_MESSAGE_SUCCESS,
  SUBMIT_MESSAGE_FAIL,
  SUBMIT_MESSAGE_ERROR,
} from '../constants';

export const submitMessage = (data) => {
    //dispatch({ type: SUBMIT_MESSAGE_START });
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('https://formspree.io/form@adamdabrowski.com', {
          headers: { Accept: 'application/json' },
          method: 'POST',
          data,
        });

        if (response.ok) {
          //dispatch({ type: SUBMIT_MESSAGE_SUCCESS });
          resolve();
        } else if (response.status === 400) {
          throw new SubmissionError(response.statusText);
        } else {
          //dispatch({ type: SUBMIT_MESSAGE_FAIL });
          reject();
        }
      } catch (error) {
        //dispatch({ type: SUBMIT_MESSAGE_ERROR });
        reject();
      }
    });
}
