import React from "react";
import { Link } from "react-router";
import { motion } from 'framer-motion';

const Product = ({ product }) => {
  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="flex flex-col rounded overflow-hidden  cursor-pointer hover:scale-[1.01] transition-all">
        <Link to={`/product/${product.Id}`} className="w-full">
          <img
            src={product.Image}
            alt="Product 1"
            className=" h-64 object-cover object-top aspect-[230/307]"
          />
        </Link>

        <div className="mt-1 flex-1 flex flex-col">
          <h5 className="px-1 text-sm text-slate-900 line-clamp-2">
            {product.Name}
          </h5>
          <div className="flex">
          <img className="h-[14px] mt-1" src="https://cdn-icons-png.flaticon.com/128/17988/17988582.png" alt="" srcset="" />
          <h6 className="text-sm font-semibold text-slate-900 mb-1">
            {product.Price}
          </h6>
          </div>
         
        </div>
      </div>
      </motion.div>
    </>
  );
};

export default Product;
