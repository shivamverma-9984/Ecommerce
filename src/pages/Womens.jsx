import React, { useEffect } from "react";
import Product from "./Product";
import { products } from "@/utils/ProductData";

const Womens = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" mt-24 mx-auto px-3 ">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-6 lg:gap-2">
        {products
          .filter((item) => item.Category === "Women")
          .map((product) => (
            <Product key={product.Id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Womens;
