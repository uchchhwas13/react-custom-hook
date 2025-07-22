import React, { useState } from "react";
import ThemeContext from "./ThemeContext";
import Header from "./Header";
import Content from "./Content";

function CreateContextExample() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const isDark = theme === "dark";

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`min-h-screen ${isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"} transition-colors duration-300`}>
        <Header />
        <Content />
      </div>
    </ThemeContext.Provider>
  );
}

export default CreateContextExample;
