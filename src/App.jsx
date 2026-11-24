import { useState } from "react";
import DarkModeToggle from "./components/DarkModeToggle.jsx";
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  return (
    <div className={`App${darkMode ? " dark" : ""}`}>
      <header className="app-header">
        <h1>Grocery Shop</h1>
        <DarkModeToggle
          darkMode={darkMode}
          onToggle={() => setDarkMode((previousMode) => !previousMode)}
        />
      </header>

      <label htmlFor="category-filter">Filter by Category: </label>
      <select
        id="category-filter"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList
        category={category}
        onAddToCart={(product) => setCart((items) => [...items, product])}
      />
      <Cart cart={cart} />
    </div>
  )
}
