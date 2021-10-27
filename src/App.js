import "./App.css";

import "bootstrap/dist/css/bootstrap.css";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import {Provider}from 'react-redux';
import {store}  from './Redux/store'


function App() {
  return (
    <Provider store ={store}>
    <div className="App m-5">
      <TodoInput />
      <TodoList />
     
      
    
    </div>
    </Provider>
  );
}

export default App;
