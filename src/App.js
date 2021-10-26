import React from "react";
// import Main from "./components/Main";
import "./App.css";
//  import List from "./components/List";
// import ToAdd from "./components/ToAdd";
// import Clock from "./components/Clock";
import Datafetching from "./components/Datafetching";
// import { useState,useEffect} from "react"
// import Pagination from "@material-ui/lab/Pagination";
import { Provider } from "react-redux";

// import UserContainer from "./components/user/userContainer";
import store from "./Store";

function App() {
  // const [input, setInput] = useState("");
  // const [add, setAdd] = useState([]);
  // const [edit, setEdit] = useState(null);
  // const store = createStore(useReducer)
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Main />
      <List
        input={input}
        setInput={setInput}
        add={add}
        setAdd={setAdd}
        edit={edit}
        setEdit={setEdit}
      />
      <ToAdd add={add} setAdd={setAdd} setEdit={setEdit} />
      <h1>
        <Clock />
        

      </h1> */}
        {/* <UserContainer /> */}
        <h1>Fetching Data </h1>
        <Datafetching />
      </div>
    </Provider>
  );
}

export default App;
