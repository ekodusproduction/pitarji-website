import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Button from '../ui/Button'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import axios from 'axios'
import Swal from 'sweetalert2'

const Contact = () => {
    const [isSubmitting,setSubmitting] = useState(false);

    const validateSchema = Yup.object().shape({
        fullname: Yup.string().required("*This field is required"),
        email: Yup.string().email("Please enter a valid email").required("*This field is required"),
        phonenumber: Yup.string().required("*This field is required"),
        message: Yup.string().required("*This field is required")
         
      });

      const mapCss = `{
        .mapCss{
            #g-mapdisplay img.text-marker{max-width:none!important;background:none!important;}img{max-width:none}
        }
      }`

      const formSubmitHandler = (values) => {
        console.log(values)
        setSubmitting(true)
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post('https://formsubmit.co/ajax/pitarjibiofuels@gmail.com', values)
            .then(response => {
                console.log(response)
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Thank You, we will connect to you soon!",
                  });
                setSubmitting(false)
            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Something went wrong.",
                  });
                setSubmitting(false)
            }
                )

      }
  return (
    <>
        <Navbar/>
        <Header title={'Contact Us'}/>
        <section className='flex lg:flex-row flex-col justify-center items-center gap-12 p-12 '>
            <div className='lg:w-[50vw] w-[90vw] border p-4'>
                <h2 className='text-3xl mb-4 font-bold'>Get to Know Us</h2>
                <Formik
                    initialValues={{ fullname: "", email: "", phonenumber: "", message: "" }}
                    validationSchema={validateSchema}
                    onSubmit={formSubmitHandler}
                >
                    
                        <Form className='flex flex-col gap-8'>
                            <div className='relative'>
                                <Field
                                type="text"
                                name="fullname"
                                placeholder="Enter your Name"
                                className='pl-4 border-[1px] border-slate-400 h-[40px] w-[100%] '
                                />
                                <ErrorMessage name="fullname" component="div" className='absolute bottom-[-18px] left-2 text-[red] text-xs' />
                            </div>
                            <div className='relative'>
                                <Field
                                type="email"
                                name="email"
                                placeholder="Email"
                                className='pl-4 border-[1px] border-slate-400 h-[40px] w-[100%] '
                                />
                                <ErrorMessage name="email" component="div"  className='absolute bottom-[-18px] left-2 text-[red] text-xs' />
                            </div>
                            <div  className='relative'>
                                <Field
                                type="number"
                                name="phonenumber"
                                placeholder="Phone Number"
                                className='pl-4 border-[1px] border-slate-400 h-[40px] w-[100%] '
                                />
                                <ErrorMessage name="phonenumber" component="div"  className='absolute bottom-[-18px] left-2 text-[red] text-xs' />
                            </div>
                            <div className='relative'>
                                <Field
                                type="textarea"
                                name="message"
                                placeholder="Message"
                                className='pl-4 border-[1px] border-slate-400 h-[100px] w-[100%] '
                                />
                                <ErrorMessage name="message" component="div"  className='absolute bottom-[-18px] left-2 text-[red] text-xs' />
                            </div>
                            <Button 
                            category={'primarybtn'} 
                            type={'submit'} 
                            disabled={isSubmitting}
                          >{isSubmitting? 'Please Wait...': 'Submit'}</Button>

                            
                        </Form>
                
                </Formik>
               
            </div>
            <div className='w-fit'>
                <div style={{overflow:'hidden',maxWidth:'100%',width:'600px',height:'450px'}}>
                    <div id="g-mapdisplay" style={{height:'100%', width:'100%',maxWidth:'100%'}}>
                        <iframe style={{height:'100%',width:'100%',border:'0'}} frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=jawaharnagar,+khanapara,+Guwahati,+Assam,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
                    </div>
                    <a class="from-embedmap-code" rel="nofollow" href="https://www.bootstrapskins.com/themes" id="grab-maps-authorization">premium bootstrap themes</a>
                    <style className='.mapCss'>{mapCss}</style>
                </div>
            </div>
        </section>
        <Footer/>
    </>
  )
}

export default Contact