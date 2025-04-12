import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Home from "./components/Home";
import SearchProduct from "./pages/SearchProduct";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Mens from "./pages/Mens";
import Womens from "./pages/Womens";
import Contact from "./pages/Contact";
import About from './pages/About';
import ForgetPassword from "./pages/FogetPassword";
import Kids from "./pages/Kids";
import PageNotFound from "./pages/PageNotFound";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/forget-password" element={<ForgetPassword/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/searchproduct" element={<SearchProduct />} />
          <Route path="/product/:Id" element={<ProductDetails />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
