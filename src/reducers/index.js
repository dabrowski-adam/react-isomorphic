import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import user from './user';
import runtime from './runtime';
import intl from './intl';
import content from './content';
import contact from './contact';

import { SUBMIT_MESSAGE_SUCCESS } from '../constants/index';

export default combineReducers({
  user,
  runtime,
  intl,
  content,
  contact,
  form: formReducer.plugin({
    contactValidation: (state, action) => {
      switch (action.type) {
        case SUBMIT_MESSAGE_SUCCESS:
          return undefined;
        default:
          return state;
      }
    },
  }),
});
