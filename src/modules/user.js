export const LOG_IN = 'user/LOG_IN';
export const LOG_OUT = 'user/LOG_OUT';
export const MINIMIZE = 'user/MINIMIZE';
export const UN_MINIMIZE = 'user/UN_MINIMIZE';
export const AUTH = 'user/AUTH';

export const SELECT_ACCOUNT = 'user/SELECT_ACCOUNT';
export const ADD_ACCOUNTS = 'user/ADD_ACCOUNTS';
export const TOGGLE_ACCOUNT = 'user/TOGGLE_ACCOUNT';

const initialState = {
  name: null,
  email: null,
  photoUrl: null,
  uid: null,
  authed: false,
  is_min: false,
  accountSelected: null,
  showSelectAccount: false,
  linkedAccounts: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        name: action.name,
        email: action.email,
        photoUrl: action.image,
        uid: action.id,
        authed: true
      };
    case LOG_OUT:
      return {
        ...state,
        name: null,
        email: null,
        photoUrl: null,
        authed: false
      };
    case AUTH:
      return {
        ...state,
        authed: action.bool
      };
    case MINIMIZE:
      return {
        ...state,
        is_min: true
      };
    case UN_MINIMIZE:
      return {
        ...state,
        is_min: false
      };
    case SELECT_ACCOUNT:
      return {
        ...state,
        accountSelected: action.account
      };

    case ADD_ACCOUNTS:
      return {
        ...state,
        linkedAccounts: action.data
      };

    case TOGGLE_ACCOUNT:
      return {
        ...state,
        showSelectAccount: !state.showSelectAccount
      };

    default:
      return state;
  }
};

export const logIn = (name, email, image, id) => {
  return dispatch => {
    dispatch({ type: LOG_IN, name, email, image, id });
  };
};
export const logOut = () => {
  return dispatch => {
    dispatch({ type: LOG_OUT });
  };
};
export const auth = bool => {
  return dispatch => {
    dispatch({ type: AUTH, bool });
  };
};
export const minimize = () => {
  return dispatch => {
    dispatch({ type: MINIMIZE });
  };
};
export const unMinimize = () => {
  return dispatch => {
    dispatch({ type: UN_MINIMIZE });
  };
};

export const selectAccount = account => {
  return dispatch => {
    dispatch({ type: SELECT_ACCOUNT, account });
  };
};

export const addLinkedAccounts = data => {
  return dispatch => {
    dispatch({ type: ADD_ACCOUNTS, data });
  };
};

export const toggleAccountModal = () => {
  return dispatch => {
    dispatch({ type: TOGGLE_ACCOUNT });
  };
};
