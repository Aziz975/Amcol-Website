import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Construction from "./Components/Construction/Construction.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Product from "./Components/Products/Products.jsx";




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