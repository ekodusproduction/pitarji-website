import React from 'react'


const Button = ({category,type,children,color, disabled,clickHandler}) => {
    if(category=='primarybtn'){
  return (
    <button type={type} disabled={disabled} 
    onClick={clickHandler}
    className='bg-[#84C550] py-2 px-4 rounded cursor-pointer text-white w-fit'>{children}</button>
  )
}
else{
    return (
        <button className={`py-3 px-6 rounded cursor-pointer border-2 border-[${color}] text-white`}>{children}</button>
      )
}
}

export default Button