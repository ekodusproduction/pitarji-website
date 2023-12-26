import React from 'react'
import Button from '../../ui/Button'

const About = () => {
  return (
    <div className='py-16 px-16 flex flex-row-reverse justify-center items-center gap-32'>
        <div className='w-[600px]'>
            <div>
                <p className=' font-semibold text-lg text-[#84C550]'>Know About us</p>
                <h2 className=' font-bold text-3xl my-4'>Empowering Progress, Electrifying Future: Sparking Innovation with Electrical Motors.</h2>
            </div>
            <div>
                <div>
                    <p className='text-justify text-[#545454] text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis perspiciatis placeat mollitia nobis,
                        ipsa, quae odit amet sunt illum, eligendi impedit ipsum vitae provident exercitationem odio quod tenetur
                        consequuntur similique eum voluptate hic nam. Amet rem, distinctio minus dolores libero et voluptatibus
                        atque hic, magni illum mollitia velit obcaecati a facilis ut molestias accusamus 
                        delectus? Repudiandae laborum perferendis cum libero.</p>
                </div>
              
            </div>
            <div className='my-4'>
                <Button type={'primarybtn'}>Read More</Button>
            </div>
        </div>
        <div className='relative '>
            <img src="/images/about_image2.jpg" className='w-[350px] ' alt="" />
            <img src="/images/about_image1.jpg" className='absolute bottom-[-50px] right-[-80px] w-[300px]  border-8 border-white' alt="" />
        </div>
    </div>
  )
}

export default About