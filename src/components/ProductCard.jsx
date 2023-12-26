import React from 'react'
import Button from '../ui/Button'
import {  useNavigate } from "react-router-dom";

const ProductCard = ({data}) => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col justify-center items-center gap-4 border-[1px] px-8 py-4 shadow-sm'>
        <img className='w-[200px]' src="/images/products/single_phase_motor.png" alt="" />
        <h3 className='font-semibold text-lg'>{data.title}</h3>
        
        <div className='flex flex-col items-center gap-2'>
            <p className='text-md text-slate-700'>{data.description.slice(0,80)}...</p>
            <Button category={'primarybtn'} clickHandler={()=>navigate('/singlephasedetails', { state: {key: data} })}>View Details</Button>
        </div>
    </div>
  )
}

export default ProductCard