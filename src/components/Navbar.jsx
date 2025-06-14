import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
import { HiBars3BottomRight, HiH1 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import CartDrawer from "./../pages/CartDrawer";
import SearchBar from "./../pages/SearchBar";
import { useSelector } from "react-redux";
import CategoryDropdown from "../pages/CategoryDropdown";

const Navbar = () => {
  const [draweOpen, setDrawerOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [item, setitem] = useState(false);
  const toggleCartDrawer = () => {
    setDrawerOpen(!draweOpen);
  };
  const navigate = useNavigate();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const toggleNavDrawer = () => {
    setNavbarOpen(!navbarOpen);
    setborders(true);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isLogin = localStorage.getItem("isLogin");
  const handleAuth = () => {
    localStorage.removeItem("isLogin");
    navigate("/");
  };
  useEffect(() => {
    setitem(false);
  }, [isLogin]);

  return (
    <>
      {/* navbar */}
      <div className="fixed  top-0 w-full z-50 shadow-md  bg-white  mx-auto flex items-center justify-between py-4 px-3 md:px-6">
        {/* left-logo */}
        <div className="">
          <Link to="/" className=" text-2xl font-medium">
            Rabbit
          </Link>
        </div>

        {/* center-part */}
        <div className=" hidden md:flex space-x-6 ">
          <Link
            to="/"
            className={`nav-link ${
              activeItem === "Home" ? "border-b-2" : "border-none"
            }`}
            onClick={() => setActiveItem("Home")}
          >
            Home
          </Link>
          <Link
            to="/product"
            className={`nav-link ${
              activeItem === "All Product" ? "border-b-2" : "border-none"
            }`}
            onClick={() => setActiveItem("All Product")}
          >
            Products
          </Link>

          <CategoryDropdown />

          <Link
            to="/about"
            className={`nav-link ${
              activeItem === "About" ? "border-b-2" : "border-none"
            }`}
            onClick={() => setActiveItem("About")}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${
              activeItem === "Contact" ? "border-b-2" : "border-none"
            }`}
            onClick={() => setActiveItem("Contact")}
          >
            Contact
          </Link>
        </div>

        {/* right-part */}
        <div className="flex items-center  md:space-x-4">
          <div className="overflow-hidden mr-2 mt-1 md:mr-4">
            <SearchBar />
          </div>
          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-black  mr-5"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-1 bg-red-400 text-white text-xs rounded-full px-1.5 py-0.5">
              {isLogin ? cartItems.length : "0"}
            </span>
          </button>
          {/* searBar */}
          {isLogin ? (
            <div className="dropdown relative inline-flex">
              <button
                onClick={() => setitem(!item)}
                type="button"
                data-target="dropdown-default"
                className="dropdown-toggle inline-flex justify-center items-center gap-2 md:px-3  rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500"
              >
                <HiOutlineUser className="text-[23px]" />
              </button>
              {item && (
                <div
                  id="dropdown-default"
                  className="dropdown-menu rounded-xl shadow-lg bg-white absolute top-full -ml-6 w-72 mt-2 open"
                  aria-labelledby="dropdown-default"
                >
                  <ul className="py-4">
                    <li>
                      <Link
                        className="block px-2 py-0.5 hover:bg-gray-100 text-gray-900 font-medium"
                        to="javascript:;"
                      >
                        {" "}
                        Profile{" "}
                      </Link>
                    </li>

                    <li>
                      <Link
                        onClick={handleAuth}
                        className="block px-2 py-0.5 hover:bg-gray-100 text-red-500 font-medium"
                        to="javascript:;"
                      >
                        {" "}
                        Log Out{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="sign-in"
              className="flex items-center space-x-1 px-3 py-1 rounded-lg bg-amber-300 transition-colors"
            >
              <span>Login</span>
            </Link>
          )}

          <button onClick={toggleNavDrawer} className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 ml-1 text-gray-700" />
          </button>
        </div>
      </div>
      <CartDrawer draweOpen={draweOpen} toggleCartDrawer={toggleCartDrawer} />

      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-white transform transition-transform duration-300 flex flex-col z-50 ${
          navbarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-start  px-2 mt-2">
          <div className=" absolute md:hidden flex flex-col space-y-3 mt-8 text-xl">
            <Link to="/" onClick={toggleNavDrawer}>
              Home{" "}
            </Link>
            <Link
              to="/product"
              onClick={toggleNavDrawer}
              className={`nav-link ${
                activeItem === "" ? "border-b-2" : "border-none"
              }`}
            >
            Products
            </Link>
            <Link
              to="/mens"
              onClick={toggleNavDrawer}
              className={`nav-link ${
                activeItem === "" ? "border-b-2" : "border-none"
              }`}
            >
              Men
            </Link>

            <Link
              to="womens"
              onClick={toggleNavDrawer}
              className={`nav-link ${
                activeItem === "" ? "border-b-2" : "border-none"
              }`}
            >
              Women
            </Link>

            <Link
              to="about"
              onClick={toggleNavDrawer}
              className={`nav-link ${
                activeItem === "" ? "border-b-2" : "border-none"
              }`}
            >
              About
            </Link>

            <Link
              to="contact"
              onClick={toggleNavDrawer}
              className={`nav-link ${
                activeItem === "" ? "border-b-2" : "border-none"
              }`}
            >
              Contact{" "}
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
