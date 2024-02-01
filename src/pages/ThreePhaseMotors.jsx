import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ThreePhaseProductCard from '../components/ThreePhaseProductCard'
import { data } from '../data/singlephasedata'

const ThreePhaseMotors = () => {
  return (
    <>
        <Navbar/>
        <Header title={'Three Phase Motors'}/>
        <section>
        <div className='flex flex-col gap-4 p-16'>
            <h2 className='font-semibold text-xl'>Three Phase Motors</h2>
            <p className='text-md text-slate-700'>
              Three-phase motors are a type of electric motor that operates on a three-phase power supply,
              making them a common choice for various industrial and commercial applications. Unlike single-phase motors,
              three-phase motors have three sets of windings, spaced 120 degrees apart, which allows for a smoother and more
              efficient power delivery. These motors are known for their robustness, reliability, and ability to generate
              consistent torque, making them suitable for high-performance applications. Three-phase motors are widely used
              in industrial machinery, pumps, fans, compressors, and other heavy-duty equipment. The balanced power delivery
              of three-phase systems results in smoother operation and reduced vibration compared to single-phase motors.
              Additionally, the three-phase design provides advantages in terms of power transmission efficiency and overall
              energy savings, making them a preferred choice for many industrial applications.
            </p>
        </div>
        <div className='px-16 border-b-2'>
             <h3 className='mb-12 font-bold text-2xl'>Squirrel Cage Motors</h3>
            <div className='grid grid-cols-3 gap-12 '>
            {data.map(item=> (
              <ThreePhaseProductCard data={item}/>
            ))}
            </div>
        </div>
        <div className='px-16 py-8 border-b-2'>
             <h3 className='mb-12 font-bold text-2xl'>SR Motors</h3>
            <div className='grid grid-cols-3 gap-12 '>
            {data.map(item=> (
              <ThreePhaseProductCard data={item}/>
            ))}
            </div>
        </div>
        <div className='px-16 py-8 border-b-2'>
             <h3 className='mb-12 font-bold text-2xl'>DC Motors</h3>
            <div className='grid grid-cols-3 gap-12 '>
            {data.map(item=> (
              <ThreePhaseProductCard data={item}/>
            ))}
            </div>
        </div>
    </section>
        <Footer/>
    </>
  )
}

export default ThreePhaseMotors