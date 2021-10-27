/* eslint-disable default-case */
import { Add_Todo, Delete_Todo, Update_Todo } from "./action";
import { todos } from "./states";

export let reducer = (state = todos, action) => {
  let newTodos;
  switch (action.type) {
    case Add_Todo:
      newTodos = [...state];
      newTodos.push(action.payload);
    //   newTodos.push(action.payload.id)    changes in length Error 
      return newTodos;
    case Delete_Todo:
      newTodos = [...state];
      newTodos = newTodos.filter((todo) => todo.id !== action.payload);
    //   newTodos = newTodos.filter((todo) => todo.id !== action.payload); todo.name dosnt match id 
      return newTodos;
    case Update_Todo:
      newTodos = [...state];
      let index = -1;   
      for (let i = 0; i < newTodos.length; i++) {
        index++;
        // if (newTodos[i].id === action.payload.name)  changes in last like Array
        if (newTodos[i].id === action.payload.id) {
          break;
        }
      }
      if (index !== -1) {
        newTodos[index] = action.payload;
        return newTodos;
      }
  }
  return state;
};
