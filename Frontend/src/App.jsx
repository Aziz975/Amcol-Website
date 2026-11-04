import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";

import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";


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
        <Route path="/products" element={<Products />} />
        <Route path="/construction" element={<Construction />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;