import React from "react";
import {v4 as uuidv4} from "uuid"

const List = ({ input, setInput, add, setAdd }) => {
  
  const onInputChange = (event)=>{
      setInput(event.target.value)
  }
  
  const onFormSubmit = (event)=>{
       event.preventDefault()
       setAdd([...add,{id:uuidv4(),title:input,completed:false}])
       setInput('')
  }
  
  
    return (
    <form  onSubmit={onFormSubmit}>
      <input type="text" placeholder="Enter your Name" className='input' 
      value={input}
      required
       onChange ={onInputChange}
      ></input>
      <button type="submit">Add</button>    
    </form>
  );
};

export default List;
