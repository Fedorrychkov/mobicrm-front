export const authTokenAdd = token => {
  return {
    type: 'ADD_AUTH_TOKEN',
    token
  }
};

export const authTokenRemove = () => {
  return {
    type: 'REMOVE_AUTH_TOKEN'
  }
};

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
