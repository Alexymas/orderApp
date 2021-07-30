import { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from './Store/CartProvider';

function App() {
  const [cartIsShown, setCartisShown] = useState(false)
  const showCartHadler = () => {
    setCartisShown(true)
  }
  const hideCartHandler = () => {
    setCartisShown(false)
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHadler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
