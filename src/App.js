import { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import "./App.css";
import Home from "./components/Homepage/Home";
// import Modal from '@mui/material/Modal';
import { Box, Button, Typography } from "@mui/material";

import { UserProvider, useUserContextModel } from "./contexts/user";
function App({ pageProps }) {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

const AppWithUserContext = () => {
  const contextData = useUserContextModel();
  return (
    <UserProvider value={contextData}>
      <App />
    </UserProvider>
  );
};

export default AppWithUserContext;
