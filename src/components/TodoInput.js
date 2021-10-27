import React, { useState } from "react";
import { addTodo } from "../Redux/action";
import { v1 as uuid } from "uuid";
import { useDispatch } from "react-redux";

function TodoInput() {
  let [name, setName] = useState();
  let dispatch = useDispatch();
  return (
    <div>
      <div className="Align items center">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className=" mx-2"
        />
        <button
          onClick={() => {
            dispatch(
              addTodo({
                id: uuid(),
                name: name,
              })
            );
            setName("");
          }}
          className="btn btn-primary "
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoInput;
