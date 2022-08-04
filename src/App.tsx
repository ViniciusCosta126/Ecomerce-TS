import Rotas from "./routes";
import CartProvider from "./providers/auth";
function App() {
  return (
    <CartProvider>
      <Rotas />
    </CartProvider>
  );
}

export default App;
