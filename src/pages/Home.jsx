import React from 'react'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Brochure from '../components/Home/Brochure'
import Products from '../components/Home/Products'
import styles from './Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import '../global.css'
import { data } from '../data/threePhaseSquirrelData'

const Home = () => {
  return (
    <>
    <Navbar/>
        {/* <div className='fixed top-[50%] right-0 flex flex-col gap-32'>
           
            <div className='bg-[#84C550] border-2 p-[10px] w-fit z-[999999] rounded-l-3xl text-white font-semibold'>
                <a href="">Enquire Now</a>
            </div>
        </div> */}
        <Banner/>
        <section>
            <div className='flex flex-col gap-4 sm:p-16 p-4 py-8'>
                <h2 className='font-bold text-3xl title_heading'>Our Products</h2>
                <p className='text-md text-slate-700'>Single Phase Motors are used in variety of applications in households and small industrial sectors, where three phase power supply is not available. Single Phase motors are classified based on the type of starting mechanism. Widely used starting mechanisms
                    are SplitPhase, Capacitor Start and Run, Capacitor Start Induction Run & Capacitor Start Capacitor Run.
                </p>
                <p className='text-md text-slate-700'>Depending upon the application load characteristics, mounting suitability and cooling mechanisms, 
                    we have single phase motors in various output powers, constructions and enclosures.</p>

            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 m-[auto] xl:grid-cols-3 gap-12 pt-8 pb-16 sm:px-16 px-4'>
            {data.map((item, index)=> (
                <ProductCard data={item} key={index} />
                ))}
            </div>
        </section>
        <Footer/>
    
    </>
  )
}

export default Home