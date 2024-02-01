import React from 'react'


const Button = ({category,type,children,color, disabled,clickHandler}) => {
    if(category=='primarybtn'){
  return (
    <button type={type} disabled={disabled} 
    onClick={clickHandler}
    className='bg-[#fff] py-2 px-4  border cursor-pointer text-black w-fit hover:bg-green-700 hover:text-white'>{children}</button>
  )
}
else{
    return (
        <button className={`py-3 px-6  cursor-pointer border-2 border-[${color}] text-white`}>{children}</button>
      )
}
}

export default Button