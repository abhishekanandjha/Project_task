import React from 'react';
// import img from'./8.png';
import './Contact.css';
import { FaEnvelope, FaHome } from 'react-icons/fa';
import { FaPhoneSquareAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <div>
            <section style={{ backgroundImage: `url(${require('../Contactus/3.png')})` }} className='space-y-8 bg-cover bg-center h-screen text-white flex flex-col items-center w-full'>
                <h1 className='text-4xl md:text-7xl font-bold text-center text-black'>CONTACT US</h1>
                <div className=''>
                    <h2 className='text-4xl text-center text-sky-800 top-[20%]'>College Jaankaar</h2>
                </div>
                <div className='flex w-full bottom-10 px-2 md:px-10 py-40 items-center justify-between'>
                    <div className='left'>
                        <h3 className='text-3xl'>WE will guided......</h3>
                        <h3 className='text-3xl'>.....about website  </h3>
                    </div>
                    <div className='flex flex-col'>
                        <div className='registration'>
                            <button>For registration</button>
                        </div>
                        <div className='email flex space-x-2'>
                            <FaEnvelope size={25} className='email1' />
                            <p>abcd@gmail.com</p>
                        </div>
                        <div className='flex space-x-2'>
                            <FaPhoneSquareAlt size={25} className='phone1' />
                            <div>
                                <p>123-456-7890</p>
                            </div>
                        </div>
                        <div className='flex space-x-2'>
                            <FaHome size={25} />
                            <div>
                                <p>company address</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='p-2 flex justify-center flex-col pic2 w-full h-screen'>
                {/* <div className='pic2'> */}
                <h1 className='text-center uppercase text-3xl font-bold md:text-7xl'>our location</h1>
                <div className='w-full h-[80%]'>
                    <iframe className='flex w-[100%] h-[98%]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.282371686708!2d77.35004491353396!3d28.620152160741206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456ef36d9f%3A0x3b7191b1286136c8!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1684655226564!5m2!1sen!2sin" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div>
                    <input type='text' name='text' placeholder='search' className='h-16 w-[60%] mt-2 text-center rounded-lg text-4xl ' />
                </div>

                {/* </div> */}
            </div>
        </div>
    );
};

export default Contact;