import React,{useState ,useEffect} from "react";
import Main from "./components/Main";
import "./App.css";
import List from "./components/List";
import ToAdd from "./components/ToAdd";

function App() {

  const[input,setInput]=useState("")
  const[add,setAdd]=useState([])

  useEffect(()=>{
    localStorage.setItem('add',JSON.stringify(add));
  },[add]);

  return (
    <div className="App">
      <Main />
      <List 
      input={input}
      setInput={setInput}
      add={add}
      setAdd={setAdd}
      />
      <ToAdd add={add} setAdd={setAdd} />
    </div>
  );
}

export default App;
