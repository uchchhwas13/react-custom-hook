import React, { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";
import Header from "./Header";
import Content from "./Content";

function ThemeUsage() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <Header />
        <Content />
      </div>
    </ThemeContext.Provider>
  );
}

export default ThemeUsage;
