import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [username, setLoggedInUserName] = useState(null);
  const [id, setId] = useState(null);
  useEffect(() => {
    if (document.cookie) {
      axios.get("/user/profile")
        .then((response) => {
          setLoggedInUserName(response.data.userName);
          setId(response.data.userId);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <UserContext.Provider value={{ username, id, setLoggedInUserName, setId }}>
      {children}
    </UserContext.Provider>
  );
}

UserContextProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
