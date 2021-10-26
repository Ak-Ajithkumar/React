import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./userType";

const initalstate = {
  loading: false,
  users: [],
  metaData: null,
  error: "",
};

const reducer = (state = initalstate, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        users: action.payload.data,
        metaData: action.payload.meta,
        errror: "",
      };

    case FETCH_USER_FAILURE:
      return {
        loading: false,
        users: [],
        metaData: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
