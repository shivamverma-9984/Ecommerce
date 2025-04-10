import React from 'react'
import { Link } from 'react-router'

const CategoryDropdown = () => {
  return (
    <div class="relative   text-lg ">
            <div class="group">
              <button
                type="button"
                class="inline-flex justify-center items-center w-full px-4 py-2 text-md font-medium text-gray-700 hover:text-black capitalize"
              >
               Categories
                
              </button>

              <div class="absolute left-0 w-40 mt-1 origin-top-left top-8 bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                <div class="py-1">
                  <Link
                    to="/mens"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Mens
                  </Link>
                  <Link
                    to="/womens"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                   Womens
                  </Link>
                  <Link
                    to="/kids"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                   Kids
                  </Link>
                  
                </div>
              </div>
            </div>
    </div>
  )
}

export default CategoryDropdown