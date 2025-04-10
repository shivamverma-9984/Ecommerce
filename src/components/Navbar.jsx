import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import CartDrawer from "./../pages/CartDrawer";
import SearchBar from "./../pages/SearchBar";
import { useSelector } from "react-redux";
import CategoryDropdown from "../pages/CategoryDropdown";
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  LogIn,
  Menu,
  X,
  Store,
} from "lucide-react";
const Navbar = () => {
  const [draweOpen, setDrawerOpen] = useState(false);
  const [isauth, setIsAuth] = useState(true);
  const toggleCartDrawer = () => {
    setDrawerOpen(!draweOpen);
  };
  const navigate = useNavigate();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const toggleNavDrawer = () => {
    setNavbarOpen(!navbarOpen);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isLogin = localStorage.getItem("isLogin");
  const handleAuth = () => {
    localStorage.removeItem("isLogin");
    navigate('/')

  }
  useEffect(() => {
    
  }, [isLogin]);

  return (
    <>
      {/* navbar */}
      <div className="fixed  top-0 w-full z-50 shadow-2xl  bg-white  mx-auto flex items-center justify-between py-4 px-3 md:px-6">
        {/* left-logo */}
        <div className="">
          <Link to="/" className=" text-2xl font-medium">
            Rabbit
          </Link>
        </div>

        {/* center-part */}
        <div className=" hidden md:flex space-x-6 ">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/product" className="nav-link">
            All Product
          </Link>

          <CategoryDropdown />

          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </div>

        {/* right-part */}
        <div className="flex items-center space-x-4">
          <div className="overflow-hidden">
            <SearchBar />
          </div>
          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-black"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-1 bg-red-400 text-white text-xs rounded-full px-1.5 py-0.5">
              {isLogin ? cartItems.length:"0"}
            </span>
          </button>
          {/* searBar */}
          {isLogin ? (
            <Link
              to="/profile"
              className="hover:text-black flex justify-between"
            >
              <div className="relative   text-lg ">
                <div className="group ">
                  <button
                    type="button"
                    className="inline-flex justify-center items-center w-full px-4 py-2  text-md font-semibold text-gray-700 hover:text-black capitalize"
                  >
                    <HiOutlineUser className="h-6 w-6 text-gray-700" />
                  </button>

                  <div className="absolute left-0 w-40 mt-1 origin-top-left top-8 bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                    <div className="py-1">
                      <Link
                        to=""
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" 
                      >
                        Profile
                      </Link>
                      <button
                       
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleAuth}
                      >
                        Logout{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ) : (
            <Link
              to="sign-in"
              className="flex items-center space-x-1 bg-indigo-500 text-white px-1 py-1 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <LogIn className="h-5 " />
              <span>Sign In</span>
            </Link>
          )}

          <button onClick={toggleNavDrawer} className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
      <CartDrawer draweOpen={draweOpen} toggleCartDrawer={toggleCartDrawer} />

      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-white transform transition-transform duration-300 flex flex-col z-50 ${
          navbarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between  p-4">
          <div className=" absolute md:hidden flex flex-col space-y-6 mt-8 text-xl">
            <Link to="/" onClick={toggleNavDrawer} className="nav-link">
              Home
            </Link>
            <Link to="/product" onClick={toggleNavDrawer} className="nav-link">
              All Product
            </Link>
            <Link to="/mens" onClick={toggleNavDrawer} className="nav-link">
              Men
            </Link>
            <Link to="womens" onClick={toggleNavDrawer} className="nav-link">
              Women
            </Link>
          </div>
          <button onClick={toggleNavDrawer} className="r">
            <IoMdClose className="h-6 w-6 text-gray-600 right-0" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
