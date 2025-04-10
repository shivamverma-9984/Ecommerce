import GenderCollection from "@/pages/GenderCollection";
import Hero from "@/pages/Hero";
import NewArrivals from "@/pages/NewArrival";
import ProductCategories from "@/pages/ProductCategories";
import Products from "@/pages/Products";
import React from "react";
const Home = () => {
  return (
    <div className="pt-16 px-3 md:px-6">
      <Hero />
      <NewArrivals />
      <ProductCategories />
      <Products />
      <GenderCollection/>
    </div>
  );
};

export default Home;
