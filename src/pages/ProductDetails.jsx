import { products } from "@/utils/ProductData";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toast } from "react-hot-toast";
import Product from "./Product";
import ProductRating from "./ProductRating";

const ProductDetails = () => {
  const { Id } = useParams();
  const product = products.find((product) => product.Id === Number(Id));
  const { Image, Name, Description, Price, Sizes,Rating } = product;
  const isLogin = localStorage.getItem("isLogin");
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    if (isLogin) {
      dispatch(addToCart(product));
      toast.success("Added to cart");
    } else {
      toast.error("Please login to add items to cart");
    }
  };
  window.scrollTo({ top: 0, behavior: "smooth" });
  const relatedProduct = products.filter(
    (item) =>
      item.Category === product.Category &&
      item.subCategory === product.subCategory
  );
  return (
    <>
      <div className=" dark:bg-gray-800 py-8 mt-16">
        <div className="max-w-4xl mx-auto  sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row ">
            <div className="md:flex-1 px-4">
              <div className="rounded-lg ">
                <img
                  className="w-96 h-96 object-fit"
                  src={Image}
                  alt="Product Image"
                />
              </div>
              <div className="flex -mx-2 mt-4 mb-4">
                <div className="w-1/2 px-2">
                  <button
                    className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {Name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {Description}
              </p>
              <div className="flex gap-2">
                <p>Rating</p>
               <ProductRating rating={Rating} count={2} />
                
              </div>
              <div className="flex mb-4">
                <div className="mr-4 flex">
                  <p className="font-bold text-gray-700 dark:text-gray-300">
                    Price: ₹ <span className=" font-medium text-gray-600 dark:text-gray-300">{Price}</span>
                  </p>
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Availability : 
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    In Stock
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Select Size:
                </span>
                <div className="flex items-center mt-2">
                  <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    S
                  </button>
                  <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    M
                  </button>
                  <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    L
                  </button>
                  <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    XL
                  </button>
                  <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    XXL
                  </button>
                </div>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Product Description:
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {Description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="px-3 mt-4 mb-4 text-2xl md:text-3xl font-semibold">
     You May Also Like
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2 px-3">
        {relatedProduct.map((product) => (
          <Product key={product.Id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductDetails;
