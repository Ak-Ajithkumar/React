import axios from "axios";
import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./userType";

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};
const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

const fetchuserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

export const fetchuser = (page) => {
  return (dispatch) => {
    dispatch(fetchUserRequest);
    axios
      .get(`https://gorest.co.in/public/v1/users?page=${page}`)
      .then((response) => {
        const users = response.data;
        return dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        return dispatch(fetchuserFailure(errorMsg));
      });
  };
};
