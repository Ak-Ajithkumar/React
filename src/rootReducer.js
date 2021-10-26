import userReducer from "./components/user/userReducer";

const rootReducer = () => ({
  user: userReducer,
});

export default rootReducer;
