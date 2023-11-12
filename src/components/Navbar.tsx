import React, { useState } from "react";
import "swiper/swiper-bundle.css";
import "./Navbar.css";
// import { themeContext } from "../context";
import { useTheme } from "@mui/material";

import { IconButton } from "@mui/material";
import Switch from "@mui/material/Switch";
type variable = {
  setmyMOde: Function;
};

function Navbar({ setmyMOde }: variable) {
  const [isSidebarClosed, setSidebarClosed] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => {
    setSidebarClosed(!isSidebarClosed);
  };

  // const toggleDarkMode = () => {
  //     setDarkMode(!isDarkMode);
  // };

  // const theme = useContext(themeContext);

  const theme = useTheme(); // const darkMode = theme.darkMode;

  // const darkModeClass = isDarkMode ? 'dark' : '';
  return (
    // <nav className={`sidebar ${isSidebarClosed ? 'close' : ''} ${darkModeClass}`}>
    // <nav style={{ color: darkMode ? "white" : "" }}>
    <nav>
      <header>
        <div>
          <h1>oohtest3</h1>
        </div>
        <div className="image-text">
          <span className="image">
            <img src="images/logo.png" alt="logo" />
          </span>
          <div className="text header-text">
            <span className="name">CodingLab</span>
            <span className="profession">Web developer</span>
          </div>
        </div>
        <i className="bx bx-chevron-right toggle" onClick={toggleSidebar}></i>
      </header>
      <div className="menu-bar">
        <div className="menu">
          <li className="search-box">
            <i className="bx bx-search icon"></i>
            <input type="text" placeholder="Search..." />
          </li>
          <ul className="menu-links">
            <li className="nav-link">
              <a href="#">
                <i className="bx bx-home-alt icon"></i>
                <span className="text nav-text">Dashboard</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <i className="bx bx-home-alt icon"></i>
                <span className="text nav-text">Dashboard</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <i className="bx bx-home-alt icon"></i>
                <span className="text nav-text">Dashboard</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <i className="bx bx-home-alt icon"></i>
                <span className="text nav-text">Dashboard</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <i className="bx bx-home-alt icon"></i>
                <span className="text nav-text">Dashboard</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <i className="bx bx-home-alt icon"></i>
                <span className="text nav-text">Dashboard</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="bottom-content">
          <li className="">
            <a href="#">
              <i className="bx bx-log-in icon"></i>
              <span className="text nav-text">Login/Sign Up</span>
            </a>
          </li>
          <li className="mode">
            <div className="moon-sun">
              {/* <i className="bx bx-moon icon moon"></i>
                            <i className="bx bx-sun icon sun"></i> */}
              <i
                className={`bx ${isDarkMode ? "bx-sun" : "bx-moon"} icon moon`}
              ></i>
            </div>
            <span className="mode-text text">
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </span>
            <div className="toggle-switch">
              <IconButton
                className="h1"
                onClick={() => {
                  localStorage.setItem(
                    "currentMode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );

                  setmyMOde(theme.palette.mode === "light" ? "dark" : "light");
                }}
                color="inherit"
              >
                <Switch />
              </IconButton>
            </div>
          </li>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

// function Navbar() {
//     const [isSidebarClosed, setSidebarClosed] = useState(false);
//     const [isDarkMode, setDarkMode] = useState(false);

//     const toggleSidebar = () => {
//         console.log("Toggle Sidebar");
//         setSidebarClosed(!isSidebarClosed);
//     };

//     const toggleDarkMode = () => {
//         console.log("Toggle Dark Mode");
//         setDarkMode(!isDarkMode);
//     };

//     const darkModeClass = isDarkMode ? 'dark' : '';

//     return (
//         <nav className="sidebar close">
//             <header>
//                 <div className="image-text">
//                     <span className="image">
//                         <img src="images/logo.png" alt="logo" />
//                     </span>
//                     <div className="text header-text">
//                         <span className="name">CodingLab</span>
//                         <span className="profession">Web developer</span>
//                     </div>
//                 </div>
//                 <i className="bx bx-chevron-right toggle" onClick={toggleSidebar}></i>
//             </header>
//             <div className="menu-bar">
//                 <div className="menu">
//                     <li className="search-box">
//                         <i className='bx bx-search icon' ></i>
//                         <input type="text" placeholder="Search..." />
//                     </li>
//                     <ul className="menu-links">
//                         {/* Vos liens de menu ici */}
//                     </ul>
//                 </div>
//                 <div className="bottom-content">
//                     <li className="">
//                         <a href="#">
//                             <i className='bx bx-log-in icon' ></i>
//                             <span className="text nav-text">Login/Sign Up</span>
//                         </a>
//                     </li>
//                     <li className="mode" onClick={toggleDarkMode}>
//                         <div className="moon-sun">
//                             <i className={`bx bx-moon icon moon ${darkModeClass}`}></i>
//                             <i className={`bx bx-sun icon sun ${darkModeClass}`}></i>
//                         </div>
//                         <span className="mode-text text">{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
//                         <div className="toggle-switch">
//                             <span className="switch"></span>
//                         </div>
//                     </li>
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;

// import React, { useState } from 'react'; import Swiper from 'swiper'; import 'swiper/swiper-bundle.css';

// const Body = () => { const [darkMode, setDarkMode] = useState(false); const [sidebarOpen, setSidebarOpen] = useState(false);

// const toggleSidebar = () => { setSidebarOpen(!sidebarOpen); };

// const toggleDarkMode = () => { setDarkMode(!darkMode); };

// React.useEffect(() => { const body = document.querySelector("body"); const sidebar = body.querySelector(".sidebar"); const section = document.getElementById("tranding"); const modeText = body.querySelector(".mode-text");

// if (darkMode) {
//   body.classList.add("dark");
//   section.classList.add("dark");
//   modeText.innerText = "Light Mode";
// } else {
//   body.classList.remove("dark");
//   section.classList.remove("dark");
//   modeText.innerText = "Dark Mode";
// }

// let TrandingSlider = new Swiper('.tranding-slider', {
//   effect: 'coverflow',
//   grabCursor: true,
//   centeredSlides: true,
//   loop: true,
//   slidesPerView: 'auto',
//   coverflowEffect: {
//     rotate: 0,
//     stretch: 0,
//     depth: 100,
//     modifier: 2.5,
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   }
// });
// }, [darkMode]);

// return ( <div className="body"> <button className="toggle" onClick={toggleSidebar}>Toggle Sidebar</button> <button className="toggle-switch" onClick={toggleDarkMode}>Toggle Dark Mode
