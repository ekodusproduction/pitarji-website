import React from 'react'
import Button from '../../ui/Button'

const Brochure = () => {
  return (
    <div className='bg-[#84C550] flex items-center py-8 px-8 justify-between my-8'>
        <p className='text-white font-bold text-3xl'>Our Company Provide Service And Best Maintenance.</p>
        <Button color={'white'}>Download Brochure</Button>
    </div>
  )
}

export default Brochure