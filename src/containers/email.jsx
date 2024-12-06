// import { useState } from 'react';
import { useEffect, useState } from 'react';
import { getInformation } from '../api/information';
import '../styles/email.css';
import { motion } from 'motion/react';

const Email = () => {
  const [info, setInfo] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    handleInformation()
  }, [])

  const handleInformation = async () => {
    const result = await getInformation()
    try {
      console.log(result)
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
        <div className="container flex-grow px-5 md:px-10">
          <div className="bg-white shadow-xl md:shadow-2xl rounded-xl p-8 w-full min-h-full relative z-[10]">
            <div className="flex flex-col md:flex-row md:space-x-8">
              {/* Contact Information Side */}
              <div className="md:w-1/2 mb-6 md:mb-0">
                <motion.h2 
                  initial={{ opacity: 0, translateY: '-1.5rem' }} 
                  animate={{ opacity: 1, translateY: 0 }} 
                  transition={{ duration: 0.5, delay: 0.8 }} 
                  className="text-red-600 text-2xl md:text-[28px] font-bold mb-2"
                >
                  Get in touch
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, translateY: '-1.5rem' }} 
                  animate={{ opacity: 1, translateY: 0 }} 
                  transition={{ duration: 0.5, delay: 0.9 }}  
                  className="text-gray-600 text-sm md:text-lg mb-6"
                >
                  Leave us your details and a member of our team will get back to you as soon as possible.
                </motion.p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <motion.div
                      initial={{ opacity: 0, translateX: '-1.5rem' }} 
                      animate={{ opacity: 1, translateX: 0 }} 
                      transition={{ duration: 0.5, delay: 1 }}  
                      className="bg-red-600 p-2 rounded-full"
                    >
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                    <div className="text-sm md:text-[16px]">
                      <motion.p 
                        initial={{ opacity: 0, translateX: '-1.5rem' }} 
                        animate={{ opacity: 1, translateX: 0 }} 
                        transition={{ duration: 0.5, delay: 1.1 }}
                        className="text-gray-700 font-medium mb-1"
                      >
                        Location
                      </motion.p>
                      <motion.p 
                        initial={{ opacity: 0, translateX: '-1.5rem' }} 
                        animate={{ opacity: 1, translateX: 0 }} 
                        transition={{ duration: 0.5, delay: 1.2 }}
                        className="text-gray-600 text-sm"
                      >
                        Jade Sedayu No.27, Gading Serpong,<br/>Jl Pondok Hijau Golf Raya, Tangerang.
                      </motion.p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <motion.div
                      initial={{ opacity: 0, translateX: '-1.5rem' }} 
                      animate={{ opacity: 1, translateX: 0 }} 
                      transition={{ duration: 0.5, delay: 1.2 }} 
                      className="bg-red-600 p-2 rounded-full"
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5z" />
                      </svg>
                    </motion.div>
                    <div className="text-sm md:text-[16px]">
                      <motion.p 
                        initial={{ opacity: 0, translateX: '-1.5rem' }} 
                        animate={{ opacity: 1, translateX: 0 }} 
                        transition={{ duration: 0.5, delay: 1.3 }} 
                        className="text-gray-700 font-medium mb-1"
                      >
                        Email Us
                      </motion.p>
                      <motion.p 
                        initial={{ opacity: 0, translateX: '-1.5rem' }} 
                        animate={{ opacity: 1, translateX: 0 }} 
                        transition={{ duration: 0.5, delay: 1.4 }} 
                        className="text-gray-600 text-sm"
                      >
                        syamsan@oetara.co.id<br/>kevin@oetara.co.id
                      </motion.p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <motion.div
                      initial={{ opacity: 0, translateX: '-1.5rem' }} 
                      animate={{ opacity: 1, translateX: 0 }} 
                      transition={{ duration: 0.5, delay: 1.5 }}  
                      className="bg-red-600 p-2 rounded-full"
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </motion.div>
                    <div className="text-sm md:text-[16px]">
                      <motion.p 
                        initial={{ opacity: 0, translateX: '-1.5rem' }} 
                        animate={{ opacity: 1, translateX: 0 }} 
                        transition={{ duration: 0.5, delay: 1.6 }} 
                        className="text-gray-700 font-medium"
                      >
                        Call Us
                      </motion.p>
                      <motion.p 
                        initial={{ opacity: 0, translateX: '-1.5rem' }} 
                        animate={{ opacity: 1, translateX: 0 }} 
                        transition={{ duration: 0.5, delay: 1.7 }} 
                        className="text-gray-600"
                      >
                        +628131771202<br/>+628571831390
                      </motion.p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form Side */}
              <div className="md:w-1/2">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <motion.input
                    initial={{ opacity: 0, translateY: '-1.5rem' }} 
                    animate={{ opacity: 1, translateY: 0 }} 
                    transition={{ duration: 0.5, delay: 1 }}
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600 bg-white"
                  />
                  <motion.input
                    initial={{ opacity: 0, translateY: '-1.5rem' }} 
                    animate={{ opacity: 1, translateY: 0 }} 
                    transition={{ duration: 0.5, delay: 1.1 }}
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600 bg-white"
                  />
                  <motion.input
                    initial={{ opacity: 0, translateY: '-1.5rem' }} 
                    animate={{ opacity: 1, translateY: 0 }} 
                    transition={{ duration: 0.5, delay: 1.2 }}
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600 bg-white"
                  />
                  <motion.textarea
                    initial={{ opacity: 0, translateX: '-1.5rem' }} 
                    animate={{ opacity: 1, translateX: 0 }} 
                    transition={{ duration: 0.5, delay: 1.3 }}
                    placeholder="Message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600 bg-white"
                  />
                  <motion.button
                    initial={{ opacity: 0, translateX: '-1.5rem' }} 
                    animate={{ opacity: 1, translateX: 0 }} 
                    transition={{ duration: 0.5, delay: 1.4 }}
                    type="submit"
                    className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
                  >
                    Submit
                  </motion.button>
                </form>
              </div>
            </div>
          </div>

          {/* Map as background with fixed height */}
          <div className='hidden md:inline-block h-[100vh]'>
            <div className="px-0 absolute left-0 md:top-[60vh] w-[100%] h-[100vh]">
              <div dangerouslySetInnerHTML={{ __html : info && "acf" in info ? info.acf.embed_url : '' }} className='w-full h-full object-cover pointer-events-auto'></div>
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666466960686!2d106.82493841476885!3d-6.175392395527999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonumen%20Nasional!5e0!3m2!1sen!2sid!4v1680123456789!5m2!1sen!2sid"
                className="w-full h-full object-cover pointer-events-auto cursor-pointer"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe> */}
            </div>
          </div>

        </div>
      </div>
      <div className='relative mt-5 inline-block md:hidden w-full h-[50vh]'>
        <div dangerouslySetInnerHTML={{ __html : info && "acf" in info ? info.acf.embed_url : '' }} className='w-full h-full object-cover pointer-events-auto'></div>
        {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666466960686!2d106.82493841476885!3d-6.175392395527999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonumen%20Nasional!5e0!3m2!1sen!2sid!4v1680123456789!5m2!1sen!2sid"
            className="w-full h-full object-cover pointer-events-auto cursor-pointer"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe> */}
      </div>
    </div>
  );
};

export default Email;