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
import { data } from '../data/singlephasedata'
import { srMotorData } from '../data/threePhaseSRMotorData'
import Button from '../ui/Button'
import {  useNavigate } from "react-router-dom";

const Home = () => {
    
    const navigate = useNavigate();
    return (
        <>
        <Navbar/>
            {/* <div className='fixed top-[50%] right-0 flex flex-col gap-32'>
            
                <div className='bg-[#84C550] border-2 p-[10px] w-fit z-[999999] rounded-l-3xl text-white font-semibold'>
                    <a href="">Enquire Now</a>
                </div>
            </div> */}
            <Banner/>
            <section className='max-w-[1500px] m-auto'>
                <div className='flex flex-col gap-4 sm:p-16 p-4 py-8'>
                    <h2 className='font-bold text-3xl title_heading'>Our Products</h2>
                    <p className='text-md text-slate-700'>Single Phase Motors are used in variety of applications in households and small industrial sectors, where three phase power supply is not available. Single Phase motors are classified based on the type of starting mechanism. Widely used starting mechanisms
                        are SplitPhase, Capacitor Start and Run, Capacitor Start Induction Run & Capacitor Start Capacitor Run.
                    </p>
                    <p className='text-md text-slate-700'>Depending upon the application load characteristics, mounting suitability and cooling mechanisms, 
                        we have single phase motors in various output powers, constructions and enclosures.</p>

                </div>
                <div className='flex flex-row justify-between items-center mx-16'>
                    <h2 className='font-medium'>Single Phase Motors</h2>
                    <Button category='primarybtn' clickHandler={()=>navigate('/singlephase', { state: {key: data} })}>View All</Button>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  m-[auto] gap-12 pt-8 pb-16 sm:px-16 px-4'>
                    {data.map((item, index)=> (
                            index <=5 ? <ProductCard data={item} key={index} /> : null
                        ))
                    }
                </div>
                <div className='flex flex-row justify-between items-center mx-16'>
                    <h2 className='font-medium'>Low Tension Motors</h2>
                    <Button category='primarybtn' clickHandler={()=>navigate('/lowTensionMotors', { state: {key: srMotorData} })}>View All</Button>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-[auto]  gap-12 pt-8 pb-16 sm:px-16 px-4'>
                    {srMotorData.map((item, index)=> (
                            index <=5 ? <ProductCard data={item} key={index} /> : null
                        ))
                    }
                </div>
            </section>
            <Footer/>
        
        </>
    )
}

export default Home