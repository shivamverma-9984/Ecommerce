import React, { useState } from 'react'
import { Link } from 'react-router'

const CategoryDropdown = () => {
    const [item, setitem] = useState(false);
  return (
     <div className="dropdown relative inline-flex">
                <button onClick={()=>setitem(!item)} type="button" data-target="dropdown-default" className="dropdown-toggle inline-flex justify-center items-center gap-2 font-semibold text-gray-700 mt-2 cursor-pointer text-center transition-all duration-500">
                Category
                </button>
                { item &&
                <div id="dropdown-default" className="dropdown-menu rounded-xl shadow-lg bg-white absolute top-full  w-42  open" aria-labelledby="dropdown-default">
                <ul className="py-4">
                  <li>
                    <Link to="/mens" onClick={()=>setitem(false)} className="block px-2 py-0.5 hover:bg-gray-100 text-gray-900 "> Mens </Link>
                  </li>
                  <li>
                    <Link to="/womens" onClick={()=>setitem(false)} className="block px-2 py-0.5 hover:bg-gray-100 text-gray-900 "> Womens </Link >
                  </li>
                  <li>
                    <Link to="/kids" onClick={()=>setitem(false)} className="block px-2 py-0.5 hover:bg-gray-100 text-gray-900 " > Kids </Link>
                  </li>
                  
                 
                </ul>
                </div>
    }
                </div>
  )
}

export default CategoryDropdown