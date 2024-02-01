import React from 'react'
import { FaEnvelope, FaMapMarker, FaMapMarkerAlt, FaMarker, FaPhone, FaPhoneAlt } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-[#181821] text-white lg:px-32 md:px-12 py-12 px-4 flex flex-col lg:flex-row justify-center gap-8'>
        <div className='lg:w-[50vw]'>
            <div className='mb-5'>
                <NavLink to="/">
                    <img className='w-[170px]' src='/images/logo-main-white.png'/>
                </NavLink>
            </div>
            <p className='mb-2 pl-2 text-sm'>
                <b>Welcome to Pitarji – Your Trusted Partner in Power Solutions!</b>
            </p>
            <p className='text-justify p-2 text-sm'>
                At Pitarji, we take pride in being an authorized dealership of Crompton Greaves, 
                a name synonymous with innovation and excellence in the electrical industry. As a
                dedicated and customer-centric company, we are committed to providing top-notch power 
                solutions to meet your diverse needs.
            </p>
        </div>
        <div className='lg:w-[25vw]'>
            <h4  className='text-lg font-semibold mb-6 title_heading'>Quick Links</h4>
            <ul>
                <li className='px-4 py-1 border-slate-700'><Link to="/">Home</Link></li>
                <li className='px-4 py-1 border-slate-700'><Link to="/about">About Us</Link></li>
                <li className='px-4 py-1 border-slate-700'><Link to="/singlephase">Single Phase Motors</Link></li>
                <li className='px-4 py-1 border-slate-700'><Link to="/threephase">Three Phase Motors</Link></li>
                <li className='px-4 py-1 border-slate-700'><Link to="/contact">Contact Us</Link></li>
            </ul>
        </div>
        <div className='lg:w-[25vw]'>
            <h4  className='text-lg font-semibold mb-6 title_heading'>Contact Us</h4>
            <div className='flex flex-row justify-start items-center gap-4 mb-4'>
                <span className='text-xl'><FaMapMarkerAlt/></span>
                <p className='text-sm'>Hanuman Kata Compound, Near Mittal Autozone, NH-37, Jawaharnagar, Khanapara, GHY (Assam)</p>
            </div>
            <div className='flex flex-row justify-start items-center gap-4 mb-4'>
                <span className='text-xl'><FaEnvelope/></span>
                <p className=' text-sm'>pitarjibiofuels@gmail.com</p>
            </div>
            <div className='flex flex-row justify-start items-center gap-4 mb-4'>
                <span className='text-xl'>
                    <FaPhoneAlt/>
                </span>
                <p className='text-sm'>8822771728 / 9435047690 / 8638252131</p>
            </div>
        </div>
    </div>
  )
}

export default Footer