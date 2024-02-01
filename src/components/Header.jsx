import React from 'react'

const Header = ({title}) => {
  return (
    <div className='h-[40vh] flex justify-center items-center bg-[url(/images/bg-8.jpg)] bg-cover bg-center-top'>
        <h2 className='font-bold text-3xl text-white text-5xl'>{title}</h2>
    </div>
  )
}

export default Header