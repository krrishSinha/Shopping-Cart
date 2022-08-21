import Shopping from "./Shopping";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import CartPage from "./CartPage/CartPage";

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
    <Routes>
      <Route exact path="/" element={<Shopping />} />
      <Route exact path="/cart" element={<CartPage />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
