import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [userData, setUserData] = useState(null);

  useState(() => {
    if (localStorage.getItem("user")) {
      console.log(typeof localStorage.getItem("user"));
      setUserData({ user: localStorage.getItem("user") });
    }
  });
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
