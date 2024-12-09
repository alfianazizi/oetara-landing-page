import { useEffect, useRef, useState } from 'react';
import ContactForm from '../email';

const ContactUs = () => {
    return (
        <div className="flex justify-center items-center px-5 md:px-10">
            <div className='container px-5 md:px-10'>
                <div className="bg-white py-10 md:py-20 px-5 md:px-10 -mt-[40%] lg:-mt-[20%] relative rounded-2xl shadow-xl">
                    <div className="mx-auto">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default ContactUs;