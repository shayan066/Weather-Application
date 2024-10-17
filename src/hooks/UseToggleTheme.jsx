import { useEffect, useState } from "react";


const UseToggleTheme = () => {
  const storedDarkMode = JSON.parse(localStorage.getItem("darkmode")) || false;
  const [isDarkMode, setIsDarkMode] = useState(storedDarkMode);
  const bodyElement = document.body;

  useEffect(() => {
    if (isDarkMode) {
      bodyElement.classList.add("dark");
    } else {
      bodyElement.classList.remove("dark");
    }
    localStorage.setItem("darkmode", JSON.stringify(isDarkMode));
  }, [isDarkMode, bodyElement]);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return {isDarkMode, toggleMode};
}

export default UseToggleTheme;