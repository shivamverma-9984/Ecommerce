import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/cartSlice";
import Swal from 'sweetalert2/dist/sweetalert2.js'
const CartContent = ({toggleCartDrawer}) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const handleDelete=async(id)=>{
      const response=await Swal.fire({
      title: "Are you sure?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Remove it!"
    })
      if (response.isConfirmed) {
        Swal.fire({
          title: "Done!",
          text: "Item has been Removed.",
          icon: "success"
        });
        dispatch(removeFromCart(id));
        toggleCartDrawer(false);
      }   
  }
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
              <h3 className="text-sm font-semibold">{product.Name}</h3>
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
          <div className="flex flex-col gap-y-2">
          <div className="flex  items-center">
          <img className="h-[17px]" src="https://cdn-icons-png.flaticon.com/128/17988/17988582.png" alt="" srcset="" />
          <p className=" font-semibold  flex">{(product.quantity*product.Price).toFixed(2)}</p>
          </div>
            <button className="flex justify-center" onClick={()=>handleDelete(product.Id)}>
              <RiDeleteBin3Line />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContent;


