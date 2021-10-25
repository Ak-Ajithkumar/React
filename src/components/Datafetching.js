import React, { useState, useEffect } from "react";
import Pagination from "@material-ui/lab/Pagination";

export function Datafetching() {
  const [post, setPost] = useState([]);
  const [page,setPage] = useState(1);

  useEffect(() => {
    fetch("https://gorest.co.in/public/v1/users?page=" + page)
      .then((response) => response.json())
      .then((data) => {
        setPost(data.data);
        console.log(data);
      });
  },[page]);

  const handleChange = (event, value) => {
    setPage(value)
  };

  return (
    <div>
      <Pagination onChange={handleChange} count={63} />
      <ol>
        {post.map((post) => (
          <li key={post.id}>
            name :{post.name} email:{post.email}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Datafetching;
