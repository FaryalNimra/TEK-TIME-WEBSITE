import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "./components/Layout/Base.jsx";
import Home from "./Pages/Home";
import Product from "./Pages/Product.jsx";
import Contact from "./Pages/Contact.jsx";
import Support from "./Pages/Support.jsx";
import Policy from "./Pages/Policy.jsx";
import Pricing from "./Pages/Pricing.jsx";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route index path="/Product" element={<Product />} />
            <Route index path="/Contact" element={<Contact />} />
            <Route index path="/Policy" element={<Policy />} />
            <Route index path="/Support" element={<Support />} />
            <Route index path="/Pricing" element={<Pricing />} />
          </Routes>
        </Base>
      </BrowserRouter>
    </div>
  );
}

export default App;
