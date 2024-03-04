import { useState, useContext } from "react";
import { createContext } from "react";

// setup hook
export const GlobalContext = createContext();

// hook
export const useGlobalAppContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [appState, setAppState] = useState({
    count: 0,
    user: { name: "Silas" },
  });

  return (
    <GlobalContext.Provider value={{ appState, setAppState }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default AppContext;
