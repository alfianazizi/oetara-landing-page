import service_1 from '../assets/pattern/SVG/service_1.svg';
import service_2 from '../assets/pattern/SVG/service_2.svg';
import service_3 from '../assets/pattern/SVG/service_3.svg';
import service_4 from '../assets/pattern/SVG/service_4.svg';

import stage_1 from '../assets/image/stage-1.jpg';
import stage_2 from '../assets/image/stage-2.jpg';
import stage_3 from '../assets/image/stage-3.jpg';
import stage_4 from '../assets/image/stage-4.jpg';
import stage_5 from '../assets/image/stage-5.jpg';
import stage_6 from '../assets/image/stage-6.jpg';

import texture from '../assets/pattern/bg-texture.jpg'

import { motion } from 'motion/react';
import { useEffect } from 'react';

const Service = () => {
  const our_service = [
    {
        icon: service_1,
        title: {
            title_1: 'Influence people using',
            title_2: 'Impactful influencer'
        },
        text: 'KOL from Nano to Mega, Community, Live Streaming, Trending Topic'
    },
    {
        icon: service_2,
        title: {
            title_1: 'Creative Idea makes',
            title_2: 'Creative Output'
        },
        text: 'Social media Maintenance, Video Production, Digital Activation'
    },
    {
        icon: service_3,
        title: {
            title_1: 'Advertise Your Brand',
            title_2: ''
        },
        text: 'Meta Ads, Tiktok Ads, Google Ads, Linkedin Ads'
    },
    {
        icon: service_4,
        title: {
            title_1: 'Impressive Marketing',
            title_2: 'Strategy'
        },
        text: 'Digital Marketing 360, Influencer Marketing and Digital Ads strategy with impressive Accuration.'
    }
  ]

  const stages = [
    {
      number: 1,
      title: "Input Brief",
      image: stage_1
    },
    {
      number: 2,
      title: "Understand Client Expectation",
      image: stage_2
    },
    {
      number: 3,
      title: "Data Research & Analysis",
      image: stage_3
    },
    {
      number: 6,
      title: "Report & Suggestion",
      image: stage_6
    },
    {
      number: 5,
      title: "Grow your Business",
      image: stage_5
    },
    {
      number: 4,
      title: "Creative Idea & Concept",
      image: stage_4
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <div className="mx-auto container px-8 lg:px-12 py-12 my-12">
        {/* Hero Section */}
        <motion.h1 
          initial={{ opacity: 0, translateY: '-1.5rem' }} 
          animate={{ opacity: 1, translateY: 0 }} 
          transition={{ duration: 0.5 }} 
          className="text-3xl md:text-[2.5rem] lg:text-[3rem] font-['montserrat-bold'] mb-6"
        >
          Our Service
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, translateY: '-1.5rem' }} 
          animate={{ opacity: 1, translateY: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }} 
          className="text-[#231F20] text-[1.5rem] my-4 lg:my-8"
        >
          OETARA is a maps where top strategic, creative, Influencer, and analysts who
          called themselves "Navigator" let us show you the right path
        </motion.p>
        <motion.p
          initial={{ opacity: 0, translateY: '-1.5rem' }} 
          animate={{ opacity: 1, translateY: 0 }} 
          transition={{ duration: 0.5, delay: 0.3 }}  
          className="text-[#231F20] text-[1.5rem] my-8 lg:my-16"
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
          nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </motion.p>

        {/* Services Grid - Update the styling */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-8 pt-[2rem] pb-24">
          {our_service.map((item, key) => 
            <motion.div 
              initial={{ opacity: 0, scale: 0 }} 
              animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.5 * key } }} 
              key={key} 
              className="bg-white rounded-[7%] cursor-pointer py-4 lg:py-8 px-5 lg:px-8 xl:px-10 max-w-xs hover:!scale-[1.03] !transition-transform !duration-300 ease-in-out"
              style={{ boxShadow: 'rgba(149, 157, 165, 0.7) 0px 8px 24px'}}
            >
                <div className="flex justify-center">
                    <div className="bg-[#F0F1F1] p-5 rounded-full">
                        <img src={item.icon} alt="" className='w-12 h-12 lg:w-20 lg:h-20' />
                    </div>
                </div>
                <div className="py-3 text-center">
                    <p className="font-['montserrat-bold'] py-0 text-[0.8rem] lg:text-[1rem]">{item.title.title_1}</p>
                    <p className="font-['montserrat-bold'] py-0 text-[0.8rem] lg:text-[1rem]">{item.title.title_2}</p>
                </div>
                <div className="py-2 md:py-3 text-center text-xs md:text-sm">{item.text}</div>
            </motion.div>
          )}
        </div>

      </div>
      
      {/* Stages of Service */}
      <div className="relative">
        <img src={texture} alt="texture" className="w-full h-[100vh] opacity-50" />
        <div className="absolute top-1/2 md:top-1/2 left-1/2 transform flex justify-center items-center -translate-x-1/2 -translate-y-1/2 container px-5 lg:px-10">
          <div>
            <motion.h2
              initial={{ opacity: 0, translateY: '-1.5rem' }} 
              animate={{ opacity: 1, translateY: 0 }} 
              transition={{ duration: 0.5, delay: 1.8 }}  
              className="text-3xl md:text-[2.5rem] lg:text-[3rem] font-['montserrat-semibold'] text-center mb-12 text-[#DC2626]"
            >
              Stages of Service
            </motion.h2>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-x-1 gap-y-1 md:gap-x-16 md:gap-y-20 mb-12 relative">
              {stages.map((stage, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, translateY: '-1.5rem' }} 
                  animate={{ opacity: 1, translateY: 0 }} 
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.5 * (stage.number - 1)  
                  }}  
                  className="relative"
                >
                  {/* Panah ke kanan untuk stage 1 dan 2 */}
                  {(index === 0 || index === 1) && (
                    <div className="hidden md:block absolute -right-10 top-1/2 transform -translate-y-1/2">
                      <span className="text-[#DC2626] text-4xl">»</span>
                    </div>
                  )}
                  {/* Panah ke bawah untuk stage 3 */}
                  {index === 2 && (
                    <div className="hidden md:block absolute left-1/2 bottom-[-4rem] transform -translate-x-1/2">
                      <span className="text-[#DC2626] text-4xl rotate-90 inline-block">»</span>
                    </div>
                  )}
                  {/* Panah ke kiri untuk stage 4 dan 5 */}
                  {(index === 4 || index === 3) && (
                    <div className="hidden md:block absolute -right-10 top-1/2 transform -translate-y-1/2 rotate-180">
                      <span className="text-[#DC2626] text-4xl">»</span>
                    </div>
                  )}
                  {/* Card dengan border putih dan shadow */}
                  <div className={`bg-white px-1 py-2 md:py-4 md:px-4 rounded-none md:rounded-lg shadow-lg relative`}>
                    {/* Badge nomor dengan warna merah */}
                    <div className="flex items-center">
                      <div className="bg-[#C01C30] text-white rounded-sm md:rounded-lg py-1 md:py-2 px-2 md:px-4 text-[10px] md:text-[1.4rem] font-bold">
                        {stage.number}
                      </div>
                      <h3 className="text-[8px] md:text-[1rem] ml-2 font-['montserrat-semibold']">{stage.title}</h3>
                    </div>
                    <div className='mt-2 md:mt-6'>
                      <img 
                        src={stage.image} 
                        alt={stage.title}
                        className="w-full h-20 md:h-48 mt-2 md:mt-6 rounded-none md:rounded-lg shadow-image object-cover"
                      />
                      {/* <svg className='rounded-none md:rounded-lg shadow-image object-cover' viewBox="0 0 290 227">
                          <rect width="100%" height="100%" fill="lightgray" />
                          <text x="145" y="113.5" textAnchor="middle" dominantBaseline="middle" fill="gray" fontSize="14">Image Stage Of Service</text>
                      </svg> */}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Service;
