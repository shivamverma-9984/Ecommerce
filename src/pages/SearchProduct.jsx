import React, { useEffect, useState } from "react";
import { products } from "../utils/ProductData";
import { Link, useSearchParams } from "react-router";

const SearchProduct = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || ""; // default to empty string if null
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
    } else {
      const filtered = products.filter((p) =>
        p.Name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }
  }, [query]);

  return (
    <div className="mt-32 mx-auto px-3">
      {/* <h2 className="text-2xl font-bold text-slate-900 mb-10">
        Explore All Products
      </h2> */}

      {results.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No product available.
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
          {results.map((product) => (
            <div
              key={product.Id}
              className="bg-white flex flex-col rounded overflow-hidden cursor-pointer hover:scale-[1.01] transition-all"
            >
              <Link to={`/product/${product.Id}`} className="w-full">
                <img
                  src={product.Image}
                  alt={product.Name}
                  className="w-full object-cover object-top aspect-[230/307]"
                />
              </Link>

              <div className="mt-1 flex-1 flex flex-col">
                <h5 className="text-sm sm:text-base text-slate-900 line-clamp-2">
                  {product.Name}
                </h5>
                <h6 className="text-sm sm:text-base font-semibold text-slate-900">
                  ${product.Price}
                </h6>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchProduct;
