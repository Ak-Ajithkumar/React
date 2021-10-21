import React, { useState, useEffect } from "react";
import Main from "./components/Main";
import "./App.css";
import List from "./components/List";
import ToAdd from "./components/ToAdd";
import Clock from "./components/Clock";

function App() {
  const [input, setInput] = useState("");
  const [add, setAdd] = useState([]);
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("add", JSON.stringify(add));
  }, [add]);

  return (
    <div className="App">
      <Main />
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
      </h1>
    </div>
  );
}

export default App;
