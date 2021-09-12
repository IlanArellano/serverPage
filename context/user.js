import { useState, useEffect, createContext } from "react";

const Context = createContext();

export function UserContext({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(window.localStorage.getItem("user"));
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
}

export default Context;
