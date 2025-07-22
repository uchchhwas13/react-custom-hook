import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Content() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className="p-6">
      <p className="text-lg">
        The theme inside <strong>Content</strong> is: <em>{theme}</em>
      </p>
    </main>
  );
}

export default Content;
