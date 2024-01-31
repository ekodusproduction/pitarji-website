import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Button from '../ui/Button'

const About = () => {
  return (
    <>
        <Navbar/>
        <Header title={'About Us'}/>
        <section>
        <div className='py-16 p-4 lg:px-16 flex flex-col lg:flex-row-reverse justify-center items-center gap-8 lg:gap-32'>
        <div className='lg:w-[600px]'>
            <div>
                <p className=' font-semibold text-lg text-[#84C550]'>Know About us</p>
                <h2 className=' font-bold text-3xl my-4'>Empowering Progress, Electrifying Future: Sparking Innovation with Electrical Motors.</h2>
            </div>
            <div>
                <div>
                    <p className='text-justify text-[#545454] text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis perspiciatis placeat mollitia nobis,
                        ipsa, quae odit amet sunt illum, eligendi impedit ipsum vitae provident exercitationem odio quod tenetur
                        consequuntur similique eum voluptate hic nam. Amet rem, distinctio minus dolores libero et voluptatibus
                        atque hic, magni illum mollitia velit obcaecati a facilis ut molestias accusamus 
                        delectus? Repudiandae laborum perferendis cum libero. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit in aperiam perferendis quia laborum
                         illo nobis enim dolores corporis commodi, quae autem vitae laudantium cupiditate voluptate ad ducimus explicabo quas, nisi voluptates minima possimus animi id. Earum ullam officia similique adipisci dicta velit.
                         Autem quia amet quisquam iusto dignissimos ab.</p>
                </div>
              
            </div>
        </div>
        <div className='relative '>
            <img src="/images/about_image2.jpg" className='w-[80vw] lg:w-[350px] ' alt="" />
            <img src="/images/about_image1.jpg" className='absolute bottom-[-50px] right-[-80px] w-[300px] border-8 border-white hidden lg:visible' alt="" />
        </div>
    </div>
        </section>
        <section className='flex lg:flex-row flex-col items-center justify-center gap-8 my-8 bg-[#d4d4d4] px-4 lg:px-16 py-8 text-slate-700'>
            <div>
                <img src="/images/profile.png" className='w-[200px] lg:w-[400px]' alt="" />
            </div>
            <div>
                <h2 className='text-3xl font-bold mb-4 text-center lg:text-left'>Words from the Director</h2>
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur at amet eius ut provident itaque. Reiciendis veritatis tempore deleniti aut. Eaque porro suscipit asperiores ea, assumenda rem. Sint, aspernatur! Fuga tempore sit voluptates! Eligendi error fugiat veritatis deserunt! 
                    Assumenda excepturi, laudantium maxime neque esse in debitis. Architecto, consequuntur? Est, quis!</p>
            </div>
        </section>
        <section className='flex lg:flex-row flex-col justify-center items-center gap-12 my-16 p-4'>
            <div>
                <img className='lg:w-[40vw]' src="/images/about_image1.jpg" alt="" />
            </div>
            <div className='lg:w-[40vw] flex flex-col gap-4'>
                <h2 className='text-3xl font-bold '>Our Mission</h2>
                <p className='text-justify text-[#545454] text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dignissimos 
                    veniam ea odit hic porro pariatur blanditiis provident modi alias vero corrupti, amet 
                    doloribus doloremque tenetur maxime eligendi nihil beatae quis voluptate nesciunt, 
                    ratione eos totam. Error quo quis similique ducimus, fuga dolorem eveniet modi quae 
                    dolor distinctio, velit, sunt deleniti fugiat! Laborum itaque laboriosam ipsam 
                    similique sit accusamus atque harum non fugit? Velit similique earum debitis animi, 
                    asperiores nostrum dolor obcaecati aut quam cupiditate commodi nihil quidem amet eius.
                     Odit omnis nulla molestias aperiam, perferendis et minus, nihil hic tempora similique
                      sed! Recusandae repudiandae maiores nulla, repellat qui fugiat hic cumque sunt non!
                      </p>
            </div>
        </section>
        <section className='flex lg:flex-row-reverse flex-col justify-center items-center gap-12 p-4 mb-16'>
            <div>
                <img className='lg:w-[40vw]' src="/images/about_image1.jpg" alt="" />
            </div>
            <div className='lg:w-[40vw] flex flex-col gap-4'>
                <h2 className='text-3xl font-bold '>Our Vision</h2>
                <p className='text-justify text-[#545454] text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dignissimos 
                    veniam ea odit hic porro pariatur blanditiis provident modi alias vero corrupti, amet 
                    doloribus doloremque tenetur maxime eligendi nihil beatae quis voluptate nesciunt, 
                    ratione eos totam. Error quo quis similique ducimus, fuga dolorem eveniet modi quae 
                    dolor distinctio, velit, sunt deleniti fugiat! Laborum itaque laboriosam ipsam 
                    similique sit accusamus atque harum non fugit? Velit similique earum debitis animi, 
                    asperiores nostrum dolor obcaecati aut quam cupiditate commodi nihil quidem amet eius.
                     Odit omnis nulla molestias aperiam, perferendis et minus, nihil hic tempora similique
                      sed! Recusandae repudiandae maiores nulla, repellat qui fugiat hic cumque sunt non!
                      </p>
            </div>
        </section>
        <Footer/>
    </>
  )
}

export default About