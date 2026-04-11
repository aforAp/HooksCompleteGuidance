import Header from "./components/Header";
import Meals from "./components/Meals";
import "./index.css";
import { CartContextProvider } from "./store/CartContext.jsx";
import { UserProgressContextProvider } from "./store/UserProgressContext.jsx";
import Cart from "./components/UI/Cart.jsx";
import Checkout from "./components/UI/Checkout.jsx";
function App() {
  return (
      <UserProgressContextProvider>
    <CartContextProvider>

      <Header />
      <Meals />
      <Cart />
      <Checkout />
    </CartContextProvider>
      </UserProgressContextProvider>
  );
}

export default App;
