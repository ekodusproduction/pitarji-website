import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-[#181821] text-white lg:px-32 md:px-12 py-12 px-4 flex flex-col lg:flex-row justify-center gap-8'>
        <div className='lg:w-[30vw]'>
            <h4 className='text-lg font-semibold mb-4'>About Us</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolores, debitis, beatae molestiae non omnis exercitationem numquam asperiores placeat nesciunt quis.</p>
        </div>
        <div className='lg:w-[25vw]'>
            <h4  className='text-lg font-semibold mb-4'>Quick Links</h4>
            <ul>
                <li className='border-b-[1px] py-2 border-slate-700'><Link to="/">Home</Link></li>
                <li className='border-b-[1px] py-2 border-slate-700'><Link to="/about">About Us</Link></li>
                <li className='border-b-[1px] py-2 border-slate-700'><Link to="/singlephase">Single Phase Motors</Link></li>
                <li className='border-b-[1px] py-2 border-slate-700'><Link to="/threephase">Three Phase Motors</Link></li>
                <li className='border-b-[1px] py-2 border-slate-700'><Link to="/contact">Contact Us</Link></li>
            </ul>
        </div>
        <div className='lg:w-[25vw]'>
            <h4  className='text-lg font-semibold mb-4'>Contact Us</h4>
            <div className='flex flex-col gap-4'>
                <span className='flex gap-2'><b className='text-[#84C550]'>Address: </b><p>Aashi Grande, Kahilipara, Guwahati - 781006, Assam</p> </span>
                <span className='flex gap-2'><b className='text-[#84C550]'>Email: </b><p>youremail@gmail.com</p> </span>
                <span className='flex gap-2'><b className='text-[#84C550]'>Phone: </b><p>+91 00000-00000</p> </span>
            </div>
        </div>
    </div>
  )
}

export default Footer