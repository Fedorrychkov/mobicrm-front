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
