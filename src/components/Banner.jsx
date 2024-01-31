import React, {useEffect} from 'react'
import Button from '../ui/Button'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {

  useEffect(() => {
    AOS.init();
  }, [])

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
              style={{ background: 'linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url("/images/bg3.jpg")',backgroundSize:'fill'}} >
                  <div className='flex flex-col-reverse lg:flex-row-reverse items-center justify-center gap-16'>
                    <div>
                      <img className='w-[500px]' data-aos='fade-left' data-aos-duration="1000" src="/images/products/single_phase_motor.png" alt="" />
                    </div>
                    <div className='flex flex-col justify-center gap-4' >
                      <h1 className='lg:text-8xl text-5xl font-extrabold text-white drop-shadow-md text-shadow' data-aos='fade-right' data-aos-duration="1000">High Performace <br />Electrical Tools</h1>
                      <p className='text-[#fff] font-bold' data-aos='fade-right' data-aos-duration="1000">Empower Your World: Ignite Innovation with Our Essential Electrical Solutions!</p>
                      <div className='flex gap-4  mt-2' data-aos='fade-right' data-aos-duration="1000">
                          <Button category='primarybtn' >Check Our Products </Button>
                      </div>
                    </div>
                  </div>
                
          </header>
        </SplideSlide>
        {/* <SplideSlide >
        <header 
              className='h-[80vh] text-white flex flex-col items-center justify-center gap-4'
              style={{background: 'linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(/images/bg7.jpg)',backgroundPosition:'center center',backgroundSize:'cover'}} >
                  <p className='text-[#fff]'>Power Up Your World: Unleash Innovation with Our Electrical Essentials!</p>
                  <h1 className='text-6xl font-extrabold'>Best Industry Standard Items</h1>
                  <div className='flex gap-4 font-semibold mt-2'>
                      <Button category='primarybtn'>Check our products</Button>
                      <Button category='primarybtn'>Enquire Now</Button>
                  </div>
          </header>
        </SplideSlide> */}
    </Splide>
   
  )
}

export default Banner