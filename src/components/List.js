import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const List = ({ input, setInput, add, setAdd, edit, setEdit }) => {
  const updateAdd = (data) => {
    const newAdd = add.map((add) => (add.id === data.id ? { ...data } : add));
    setAdd(newAdd);
    setEdit("");
  };
  useEffect(() => {
    if (edit) {
      setInput(edit.title);
    } else {
      setInput("");
    }
  }, [setInput, edit]);

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!edit) {
      setAdd([...add, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateAdd({ title: input, id: edit.id, completed: edit.completed });
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter your Name"
        className="input"
        value={input}
        required
        onChange={onInputChange}
      ></input>
      <button type="submit">{edit ? "update" : "Add"}</button>
    </form>
  );
};

export default List;
