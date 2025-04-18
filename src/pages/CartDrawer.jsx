import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import CartContent from './CartContent';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { toast } from "react-hot-toast";

const CartDrawer = ({draweOpen,toggleCartDrawer}) => {  
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = cartItems
    .reduce((acc, item) => acc + item.Price * item.quantity, 0)
    .toFixed(2);
  const islogin =localStorage.getItem("isLogin")
  const handleSubmit=()=>{
    if(cartItems.length){
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your order has been Placed",
        showConfirmButton: false,
        timer: 1500
      })
    }else{
      toast.error("Before checkout Add  Items in the cart")
  }
  }
  return (
    <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-white transform transition-transform duration-300 flex flex-col z-50 ${draweOpen?"translate-x-0":"translate-x-full"}`}>
    <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
            <IoMdClose className="h-6 w-6 text-gray-600"/>
        </button>
    </div>
    {/* cart content with scrollable area */}
    <div className='flex-grow px-4 overflow-y-auto'>
    <h2 className='text-xl font-semibold mb-4'>Your Cart</h2>
   
    
   {
    islogin && <CartContent toggleCartDrawer={toggleCartDrawer}/>
   } 
    </div>

    <div className='p-3 bg-white sticky bottom-0'>
      <div className='flex justify-between items-center mb-2 text-xl'>
        <p className='font-semibold'>total Price</p>
        <div className='flex justify-center'>
        <img className="h-[22px] mt-1" src="https://cdn-icons-png.flaticon.com/128/17988/17988582.png" alt="" srcSet="" />

<h1>{totalAmount}</h1>
        </div>
      
        </div>
      <button className='w-full bg-black text-white py-3 rounded-lg font-semibold' onClick={handleSubmit}>ChecKout</button>
      <p className='text-sm tracking-tighter text-gray-500 mt-2'>Shipping ,taxes</p>
    </div>

    </div>
  )
}

export default CartDrawer



