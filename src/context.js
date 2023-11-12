// /* eslint-disable */

// import { createContext, useReducer } from "react";

// export const themeContext = createContext();

// const initialState = { darkMode: false };

// const themeReducer = (state, action) => {
//     switch (action.type) {
//         case "toggle":
//         return {
//             darkMode: !state.darkMode,
//         };
//         default:
//         return state;
//     }
// };

// export const ThemeProvider = (props) => {
//     const [state, dispatch] = useReducer(themeReducer, initialState);

//     return (
//         <themeContext.Provider value={{ state, dispatch }}>
//         {props.children}
//         </themeContext.Provider>
//     );
// };

// context.js
import React, { createContext, useState } from 'react';

export const themeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const contextValue = {
    darkMode,
    toggleDarkMode,
  };

  return (
    <themeContext.Provider value={contextValue}>
      {children}
    </themeContext.Provider>
  );
};