import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import AddProducts from "./pages/AddProducts";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import UserContextProvider, {
  UserContext,
} from "./context/UserContextProvider";
import { useContext, useEffect } from "react";
import ProductInfo from "./pages/ProductInfo";
import { addProduct } from "./utils/fireBaseUtil";
const App = () => {
  const { userData } = useContext(UserContext);

  useEffect(() => {
    console.log(userData);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={userData === null ? <Login /> : <Home />} />
        <Route path="/category" element={<ProductList />} />
        <Route path="/product" element={<ProductInfo />} />
        <Route path="/addproduct" element={<AddProducts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
