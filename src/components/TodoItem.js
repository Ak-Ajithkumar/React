import React, { useState } from "react";
import { deleteTodo } from "../Redux/action";
import { useDispatch } from "react-redux";
import { updateTodo } from "../Redux/action";

function TodoItem({ todo }) {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(todo.name);
  let dispatch = useDispatch();

  return (
    <div>
      <div className="  align-items-center">
        <div>{todo.id.length > 1 ? todo.id[2] : todo.id}</div>
        <div className="col">
          {edit ? (
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          ) : (
            <h4>{todo.name}</h4>
          )}
        </div>
        <button
          className="btn btn-primary mx-2 "
          onClick={() => {
            console.log("update");   // update 
            dispatch(
              updateTodo({
                ...todo,
                name: name,
              })
            );
            if (edit) {
              setName(todo.name);
            }
            setEdit(!edit);
          }}
        >
          {edit ? "Update" : "Edit"}
        </button>
        <button
          className="btn btn-danger "
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
