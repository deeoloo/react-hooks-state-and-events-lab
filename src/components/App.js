import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDark, setIsDark] = useState(false); // Renamed setInDark to setIsDark

  function handleClick() {
    setIsDark(!isDark); // Simplified
  }

  const appClass = isDark ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>
          {isDark ? "Light Mode" : "Dark Mode"} // Fixed button text
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;