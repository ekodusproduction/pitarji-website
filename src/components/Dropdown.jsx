import React, {useState} from 'react'

import { Link } from 'react-router-dom';

const Dropdown = ({dropdownItems,position}) => {
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const handleMouseEnter = (index) => {
        setDropdownOpen(index);
      };
      const handleMouseLeave = () => {
        setDropdownOpen(null);
      };
    
    

    
      const handleDropdownMouseEnter = (index) => {
        setDropdownOpen(index);
      };
    
      const handleDropdownMouseLeave = () => {
        setDropdownOpen(null);
      };
  return (
    <div className={`bg-white absolute ${position} w-max shadow-md `}>
        <ul className='text-md font-light'>
            {/* <li className='relative p-4 border-b-2' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <a href="">Single Phase Motor</a>
                {dropdownOpen && <Dropdown position={'top-[50%] left-[100%]'} onMouseEnter={handleDropdownMouseEnter} onMouseLeave={handleDropdownMouseLeave}/>}
            </li>
            <li  className='relative p-4'>LT Motor</li> */}
            {dropdownItems.map((data,index)=> (

                <li key={data.index} className='relative p-4 border-b-2' onMouseEnter={()=>handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
                    <Link to={data.link}>{data.title}</Link>
                    {data.subMenu && data.subMenu.length > 0 && dropdownOpen==index && <Dropdown dropdownItems={data.subMenu} position={'top-[50%] left-[100%]'} onMouseEnter={()=>handleDropdownMouseEnter(index)} onMouseLeave={handleDropdownMouseLeave}/>}
                    {console.log(dropdownOpen, index)}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Dropdown