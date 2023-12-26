import React from 'react'
import Button from '../ui/Button'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Banner = () => {
  return (
    <Splide aria-label="My Favorite Images"
    options={ {
      rewind: true,
      type: 'fade',
      autoplay: true,
      speed: 1000,
     
    } }
  
    >
        <SplideSlide>
          <header 
              className='lg:h-[80vh] flex flex-col items-center justify-center gap-4 sm:p-16 p-8'
              style={{ background: 'url("/images/whiteback.jpg")',backgroundPosition:'center',backgroundSize:'cover'}} >
                  <div className='flex flex-col-reverse lg:flex-row-reverse items-center justify-center gap-16'>
                    <div>
                      <img src="/images/products/single_phase_motor.png" alt="" />
                    </div>
                    <div className='flex flex-col  justify-center gap-4'>
                      <h1 className='lg:text-6xl text-5xl font-extrabold text-black'>High Performace <br />Electrical Tools</h1>
                      <p className='text-[#598039]'>Power Up Your World: Unleash Innovation with Our Electrical Essentials!</p>
                      <div className='flex gap-4 font-semibold mt-2'>
                          <Button category='primarybtn'>Check our products</Button>
                      
                      </div>
                    </div>
                  </div>
                
          </header>
        </SplideSlide>
        {/* <SplideSlide >
        <header 
              className='h-[80vh] text-white flex flex-col items-center justify-center gap-4'
              style={{background: 'linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(/images/banner2.jpg)',backgroundPosition:'center',backgroundSize:'cover'}} >
                  <p className='text-[#84C550]'>Power Up Your World: Unleash Innovation with Our Electrical Essentials!</p>
                  <h1 className='text-5xl font-extrabold'>Best Industry Standard Items</h1>
                  <div className='flex gap-4 font-semibold mt-2'>
                      <Button type='primarybtn'>Check our products</Button>
                      <Button color={'#84C550'}>Enquire Now</Button>
                  </div>
          </header>
        </SplideSlide> */}
    </Splide>
   
  )
}

export default Banner