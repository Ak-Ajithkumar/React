import React from "react";

const ToAdd = ({ add, setAdd }) => {

const handleDelete = ({id}) =>{
    setAdd(add.filter((add)=>add.id !== id))
}

  return (
    <div>
      {add.map((add) => (
        <li className="listItem" key={add.id}>
          <input
            type="text"
            value={add.title}
            className="list"
            onChange={(event) => event.preventDefault()}
          /><div>
              <button onClick={()=>handleDelete(add)} >
                  delete
              </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default ToAdd;
