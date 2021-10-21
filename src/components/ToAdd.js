import React from "react";

const ToAdd = ({ add, setAdd, setEdit }) => {
  const handleEdit = (id) => {
    const findAdd = add.find((add) => add.id === id);
    setEdit(findAdd);
  };

  const handleDelete = (id) => {
    setAdd(add.filter((add) => add.id !== id));
  };

  return (
    <center>
      {add.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {add.map(({ title, id }) => (
              <tr>
                <td align="center">{title}</td>
                <td align="center">
                  <button className="action-btn" onClick={() => handleEdit(id)}>Edit</button>
                  <button className="action-btn" onClick={() => handleDelete(id)}>delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {/* <div>
          {add.map((add) => (
            <li className="listItem" key={add.id}>
              <input
                type="text"
                value={add.title}
                className="list"
                onChange={(event) => event.preventDefault()}
              />

              <div>
                <button onClick={() => handleEdit(add)}>Edit</button>
                <button onClick={() => handleDelete(add)}>delete</button>
              </div>
            </li>
          ))}
        </div> */}
    </center>
  );
};

export default ToAdd;
