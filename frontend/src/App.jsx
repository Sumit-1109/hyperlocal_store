import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import StorePage from "./pages/StorePage/StorePage";
import Navbar from "./components/Navbar/Navbar";
import CartPage from "./pages/CartPage/CartPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage/OrderConfirmationPage";

function App() {
  return (
    <div className="frame">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store/:storeId" element={<StorePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order-confirmation" element={<OrderConfirmationPage />}  />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
