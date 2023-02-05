import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import AddProducts from "./pages/AddProducts";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { useContext } from "react";
import ProductInfo from "./pages/ProductInfo";
import ChatScreen from "./pages/ChatScreen";
import { UserContext } from "./context/UserContextProvider";

const App = () => {
  const { userData } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={userData === null ? <Login /> : <Home />} />
        <Route path="/category" element={<ProductList />} />
        <Route path="/product" element={<ProductInfo />} />
        <Route path="/addproduct" element={<AddProducts />} />
        <Route path="/chat" element={<ChatScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
