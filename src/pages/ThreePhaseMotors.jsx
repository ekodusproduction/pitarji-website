import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import { data } from '../data/singlephasedata'

const ThreePhaseMotors = () => {
  return (
    <>
        <Navbar/>
        <Header title={'Three Phase Motors'}/>
        <section>
        <div className='flex flex-col gap-4 p-16'>
            <h2 className='font-semibold text-xl'>Three Phase Motors</h2>
            <p className='text-md text-slate-700'>Single Phase Motors are used in variety of applications in households and small industrial sectors, where three phase power supply is not available. Single Phase motors are classified based on the type of starting mechanism. Widely used starting mechanisms
                are SplitPhase, Capacitor Start and Run, Capacitor Start Induction Run & Capacitor Start Capacitor Run.
            </p>
            <p className='text-md text-slate-700'>Depending upon the application load characteristics, mounting suitability and cooling mechanisms, 
                we have single phase motors in various output powers, constructions and enclosures.</p>

        </div>
        <div className='px-16 py-8 border-b-2'>
             <h3 className='mb-12 font-bold text-2xl'>Squirrel Cage Motors</h3>
            <div className='grid grid-cols-3 gap-12 '>
            {data.map(item=> (
              <ProductCard data={item}/>
            ))}
            </div>
        </div>
        <div className='px-16 py-8 border-b-2'>
             <h3 className='mb-12 font-bold text-2xl'>SR Motors</h3>
            <div className='grid grid-cols-3 gap-12 '>
            {data.map(item=> (
              <ProductCard data={item}/>
            ))}
            </div>
        </div>
        <div className='px-16 py-8 border-b-2'>
             <h3 className='mb-12 font-bold text-2xl'>DC Motors</h3>
            <div className='grid grid-cols-3 gap-12 '>
            {data.map(item=> (
              <ProductCard data={item}/>
            ))}
            </div>
        </div>
    </section>
        <Footer/>
    </>
  )
}

export default ThreePhaseMotors