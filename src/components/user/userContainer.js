import React, { useEffect } from "react";
  // import { connect } from "react-redux";
  // import { fetchuser } from "./userAction";

const userContainer = ({ UserData, fetchuser }) => {
 
  // return UserData.loading ? (
  //   <h1>loading</h1>
  // ) : UserData.error ? (
  //   <h2>{UserData.error}</h2>
  // ) : (
  //   <div>
  //     <h3>userList </h3>
  //     <div>
  //       {UserData &&
  //         UserData.Users &&
  //         UserData.Users.map((user) => <p>{user.name}</p>)}
  //     </div>
  //   </div>
  // );
  return <p>Hello</p>
}

export default userContainer;
// const mapStatetoProps = (state) => {
//   return {
//     userData: state.user,
//   };
// };

// const mapsDispatchToProps = (dispatch) => {
//   return {
//     fetchuser: () => dispatch(fetchuser()),
//   };
// };

// export default connect(mapStatetoProps, mapsDispatchToProps)(userContainer);
