import {
  LOGIN_USER,
  LOGOUT_USER,
  SAVE_PASSWORD,
  SAVE_CHARITY,
} from '../Actions/types';

const initialState = {
  user: null,
  isLoggedIn: false,
  password: '',
  charityId: '',
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.userdata,
        isLoggedIn: true,
        charityId: action.charityId,
      };
    case SAVE_PASSWORD:
      return {
        ...state,

        password: action.password,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isLoggedIn: false,
        password: '',
        user: null,
        charityId: '',
      };
    case SAVE_CHARITY:
      return {
        ...state,

        charityId: action.charityId,
      };
    default:
      return state;
  }
};
