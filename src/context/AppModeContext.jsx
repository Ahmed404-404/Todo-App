import { createContext, useContext, useState } from "react";
import { TodosContext } from "./TodosContext";

export const AppModeContext = createContext();

export const AppModeProvider = ({ children }) => {


    const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <AppModeContext.Provider
      value={{isDarkMode, setIsDarkMode}}
    >
      {children}
    </AppModeContext.Provider>
  );
};
