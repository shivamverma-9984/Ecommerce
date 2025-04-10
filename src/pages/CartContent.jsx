import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/cartSlice";
const CartContent = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  return (
    <div>
      {cartItems.map((product) => (
        <div
          key={product.Id}
          className="flex items-center justify-between py-2 border-b "
        >
          <div className="flex items-start">
            <img
              src={product.Image}
              alt={product.Name}
              className="w-16 h-16 object-cover mr-4"
            />
            <div>
              <h3 className="text-ms font-semibold">{product.Name}</h3>
              {/* <p className='text-gray-500 text-sm'>Size: {product.size} | Color: {product.color}</p> */}
              <div className="flex items-center mt-2">
                <button
                  className="border rounded px-2  font-medium"
                  onClick={() => dispatch(decrementQuantity(product.Id))}
                >
                  -
                </button>
                <span className="mx-4">{product.quantity}</span>
                <button
                  className="border rounded px-2  font-medium"
                  onClick={() => dispatch(incrementQuantity(product.Id))}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className=" font-semibold">${(product.quantity*product.Price).toFixed(2)}</p>
            <button onClick={() => dispatch(removeFromCart(product.Id))}>
              <RiDeleteBin3Line />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContent;
