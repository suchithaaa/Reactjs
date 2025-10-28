import React from "react";

const Nav1 = () => {
  let newUser =false;
//   let newUser = true;
  if (newUser) {
    return <Login />;
  } else {
    return <Profile />;
  }
};
const Profile =()=>{
    return(
        <div>
            <h1>hello,welocome</h1>
            <button>logout</button>
        </div>
    )
}
const Login=()=>{
    return(
    <div>
        <button>login</button>
    </div>

    )
}
export default Nav1;


