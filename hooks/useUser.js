import { useContext, useCallback } from "react";
import Context from "../context/user";

export default function useUser() {
  const { user, setUser } = useContext(Context);

  const setUserC = (user) => {
    try {
      window.localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
    } catch (error) {
      setUser(null);
    }
  };

  const getUser = () => {
    try {
      const user = window.localStorage.getItem("user");
      if (user) {
        return JSON.parse(user);
      }
      return null;
    } catch (error) {
      return { error: true };
    }
  };

  const login = async ({ user, password }) => {
    try {
    } catch (error) {}
  };

  const logout = useCallback(() => {
    window.localStorage.removeItem("user");
    setUser(null);
  }, [setUser]);

  return {
    login,
    logout,
    getUser,
    setUserC,
    isLoggedIn: Boolean(user),
  };
}
