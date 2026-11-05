import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Construction from "./Components/Construction/Construction.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/products" element={<Products />} /> */}
        <Route path="/construction" element={<Construction />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;