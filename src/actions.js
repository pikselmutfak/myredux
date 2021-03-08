import axios from 'axios';

const actionSetUsers = (users) => {
  return {
    type: "SET_USERS",
    users
  };
};

export const asyncGetUsers = () => {

  return (dispatch) => {

    axios.get('https://reqres.in/api/users')
    .then((response) => {
        console.log(response.data)
        dispatch(actionSetUsers(response.data.data))
    })
    .catch((err) => {
        console.log(err)
    })
  }
};