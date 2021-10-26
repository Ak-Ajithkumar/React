import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// import rootReducer from "./rootReducer";
import userReducer from "./components/user/userReducer";

const store = createStore(userReducer, applyMiddleware(thunk));

export default store;
