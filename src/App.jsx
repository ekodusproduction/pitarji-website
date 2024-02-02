import React,{useEffect} from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './pages/About'
import Products from './components/Home/Products'
import Footer from './components/Footer'
import Brochure from './components/Home/Brochure'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import SinglePhaseMotor from './pages/SinglePhaseMotor'
import ThreePhaseMotors from './pages/ThreePhaseMotors'
import Contact from './pages/Contact'
import SinglePhaseDetails from './pages/SinglePhaseDetails'
import ThreePhaseDetails from './pages/ThreePhaseDetails'
import ThreePhaseSRMotorDetails from './pages/ThreePhaseSRMotorDetails'
import LTDCMotorDetails from './pages/LTDCMotorDetails'


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/singlephase' element={<SinglePhaseMotor/>}/>
        <Route path='/threephase' element={<ThreePhaseMotors/>}/>
        <Route path='/singlephasedetails' element={<SinglePhaseDetails/>}/>
        <Route path='/threephasedetails' element={<ThreePhaseDetails/>}/>
        <Route path='/threePhaseSRMotordetails' element={<ThreePhaseSRMotorDetails/>}/>
        <Route path='/lowTensionDCMotorDetails' element={<LTDCMotorDetails/>}/>
      </Routes>
     
    </BrowserRouter>
   
    </>
  )
}

export default App