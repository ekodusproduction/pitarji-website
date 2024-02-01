import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Button from '../ui/Button'



import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect(() => {
        AOS.init();
      }, [])
    
  return (
    <>
        <Navbar/>
        <Header title={'About Us'}/>
        <section>
        <div className='py-16 p-4 lg:px-16 flex flex-col lg:flex-row-reverse justify-center gap-4 lg:gap-12'>
            <div className='lg:w-[600px]'>
                <div data-aos="fade-right" data-aos-duration="1200">
                    <p className='font-semibold text-lg text-[#000]'>Know About us</p>
                    <h2 className=' font-bold text-3xl my-4'>
                        Empowering Progress, Electrifying Future: Sparking Innovation with Electrical Motors
                    </h2>
                </div>
                <div data-aos="fade-left" data-aos-duration="1200">
                    <div>
                        <p className='text-justify text-[#545454] text-md'>
                        Welcome to Pitarji – Your Trusted Partner in Power Solutions!

                        At Pitarji, we take pride in being an authorized dealership of Crompton Greaves, 
                        a name synonymous with innovation and excellence in the electrical industry. As a
                        dedicated and customer-centric company, we are committed to providing top-notch power 
                        solutions to meet your diverse needs.
                        </p>
                    </div>
                
                </div>
            </div>
            <div className='relative ' data-aos="fade-right" data-aos-duration="1200">
                <img src="/images/about-us.png" className='h-[350px] rounded' alt="" />
                {/* <img src="/images/about_image1.jpg" className='absolute bottom-[-50px] right-[-80px] w-[300px] border-8 border-white hidden lg:visible' alt="" /> */}
            </div>
        </div>
        </section>
        <section  data-aos="fade-up" data-aos-duration="1200" className='border' style={{ background: 'url(images/bg-9.jpg)',backgroundSize:'cover'}}>
            <div className='md:w-[80vw] lg:w[70vw] flex lg:flex-row flex-col justify-center items-center mx-auto p-10 gap-8 lg:gap-16'>
                <div className='shrink-0'>
                    <img src="/images/profile.png" className='w-[200px] lg:w-[200px] rounded' alt="" />
                </div>
                <div>
                    <h2 className='text-2xl font-bold mb-4 text-center lg:text-left text-black'>Words from the Director</h2>
                    <p className='mb-2 text-black font-semibold'>Greetings from Pitarji!</p>
                    <p className='text-justify text-black font-semibold'>
                        As the Director of Pitarji, I am delighted to welcome you to our world of electrical solutions. 
                        At Pitarji, we envision a future where reliable and efficient power is not just a necessity
                        but a catalyst for progress. Our journey with Crompton Greaves has been a testament to our 
                        commitment to excellence and innovation.
                    </p>
                    <p className='mb-3 text-black font-semibold'>
                        <br/>
                        At Pitarji, our mission is not just about delivering quality electrical products;
                        it's about fostering relationships and empowering our clients. We understand the
                        importance of electricity in driving industries, powering homes, and transforming
                        communities. Through our collaboration with Crompton Greaves, we bring you a range
                        of products that reflect the pinnacle of technological advancements and reliability.
                    </p>
                </div>
            </div>
        </section>
        <section className='flex lg:flex-row flex-col justify-center items-center gap-12 my-16 p-4 mb-16' data-aos="fade-up" data-aos-duration="1200">
            <div className='mt-4'>
                <img className='lg:h-[320px] rounded' src="/images/our-mission.jpg" alt="" />
            </div>
            <div className='lg:w-[40vw] flex flex-col gap-4'>
                <h2 className='text-3xl font-bold '>Our Mission</h2>
                <p className='text-justify text-[#545454] text-md'>
                    At the core of Pitarji's mission is a commitment to delivering reliable
                    and efficient electrical solutions that empower businesses and communities.
                    We aim to be the go-to source for Crompton Greaves products, ensuring our 
                    clients have access to cutting-edge technologies that redefine industry standards.
                </p>
                <b>Why Choose Pitarji:</b>
                <ul className='list-disc px-4'>
                    <li className='mb-3'>
                        <b>Quality Assurance:</b> We understand the critical role electricity plays in your operations. 
                        Our partnership with Crompton Greaves guarantees products of the highest quality and durability.
                    </li>
                    <li className='mb-3'>
                        <b>Expertise:</b> With years of experience in the electrical industry, our team at Pitarji possesses
                        the knowledge and skills to guide you in selecting the right solutions tailored to your requirements.
                    </li>
                    <li>
                        <b>Customer-Centric Approach:</b> Your satisfaction is our priority. We strive to build lasting relationships
                        with our clients by providing personalized service, timely support, and transparent communication.
                    </li>
                </ul>
            </div>
        </section>
        <section className='flex lg:flex-row-reverse flex-col justify-center items-center gap-12 mb-16' data-aos="fade-up" data-aos-duration="900">
            <div className='mt-4'>
                <img className='lg:h-[320px] rounded' src="/images/our-vision.jpg" alt="" />
            </div>
            <div className='lg:w-[40vw] flex flex-col gap-4'>
                <h2 className='text-3xl font-bold '>Our Vision</h2>
                <p className='text-justify text-[#545454] text-md'>
                    At Pitarji, we are on a vision to redefine the standards of excellence in the electrical solutions industry.
                    Our commitment is to empower businesses and communities by providing unparalleled access to top-quality Crompton Greaves
                    products. We strive to be a trusted partner, delivering innovative and reliable power solutions that not only meet 
                    but exceed the evolving needs of our clients.
                </p>
                <b>Key Pillars of Our Vision:</b>
                <ul className='list-disc'>
                    <li>
                        <b>Innovation:</b> 
                         &nbsp; We embrace technological advancements to offer cutting-edge electrical solutions that 
                        enhance efficiency, sustainability, and overall performance.
                    </li>
                    <li>
                        <b>Social Responsibility:</b> 
                        &nbsp; Beyond business, our mission extends to contributing positively to the community and the environment.
                        We actively engage in socially responsible initiatives to create a sustainable and inclusive future.
                    </li>
                    <li>
                        <b>Exemplary Service:</b>
                        &nbsp; Pitarji is driven by a customer-centric approach. 
                        Our vision is to establish lasting relationships with our clients through personalized service,
                        prompt support, and transparent communication.
                    </li>
                </ul>
            </div>
        </section>
        <Footer/>
    </>
  )
}

export default About