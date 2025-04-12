import { useState } from "react";
import React from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";
import { Link ,useNavigate} from "react-router";
import { MdKeyboardArrowLeft } from 'react-icons/md';
const SearchBar = () => {
  const Navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    Navigate('/searchproduct?q=' + searchTerm);
   setIsOpen(false);
  };
  return (
    <div className={`flex items-center justify-center w-full transition-all duration-300  ${isOpen ? "absolute top-0 left-0  bg-white h-10 mt-3 z-50 w-full" : "w-auto"}`}>
      {isOpen ? (
        <form onSubmit ={handleSearch}className=" relative flex items-center justify-center w-full ">
            
         <Link to="/" 
            className="absolute left-2 top-1/2 transform -translate-y-1/2">
                <MdKeyboardArrowLeft className="h-6 w-6"/>
            </Link>
            <div className="relative w-1/2">
            <input type="text" placeholder="Search" value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} className="bg-gray-100 px-4 pl-2 pr-12 py-1.5 rounded-lg focus:outline-none w-full placeholder:text-gray-700" />
            <button type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <HiMagnifyingGlass className="h-6 w-6"/>
            </button>
            </div>
           
            <button type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <HiMiniXMark className="h-6 w-6" onClick={()=>Navigate('/product')}/>
            </button>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <HiMagnifyingGlass className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
