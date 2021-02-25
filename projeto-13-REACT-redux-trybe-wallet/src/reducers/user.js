const initialState = { email: '' };

const user = (state = initialState, action) => {
  switch (action.type) {
  case 'LOGIN':
    return action.value;
  default:
    return state;
  }
};

export default user;
