import { createContext, useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "../api/axios";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const initialState = {
    email: null,
    id: null,
    pseudo: null,
    isLogged: false,
    token: null,
  };
  const [auth, setAuth] = useState(initialState);
  const userState = useMemo(
    () => ({
      auth,
      setAuth,
    }),
    [auth, setAuth]
  );

  const setConnection = async () => {
    /*     console.log("entering set connection");
    console.log("auth email is ==>", auth.email); */
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/me`,
        //       JSON.stringify({ auth }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setAuth({
        id: response.data.id,
        pseudo: response.data.username,
        email: response.data.email,
        role: response.data.role,
        isLogged: true,
      });
      /*       console.log("response data:", response.data); */
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    /*    console.log("old auth ! -->", auth); */
    setConnection();
    /*     console.log("NEW AUTH ===>", auth); */
  }, [setAuth]);

  return (
    <UserContext.Provider value={userState}>{children}</UserContext.Provider>
  );
}
UserProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
