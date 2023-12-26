import React from 'react'
import { FaTools } from "react-icons/fa";

const Products = () => {
  return (
    <div className='px-16 pb-8'>
        <div className='my-8'>
            <p  className='text-center font-semibold text-lg text-[#84C550]'>Products</p>
            <h2 className='text-center font-bold text-3xl my-4'>Check Our Products</h2>
        </div>
        <div className='grid grid-cols-3 gap-4'>
            <div className='border-2'>
                <div className='flex items-center gap-4 mb-4 border-b-[1px]'>
                    <div className='bg-[#84C550] p-2'>
                        <FaTools color='white' size={30} />
                    </div>
                    <p className='text-center font-semibold '>PRODUCT NAME</p>
                </div>
                <div className='flex justify-center p-4'>
                    <img src="/images/products/dummyproduct.png" alt="" className='w-[250px]' />
                </div>
               
            </div>
            <div className='border-2'>
                <div className='flex items-center gap-4 mb-4 border-b-[1px]'>
                    <div className='bg-[#84C550] p-2'>
                        <FaTools color='white' size={30} />
                    </div>
                    <p className='text-center font-semibold '>PRODUCT NAME</p>
                </div>
                <div className='flex justify-center p-4'>
                    <img src="/images/products/dummyproduct.png" alt="" className='w-[250px]' />
                </div>
               
            </div>
            <div className='border-2'>
                <div className='flex items-center gap-4 mb-4 border-b-[1px]'>
                    <div className='bg-[#84C550] p-2'>
                        <FaTools color='white' size={30} />
                    </div>
                    <p className='text-center font-semibold '>PRODUCT NAME</p>
                </div>
                <div className='flex justify-center p-4'>
                    <img src="/images/products/dummyproduct.png" alt="" className='w-[250px]' />
                </div>
               
            </div>
            <div className='border-2'>
                <div className='flex items-center gap-4 mb-4 border-b-[1px]'>
                    <div className='bg-[#84C550] p-2'>
                        <FaTools color='white' size={30} />
                    </div>
                    <p className='text-center font-semibold '>PRODUCT NAME</p>
                </div>
                <div className='flex justify-center p-4'>
                    <img src="/images/products/dummyproduct.png" alt="" className='w-[250px]' />
                </div>
               
            </div>
            <div className='border-2'>
                <div className='flex items-center gap-4 mb-4 border-b-[1px]'>
                    <div className='bg-[#84C550] p-2'>
                        <FaTools color='white' size={30} />
                    </div>
                    <p className='text-center font-semibold '>PRODUCT NAME</p>
                </div>
                <div className='flex justify-center p-4'>
                    <img src="/images/products/dummyproduct.png" alt="" className='w-[250px]' />
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Products