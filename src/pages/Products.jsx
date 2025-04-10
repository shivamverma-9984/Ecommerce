import React from "react";
import { products } from "../utils/ProductData";
import Product from "./Product";
const Products = () => {
  
  return (
      <div className=" mt-4 mx-auto px-3 ">
        <h2 class="text-2xl font-bold text-slate-900 mb-10">
          Explore All Products
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
          {products.map((product) => (
            <Product key={product.Id} product={product} />
          ))}
        </div>
      </div>
  );
};

export default Products;
