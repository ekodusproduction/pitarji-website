import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'
import { FaCheckCircle } from "react-icons/fa";
import Button from '../ui/Button'

const SinglePhaseDetails = () => {
    const {state} = useLocation();
    const [selectedOption, setSelectedOption] = useState('features');
    const data = state.key; 

    const openTab = (option) => {
      setSelectedOption(option)
    }
  return (
   <>
        <Navbar/>
        <Header title={'Single Phase Detail'}/>
        <section className='md:mx-8 mx-4 my-16'>
          <div className='flex lg:flex-row flex-col-reverse items-center justify-center gap-12'>
            <div >
              <img className='lg:w-[25vw] p-4 max-w-[400px]' src="/images/products/single_phase_motor.png" alt="" />
            </div>
            <div className='lg:w-[40vw] flex flex-col gap-4'>
              <p className='bg-[#84C550] w-fit p-2 text-white font-bold'>SINGLE PHASE MOTOR</p>
              <h3 className='font-semibold text-2xl'>{data.title}</h3>
              <p className='text-slate-700'>{data.description}</p>
            </div>
          </div>
          <div className='lg:px-12 py-12 px-4 md:w-[700px] m-auto'>
            <div className='flex md:flex-row flex-col gap-[1px]'>
              <div className='md:w-[33%] text-center'>
                <h3 className='bg-slate-300 p-2 font-semibold text-slate-600'>APPLICATION</h3>
                <p className=' p-2 text-slate-700 bg-slate-100 h-[70%]'>{data.applications}</p>
              </div>
              <div className='md:w-[33%] text-center'>
                <h3 className='bg-slate-300 p-2 font-semibold text-slate-600'>AVAILABLE RANGE</h3>
                <p className=' p-2 text-slate-700 bg-slate-100 h-[70%]'>{data.range}</p>
              </div>
              <div className='md:w-[33%] text-center'>
                <h3 className='bg-slate-300 p-2 font-semibold text-slate-600'>STANDARD</h3>
                <p className=' p-2 text-slate-700 bg-slate-100 h-[70%]'>{data.standard}</p>
              </div>

            </div>
          </div>
          <div className='md:p-12 p-4 flex flex-col justify-center items-center gap-8 '>
          <div className="tab flex flex-wrap justify-center items-start gap-[2px]">
            {data.features &&
                <button
                  className={`md:px-8 py-4 sm:w-[200px] w-[90vw] font-semibold ${selectedOption === 'features' ? "bg-black text-white" : "bg-slate-200 text-black "}`}
                  onClick={() => openTab('features')}
                >
              Features
            </button>
            }
            {data.technicalspecs && 
            <button
              className={`md:px-8 py-4 sm:w-[200px] w-[90vw] font-semibold  ${selectedOption === 'technicalspecs' ? `bg-black text-white` : 'bg-slate-200 text-black '} `}
              onClick={() => openTab('technicalspecs')}
            >
             Technical Specs
            </button>
          }
           {data.quality && 
            <button
              className={`md:px-8 py-4 sm:w-[200px] w-[90vw] font-semibold  ${selectedOption === 'quality' ? `bg-black text-white` : 'bg-slate-200 text-black '} `}
              onClick={() => openTab('quality')}
            >
              Quality
            </button>
            }
            {data.application && 
            <button
              className={`md:px-8 py-4 sm:w-[200px] w-[90vw] font-semibold  ${selectedOption === 'applications' ? `bg-black text-white` : 'bg-slate-200 text-black '} `}
              onClick={() => openTab('applications')}
            >
              Applications
            </button>
            }
            {data.download_iso && 
            <button
              className={`md:px-8 py-4 sm:w-[200px] w-[90vw] font-semibold  ${selectedOption === 'download' ? `bg-black text-white` : 'bg-slate-200 text-black '} `}
              onClick={() => openTab('download')}
            >
             Download
            </button>
}
          </div>


          <div className="tab-content">
            {selectedOption === 'features' && 
            <div className=''>
                <ul className='flex flex-col gap-4 text-slate-700'>
                  {data.features?.map(feature => (
                     <li className='flex items-center gap-2'><FaCheckCircle/>{feature}</li>

                  ))}
                </ul>
            </div>
              }
               {selectedOption === 'technicalspecs' && 
            <div className='xl:w-[65vw] w-[90vw] overflow-x-scroll '>
                <div className='bg-slate-300 p-2  w-[1300px]'>
                  <h3 className='text-center font-bold'>NEMA B42/B48 FRAME MOTORS</h3>
                </div>
                <div className='py-4 px-16 bg-slate-100 w-[1300px]'>
                  <div className='flex justify-between items-center py-2'>
                    <p className='font-semibold'>Output Power</p>
                    {data.technicalspecs?.output_power.map(power=> (
                      <p>{power}</p>
                    ))}
                  </div>
                  <div className='flex justify-between items-center py-2'>
                    <p className='font-semibold'>Phase</p>
                    <p>{data.technicalspecs?.phase}</p>
                  </div>
                  <div className='flex justify-between items-center py-2'>
                    <p className='font-semibold'>Polarity</p>
                    {data.technicalspecs?.polarity.map(data=> (
                      <p>{data}</p>
                    ))}
                  </div>
                  <div className='flex justify-between items-center py-2'>
                    <p className='font-semibold'>Frequency</p>
                    {data.technicalspecs?.frequency.map(data=> (
                      <p>{data}</p>
                    ))}
                  </div>
                  <div className='flex justify-between items-center py-2'>
                    <p className='font-semibold'>Construction</p>
                    <p>{data.technicalspecs?.construction}</p>
                  </div>
                  <div className='flex justify-between items-center py-2'>
                    <p className='font-semibold'>Bearings</p>
                    <p>{data.technicalspecs?.bearings}</p>
                  </div>
                  <div className='flex justify-between items-center py-2'>
                    <p className='font-semibold'>Duty Cycle</p>
                    <p>{data.technicalspecs?.duty_cycle}</p>
                  </div>
                  <div className='flex justify-between items-center py-2'>
                    <p className='font-semibold'>Circuit Protection</p>
                    <p>{data.technicalspecs?.circuit_protection}</p>
                  </div>
                  <div className='flex justify-between items-center py-2'>
                    <p className='font-semibold'>Frame</p>
                    <p>{data.technicalspecs?.frame}</p>
                  </div>

                </div>
            </div>
              }

             {selectedOption === 'quality' && 
            <div className=''>
              <h2>IMAGES</h2>
              <img src="" alt="" />
              <img src="" alt="" />
              

                
            </div>
              }
              {selectedOption === 'applications' && 
            <div className=''>
              <h2>IMAGES</h2>
              <img src="" alt="" />
              <img src="" alt="" />
              

                
            </div>
              }

            {selectedOption === 'download' && 
            <div className=''>
              <Button category={'primarybtn'}>Dwonload ISO Certificate</Button>
              

                
            </div>
              } 
      
          
          </div>
        </div>
        </section>
        <Footer/>
   </>
  )
}

export default SinglePhaseDetails