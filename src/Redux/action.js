export const Add_Todo = "Add_Todo";
export const Delete_Todo = "Delete_todo";
export const Update_Todo = "Update_todo"

export function addTodo(todo) {
  return {
    type: Add_Todo,
    payload: todo,
  };
}

export function deleteTodo(todo) {
  return {
    type: Delete_Todo,
    payload: todo,
  };
}

export function updateTodo(todo) {
    return {
      type: Update_Todo,
      payload: todo,
    };
  }
