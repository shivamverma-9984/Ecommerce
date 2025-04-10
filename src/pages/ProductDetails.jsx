import { products } from '@/utils/ProductData'
import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { toast } from 'react-hot-toast';
import Product from './Product';
const ProductDetails = () => {
  const {Id}=useParams();
  const product = products.find((product) => product.Id ===Number(Id));
  const {Image,Name,Description,Price,Sizes}=product;
  const isLogin=localStorage.getItem("isLogin");
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    if(isLogin){
    dispatch(addToCart(product))
     toast.success('Added to cart')
  }else{
    toast.error('Please login to add items to cart')
  }}
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const relatedProduct=products.filter(item=>item.Category===product.Category)
  console.log(relatedProduct);
  return (
    <>
   
    <div class="bg-gray-100 dark:bg-gray-800 py-8 mt-16">
    <div class="max-w-6xl mx-auto  sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row ">
            <div class="md:flex-1 px-4">
                <div class="rounded-lg ">
                    <img class="w-96 h-96 object-fit" src={Image} alt="Product Image"/>
                </div>
                <div class="flex -mx-2 mt-4 mb-4">
                    <div class="w-1/2 px-2">
                        <button class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700" onClick={()=>handleAddToCart(product)}>Add to Cart</button>
                    </div>
                    <div class="w-1/2 px-2">
                        <button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
                    </div>
                </div>
            </div>
            <div class="md:flex-1 px-4">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">{Name}</h2>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                    ante justo. Integer euismod libero id mauris malesuada tincidunt.
                </p>
                <div class="flex mb-4">
                    <div class="mr-4">
                        <span class="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                        <span class="text-gray-600 dark:text-gray-300">${Price}</span>
                    </div>
                    <div>
                        <span class="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                        <span class="text-gray-600 dark:text-gray-300">In Stock</span>
                    </div>
                </div>
                
                <div class="mb-4">
                    <span class="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
                    <div class="flex items-center mt-2">
                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">S</button>
                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">M</button>
                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L</button>
                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button>
                    </div>
                </div>
                <div>
                    <span class="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                    <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                       {Description}
                    </p>
                </div>
            </div>
        </div>
    </div>
   
</div>
<h1 className='px-3 mt-2 mb-2 text-2xl md:text-3xl font-semibold'>Similar Products</h1>
<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2 px-3">

{
        relatedProduct.map((product) => (
            <Product key={product.Id} product={product} />
          ))
    }
   </div>
</>
  )
}

export default ProductDetails