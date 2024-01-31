import React,{useEffect} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import { data } from '../data/singlephasedata'



const SinglePhaseMotor = () => {

  
  return (
    <>
    <Navbar/>
    <Header title='Single Phase Motors'/>
    <section>
        <div className='flex flex-col gap-4 md:px-16 py-16 px-4'>
            <h2 className='font-bold text-xl'>Single Phase Motors</h2>
            <p className='text-md text-slate-700'>Single Phase Motors are used in variety of applications in households and small industrial sectors, where three phase power supply is not available. Single Phase motors are classified based on the type of starting mechanism. Widely used starting mechanisms
                are SplitPhase, Capacitor Start and Run, Capacitor Start Induction Run & Capacitor Start Capacitor Run.
            </p>
            <p className='text-md text-slate-700'>Depending upon the application load characteristics, mounting suitability and cooling mechanisms, 
                we have single phase motors in various output powers, constructions and enclosures.</p>

        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 m-[auto] xl:grid-cols-3 gap-12 pt-8 pb-16 sm:px-16 px-4'>
            {data.map(item=> (
              <>
              <ProductCard data={item}/>
              </>
            ))}
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default SinglePhaseMotor