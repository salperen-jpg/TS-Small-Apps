import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Product />
      <Cart />
    </div>
  );
}

export default App;
