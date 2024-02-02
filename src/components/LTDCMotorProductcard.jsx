import React,{useEffect} from "react";
import Button from '../ui/Button'
import {  useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const LowTensionDcMotor = ({data}) => {
    useEffect(() => {
        AOS.init();
      }, [])
    
      const navigate = useNavigate();
      return (
        <div className='md:flex flex-row justify-center items-center border-[1px] gap-4 p-6 rounded shadow-sm'>
          <div className="md-shrink-0 flex justify-center">
            <img data-aos='fade-right' data-aos-duration="1000" className='w-80 object-cover md:h-full md:w-80' src={data.image} alt="" />
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='font-semibold text-lg'>{data.title}</h3>
            <p className='text-md text-slate-700'>{data.description.slice(0,120)}...</p>
            <Button category='primarybtn' clickHandler={()=>navigate('/lowTensionDCMotorDetails', { state: {key: data} })}>View Details</Button>
          </div>
        </div>
      )
}

export default LowTensionDcMotor;