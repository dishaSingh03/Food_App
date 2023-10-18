import "./App.css";
import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
import Cart from "./component/Cart/Cart";
import React, { useState } from "react";
import CartProvider from "./component/Store/CartProvider";
import Search from "./component/Layout/Search";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Search />

      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
