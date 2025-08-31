import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";
import Home from "./routes/Home";
import About from "./routes/About";
import Contacts from "./routes/Contacts";
import Products from "./routes/Products";

export default function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </>
  );
}
