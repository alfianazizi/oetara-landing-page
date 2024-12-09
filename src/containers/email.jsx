// import { useState } from 'react';
import { useEffect, useState } from 'react';
import { getInformation } from '../api/information';
import '../styles/email.css';
import { motion } from 'motion/react';
import ContactUs from '../components/email';

const Email = () => {
  const [info, setInfo] = useState({})

  useEffect(() => {
    window.scrollTo(0, 0);
    handleInformation()
  }, [])

  const handleInformation = async () => {
    const result = await getInformation()
    try {
      setInfo(result[0])
    } catch (err) {
      console.log(err)
    }
  }

  return (
    
    <div className="sm:email-container w-full min-h-screen flex flex-col overflow-x-hidden">
      <div className="flex justify-center items-center">
        <div className="contact-header container mt-10 md:mt-16 !mb-5 md:!mb-10 px-6 md:px-10">
          <motion.h3
            initial={{ opacity: 0, translateY: '-1.5rem' }} 
            animate={{ opacity: 1, translateY: 0 }} 
            transition={{ duration: 0.5 }}  
            className='text-3xl lg:text-4xl leading[1.2] md:leading-[1.1] py-12 md:py-4 font-[600]'
          >
            Contact Us & Let&apos;s Collaborate!
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, translateY: '-1.5rem' }} 
            animate={{ opacity: 1, translateY: 0 }} 
            transition={{ duration: 0.5, delay: 0.5 }} 
            className='lg:text-xl'
          >
            Say us a Hello. Get to know each other. Tell us your story. We listen. We tell you our story. 
            You listen. Then you ask simple question. We answer. We ask you back. You answer. And then we getting closer and…
          </motion.p>
          <motion.p
            initial={{ opacity: 0, translateY: '-1.5rem' }} 
            animate={{ opacity: 1, translateY: 0 }} 
            transition={{ duration: 0.5, delay: 0.7 }}  
            className='mt-10 lg:text-xl'
          >
            Oh hey, we haven’t even start the conversation, but it looks like we already miss you. Please drop us a line.
          </motion.p>
        </div>

      </div>

      <div className="flex justify-center items-center">
        <div>
          <div className="container flex-grow px-5 md:px-10">
            <div className="bg-white shadow-xl md:shadow-2xl rounded-xl p-8 w-full min-h-full relative z-[10]">
              <ContactUs ref={null} />
            </div>
          </div>
        </div>
      </div>

      {/* Map as background with fixed height */}
      <div className='hidden md:inline-block'>
        <div className="px-0 -mt-[30vh]">
          <div dangerouslySetInnerHTML={{ __html : info && "acf" in info ? info.acf.embed_url : '' }} className='!w-full h-full object-cover pointer-events-auto'></div>
        </div>
      </div>
      
      <div className='relative mt-5 inline-block md:hidden w-full h-[50vh]'>
        <div dangerouslySetInnerHTML={{ __html : info && "acf" in info ? info.acf.embed_url : '' }} className='w-full h-full object-cover pointer-events-auto'></div>
      </div>
    </div>
  );
};

export default Email;