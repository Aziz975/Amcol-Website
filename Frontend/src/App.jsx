import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";

import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Product from "./Components/Products/Products.jsx";



function Products() {
  return <h1 className="p-5">Products Page</h1>;
}
function Construction() {
  return <h1 className="p-5">Construction Page</h1>;
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/products" element={<Product/>} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;