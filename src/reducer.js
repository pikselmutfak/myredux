const startState = {
    departments: [],
    users: []
};

export const reducer = (state = startState, action) => {
  switch (action.type) {

    case "SET_USERS": {
      return {
        ...state, // spread operator
        users: action.users
      };
    }

    default:
      return state;
    }
};
