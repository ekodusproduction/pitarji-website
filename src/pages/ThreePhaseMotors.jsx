import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ThreePhaseProductCard from '../components/ThreePhaseProductCard'
import ThreePhaseSRMotorProductCard from '../components/ThreePhaseSRMotorProductCard'
import LTDCMotorProductCard from '../components/LTDCMotorProductCard'
import { data } from '../data/threePhaseSquirrelData'
import { srMotorData } from '../data/threePhaseSRMotorData'
import { lowTensionDCMotor } from '../data/lowTensionDCMotorData'

const ThreePhaseMotors = () => {
  return (
    <>
        <Navbar/>
        <Header title={'Low Tension Motors'}/>
        <section className='p-2'>
          <div className='flex flex-col gap-4 p-16'>
              <h2 className='font-semibold text-xl'>Low Tension Motors</h2>
              <p className='text-md text-slate-700'>
                Low Tension (LT) motors are electric motors designed to operate at relatively
                lower voltage levels, typically up to 1,000 volts. These motors find extensive
                use in various industrial, commercial, and residential applications. LT motors
                come in diverse types, including induction motors, synchronous motors, and direct
                current (DC) motors, catering to a wide range of requirements. Due to their lower
                voltage specifications, LT motors are commonly employed in systems where the demand
                for electrical power is moderate and can be effectively met without the need for higher
                voltage levels. These motors exhibit versatility, efficiency, and reliability, making them
                suitable for powering machinery, conveyors, pumps, fans, and other essential equipment
                across different sectors. The voltage classification as "Low Tension" underscores their
                compatibility with standard power distribution systems and their crucial role in driving
                numerous applications with varying power needs.
              </p>
          </div>
          <div className='px-16 mb-8'>
              <h3 className='mb-12 font-bold text-2xl'>Squirrel Cage Motors</h3>
              <div className='grid grid-cols-3 gap-12 '>
              {data.map((item, index)=> (
                <ThreePhaseProductCard data={item} key={index}/>
              ))}
              </div>
          </div>
          <div className='px-16 mb-8'>
            <h3 className='mb-12 font-bold text-2xl'>SR Motors</h3>
            <div className='grid grid-cols-3 gap-12 '>
              {srMotorData.map((item, index)=> (
                <ThreePhaseSRMotorProductCard data={item} key={index}/>
              ))}
            </div>
          </div>
          <div className='px-16 mb-8'>
            <h3 className='mb-12 font-bold text-2xl'>DC Motors</h3>
            <div className='grid grid-cols-3 gap-12 '>
              {lowTensionDCMotor.map(item=> (
                <LTDCMotorProductCard data={item}/>
              ))}
            </div>
          </div>
          {/* <div className='px-16 py-8 border-b-2'>
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
          </div> */}
      </section>
        <Footer/>
    </>
  )
}

export default ThreePhaseMotors