import React, { useEffect } from "react";
import Product from "./Product";
import { products } from "@/utils/ProductData";

const Mens = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" mt-18 mx-auto px-3 ">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6">
        {products
          .filter((item) => item.Category === "Men")
          .map((product) => (
            <Product key={product.Id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Mens;
