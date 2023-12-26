import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Button from '../ui/Button'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

const Contact = () => {

    const validateSchema = Yup.object().shape({
        fullname: Yup.string().required("*This field is required"),
        email: Yup.string().email("Please enter a valid email").required("*This field is required"),
        phonenumber: Yup.string().required("*This field is required"),
        message: Yup.string().required("*This field is required")
         
      });
  return (
    <>
        <Navbar/>
        <Header title={'Contact Us'}/>
        <section className='flex lg:flex-row flex-col justify-center items-center gap-12 p-12 '>
            <div className='lg:w-[50vw] w-[90vw]'>
                <h2 className='text-3xl mb-4 font-bold'>Get to Know Us</h2>
                <Formik
                    initialValues={{ fullname: "", email: "", phonenumber: "", message: "" }}
                    validationSchema={validateSchema}
                    onSubmit={(values,{ setSubmitting})=> {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                          }, 400);
                    }}
                >
                    {({isSubmitting})=> (
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
                          >Send to Us</Button>

                            
                        </Form>
                    )}
                </Formik>
               
            </div>
            <div className=''>
                <iframe
                 className='p-2 lg:w-[50vw] w-[95vw]' 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.6088022470067!2d91.77985157344392!3d26.144295242129918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5923b109797f%3A0x1e84a3dca5a2bd58!2sEkodus%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1701075645004!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
        <Footer/>
    </>
  )
}

export default Contact