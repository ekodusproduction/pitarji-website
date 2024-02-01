import React,{useState} from 'react'
import Dropdown from './Dropdown'
import { FiMenu } from "react-icons/fi"
import { NavLink } from 'react-router-dom';


const dropdownList = [
    {
        index: 1,
        title: 'Single Phase Motors',
        link:'/singlephase',
       
    },
    {
        index: 2,
        title: 'LT Motor',
        link:'/threephase',
    

    }
]

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const openMenuHandler = () => {

        isMenuOpen ? setMenuOpen(false) : setMenuOpen(true)
    }

    const handleMouseEnter = () => {
        setDropdownOpen(true);
      };
    
      const handleMouseLeave = () => {
        setDropdownOpen(false);
      };
    
      const handleDropdownMouseEnter = () => {
        setDropdownOpen(true);
      };
    
      const handleDropdownMouseLeave = () => {
        setDropdownOpen(false);
      };
  return (
    <nav className='sticky top-0 z-20 bg-white'>
       
        <section className='flex px-8 items-center justify-between shadow-md'>
            <div className='py-4 flex items-center gap-4'>
                <FiMenu size={30} className='md:hidden' onClick={openMenuHandler}/>
                <NavLink to="/">
                    <img src="/images/logo-main.png" alt="" className='w-[120px]' />
                </NavLink>
                
            </div>
            {isMenuOpen && 
                <ul className='gap-8 pl-4 md:hidden'>
                    <li className='py-4'><NavLink to="/" className={({ isActive }) => isActive ? "font-bold" : ""}>Home</NavLink></li>
                    <li className='py-4'><NavLink to="/about" className={({ isActive }) => isActive ? "font-bold" : ""}>About us</NavLink></li>
                    <li className='py-4'><NavLink to="/singlephase" className={({ isActive }) => isActive ? "font-bold" : ""}>Single Phase Motors</NavLink></li>
                    <li className='py-4'><NavLink to="/threephase" className={({ isActive }) => isActive ? "font-bold" : ""}>Three Phase Motors</NavLink></li>
                    <li className='py-4'><NavLink to="/contact" className={({ isActive }) => isActive ? "font-bold" : ""}>Contact Us</NavLink></li>
                </ul>
            }
            
    
            <ul className='md:flex gap-8 pl-4 hidden'>
                <li className='py-4'><NavLink to="/" className={({ isActive }) => isActive ? "font-bold" : ""}>Home</NavLink></li>
                <li  className='py-4'><NavLink to="/about" className={({ isActive }) => isActive ? "font-bold" : ""}>About us</NavLink></li>
                <li className='relative py-4' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <p className='cursor-pointer'>Our Products</p>

                    {dropdownOpen && <Dropdown dropdownItems={dropdownList} position={'top-[100%]'} onMouseEnter={handleDropdownMouseEnter} onMouseLeave={handleDropdownMouseLeave}/>}

                </li>
                <li  className='py-4'><NavLink to="/contact" className={({ isActive }) => isActive ? "font-bold" : ""}>Contact Us</NavLink></li>
            </ul>
        </section>
    </nav>
   
  )
}

export default Navbar