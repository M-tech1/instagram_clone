import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);
const UserProvider = UserContext.Provider;

const useUserContextModel = () => {
  const [user, setUser] = useState(null);

  return {
    user,
    setUser,
  };
};
const useUserContext = () => useContext(UserContext);
export { UserProvider, useUserContextModel, useUserContext };
