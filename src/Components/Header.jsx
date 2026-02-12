import { useEffect, useState } from "react";
import logo from '../assets/logo.png';

export default function Header() {
  // Initialize with a default theme
  const [theme, setTheme] = useState("light");
useEffect(() => {
    // This clears any old theme and adds the new one to the very top of the app
    document.documentElement.className = ""; 
    document.documentElement.classList.add(theme);
  }, [theme]); // <--- Add this [theme] here!

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="TaskFlow Logo" />  
        <span>TaskFlow</span>
      </div>
      <div className='themeSelector'>
        <span onClick={() => setTheme("light")} className={theme === "light" ? "light activeTheme" : "light"}></span>
        <span onClick={() => setTheme("medium")} className={theme === "medium" ? "medium activeTheme" : "medium"}></span>
        <span onClick={() => setTheme("dark")} className={theme === "dark" ? "dark activeTheme" : "dark"}></span>
        <span onClick={() => setTheme("gOne")} className={theme === "gOne" ? "gOne activeTheme" : "gOne"}></span>
        <span onClick={() => setTheme("gTwo")} className={theme === "gTwo" ? "gTwo activeTheme" : "gTwo"}></span>
        <span onClick={() => setTheme("gThree")} className={theme === "gThree" ? "gThree activeTheme" : "gThree"}></span>
      </div>
    </header>
  );
}