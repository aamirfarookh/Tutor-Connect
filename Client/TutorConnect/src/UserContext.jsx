import { createContext, useState } from "react";
import PropTypes from "prop-types";


export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [name, setName] = useState(null);
  const [id, setId] = useState(null);
  const [email, setEmail] = useState(null);
  const [isVarified, setIsVarified] = useState(null)
  
  return (
    <UserContext.Provider value={{ name, id, email, isVarified, setName, setId, setEmail, setIsVarified }}>
      {children}
    </UserContext.Provider>
  );
}

UserContextProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
