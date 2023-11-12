import React from 'react';
import Navbar from './components/Navbar.tsx';
// import { ThemeProvider } from './context';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import  { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
function App() {
  const [mymode, setmyMOde] = useState(
    localStorage.getItem("currentMode") === null
      ? "dark"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );
  return (
    <ThemeProvider
      theme={createTheme({
        palette: {
          mode: mymode,
        },
      })}
    >
      <CssBaseline />
      <Navbar {...{ setmyMOde }} />
      {/* Other components */}
    </ThemeProvider>
  );
}

export default App;