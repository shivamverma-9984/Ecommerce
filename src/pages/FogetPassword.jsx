import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {useNavigate } from 'react-router'

const FogetPassword = () => {
    const [formdata, setformdata] = useState({
        email: "",
        newpassword: "",
      });
      const navigate=useNavigate();
      const handleChange = (e) => {
        const { name, value } = e.target;
        setformdata({ ...formdata, [name]: value });
      };

      const handleSubmit = (e) => { 
        e.preventDefault();
        if (!formdata.email || !formdata.newpassword) {
          toast.error("Please fill all the fields");    
            return; 
        }
        const users=JSON.parse(localStorage.getItem("users"))
        const user=users.find(user=> user.email === formdata.email)
        if(!user){
            toast.error("User not found")
        }
        user.password=formdata.newpassword;
        localStorage.setItem("users", JSON.stringify(users));
        toast.success("Password Changed Successfully")
        navigate("/sign-in")
        
      }

  return (
    <div className="py-16">
      <div className="flex  bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm  mt-6">
      
        <div className="w-full p-8  ">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">
           Forget Password
          </h2>

         
          <form action="" onSubmit={handleSubmit}>
            
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email 
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-2 block w-full appearance-none"
                type="email"
                name="email"
                value={formdata.email}
                onChange={handleChange}
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  New Password
                </label>
              </div>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-2 block w-full appearance-none"
                type="newpassword"
                name="newpassword"
                value={formdata.newpassword}
                onChange={handleChange}
              />
            </div>
            <div className="mt-2">
              <button
                type="submit"
                className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
              >
                Submit
              </button>
            </div>
          </form>
         
        </div>
      </div>
    </div>
  )
}

export default FogetPassword