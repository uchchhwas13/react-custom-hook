import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="p-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Current Theme: {theme}</h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
      >
        Toggle Theme
      </button>
    </header>
  );
}

export default Header;
