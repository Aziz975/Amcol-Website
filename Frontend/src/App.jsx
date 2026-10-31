import { Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar.jsx";
import Home from "../Components/Home/Home.jsx";


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
    </>
  );
}

export default App;