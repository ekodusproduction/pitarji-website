import React from 'react'

const Header = ({title}) => {
  return (
    <div className='h-[40vh] flex justify-center items-center bg-[url(/images/whiteback.jpg)] bg-cover bg-center'>
        <h2 className='font-bold text-3xl'>{title}</h2>
    </div>
  )
}

export default Header