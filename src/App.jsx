import Header from "./components/Header";
import Products from "./components/Products";
import CartContextProvider from "./context/CartContextProvider";
import CartItemContext from "./context/CartItemContext";

function App() {
  return (
    <CartItemContext>
      <CartContextProvider>
        <Header />
        <Products />
      </CartContextProvider>
    </CartItemContext>
  );
}

export default App;
