import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@material-ui/lab/Pagination";

import { fetchuser } from "./user/userAction";

export function Datafetching() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchuser(page));
  }, [page]);

  const { users, metaData } = useSelector((state) => state);
  


  // useEffect(() => {
  //   fetch(`https://gorest.co.in/public/v1/users?page=${page}`)
  //     .then((response) => response.json())
  //     .then(({ data, meta }) => {
  //       setPost(data);
  //       setMetaData(meta);
  //     })
  //     .catch((error) => setPost([]));
  // }, [page]);

  const handleChange = (event, value) => setPage(value);

  // const previousPage = () => setPage((previousState) => previousState - 1);
  // const nextPage = () => setPage((previousState) => previousState + 1);

  return (
    <div>
      <ol>
        {users.map(({ id, name, email }) => (
          <li key={id}>
            name :{name} email:{email}
          </li>
        ))}
      </ol>
      <Pagination onChange={handleChange} count={metaData?.pagination?.pages} />
      {/* <button onClick={page} disabled={page === 1}>
        Previous
      </button>
      <button onClick={page} disabled={metaData?.pagination?.pages === page}>Next</button> */}
    </div>
  );
}

export default Datafetching;
