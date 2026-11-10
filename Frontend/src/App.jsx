import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Construction from "./Components/Construction/Construction.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Product from "./Components/Products/Products.jsx";
import Industrial from "./Pages/Industrial.jsx";
import ContactPage from "./Components/Contactus/ContactPage.jsx";
import HowToOrderPage from "./Components/HowToOrder/HowToOrderPage.jsx";

import DepartmentsPage from "./Pages/DepartmentsPage";





function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/construction" element={<Construction />} />

        <Route path="/products" element={<Product />} />
        <Route path="/industrial" element={<Industrial />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/how-to-order" element={<HowToOrderPage />} />
        <Route path="/departments" element={<DepartmentsPage />} />

      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;