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
import { useEffect, useState } from 'react';
import { getService } from '../api/service';

const Service = () => {
  const [letter, setLetter] = useState({});
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
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

  const handleService = async () => {
    const result = await getService();
    try {
      if (result.length > 0) {
        setLetter(result[0])
        const filtered = result.slice(1);
        let sort = filtered.sort((a,b) => a.id - b.id);
        setList(sort)
      }
    } catch(err) {
      console.log(err)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    handleService()
  }, [])

  return (
    <div>
      {loading ? (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }} 
          className="flex justify-center items-start h-screen"
        >
          <div role="status" className="w-full py-16 mx-auto container md:mt-10 h-section1 px-5 lg:px-10 animate-pulse">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100%] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          <div className="flex justify-center mt-10 md:mt-16">
          </div>
          <div className="flex flex-wrap lg:flex-nowrap gap-4 lg:gap-5 mt-3">
            <div className="flex items-center justify-center w-full h-80 bg-gray-300 rounded-[7%] sm:w-96 dark:bg-gray-700">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
              </svg>
            </div>
            <div className="flex items-center justify-center w-full h-80 bg-gray-300 rounded-[7%] sm:w-96 dark:bg-gray-700">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
              </svg>
            </div>
            <div className="flex items-center justify-center w-full h-80 bg-gray-300 rounded-[7%] sm:w-96 dark:bg-gray-700">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
              </svg>
            </div>
            <div className="flex items-center justify-center w-full h-80 bg-gray-300 rounded-[7%] sm:w-96 dark:bg-gray-700">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
              </svg>
            </div>
          </div>
        </div>
        </motion.div>
      ) : (
        <>
          <div className="mx-auto container px-8 lg:px-12 py-12 my-12">
            {/* Hero Section */}
            <motion.h1 
              initial={{ opacity: 0, translateY: '-1.5rem' }} 
              animate={{ opacity: 1, translateY: 0 }} 
              transition={{ duration: 0.5 }} 
              className="text-3xl md:text-[2.5rem] lg:text-[3rem] font-['montserrat-bold'] mb-6"
            >
              {letter && 'title' in letter && letter.title.rendered}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, translateY: '-1.5rem' }} 
              animate={letter && 'acf' in letter ? { opacity: 1, translateY: 0 } : {}} 
              transition={{ duration: 0.5, delay: 0.2 }} 
              className="text-[#231F20] lg:text-[1.5rem] my-4 lg:my-8"
              dangerouslySetInnerHTML={{ __html: letter && "acf" in letter ? letter.acf.description : ''}}
            >
            </motion.p>
            {/* <motion.p
              initial={{ opacity: 0, translateY: '-1.5rem' }} 
              animate={letter && "acf" in letter ? { opacity: 1, translateY: 0 } : {}} 
              transition={{ duration: 0.5, delay: 0.3 }}  
              className="text-[#231F20] lg:text-[1.5rem] my-8 lg:my-16"
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
              nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </motion.p> */}

            {/* Services Grid - Update the styling */}
            {list.length > 0 ? 
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 pt-[2rem] pb-24">
                {list.map((item, key) => 
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }} 
                    animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.1 * key } }} 
                    key={item.id} 
                    className="bg-white rounded-[7%] cursor-pointer py-4 lg:py-8 px-5 lg:px-8 xl:px-10 max-w-xs hover:!scale-[1.03] !transition-transform !duration-300 ease-in-out"
                    style={{ boxShadow: 'rgba(149, 157, 165, 0.7) 0px 8px 24px'}}
                  >
                      <div className="flex justify-center">
                          <div className="bg-[#F0F1F1] p-5 rounded-full">
                              <img src={our_service[key]['icon']} alt="" className='w-12 h-12 lg:w-20 lg:h-20' />
                          </div>
                      </div>
                      <div className="py-3 text-center">
                          <p className="font-['montserrat-bold'] py-0 text-[0.8rem] lg:text-[1rem]">{item.title.rendered}</p>
                          {/* <p className="font-['montserrat-bold'] py-0 text-[0.8rem] lg:text-[1rem]">{item.title.title_2}</p> */}
                      </div>
                      <div className="py-2 md:py-3 text-center text-xs md:text-[0.917rem] leading-[1.5]" dangerouslySetInnerHTML={{ __html: item.acf.description }}></div>
                  </motion.div>
                )}
              </div>
            : null}
          </div>
          
          {/* Stages of Service */}
          {list.length > 0 ? 
            <div className="relative">
              <div 
                className="absolute w-full h-[1rem] inset-0 bg-gradient-to-b from-white z-[10]"
              ></div>
              <img 
                src={texture} alt="" 
                className='w-full h-[100vh] object-cover' 
                style={{ opacity: 0.48 }} 
              />
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
                  <div className="grid grid-cols-3 md:grid-cols-3 gap-x-8 gap-y-8 md:gap-x-16 md:gap-y-20 mb-12 relative">
                    {stages.map((stage, index) => (
                      <motion.div 
                        key={stage.number}
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
                          <div className="absolute -right-6 lg:-right-10 top-1/2 transform -translate-y-1/2">
                            <span className="text-[#DC2626] text-4xl lg:text-[3rem]">»</span>
                          </div>
                        )}
                        {/* Panah ke bawah untuk stage 3 */}
                        {index === 2 && (
                          <div className="absolute left-1/2 bottom-[-2.5rem] lg:bottom-[-4rem] transform -translate-x-1/2">
                            <span className="text-[#DC2626] text-4xl lg:text-[3rem] rotate-90 inline-block">»</span>
                          </div>
                        )}
                        {/* Panah ke kiri untuk stage 4 dan 5 */}
                        {(index === 4 || index === 3) && (
                          <div className="absolute -right-6 lg:-right-10 top-1/2 transform -translate-y-1/2 rotate-180">
                            <span className="text-[#DC2626] text-4xl lg:text-[3rem]">»</span>
                          </div>
                        )}
                        {/* Card dengan border putih dan shadow */}
                        <div className={`bg-white px-1 py-1 rounded-none md:rounded-lg shadow-lg relative`} style={{ boxShadow: 'rgba(149, 157, 165, 0.7) 0px 8px 24px'}}>
                          {/* Badge nomor dengan warna merah */}
                          <div className="flex items-center h-[8vh] md:h-[10vh]">
                            <div className="bg-[#C01C30] text-white rounded-sm md:rounded-lg py-1 md:py-2 px-2 md:px-4 m-0 lg:m-4 text-[10px] md:text-[1.4rem] font-['montserrat-bold']">
                              {stage.number}
                            </div>
                            <h3 className="text-[8px] md:text-[1rem] ml-2 font-['montserrat-semibold']">{stage.title}</h3>
                          </div>
                          <div className='mt-2 lg:mt-0'>
                            <img 
                              src={stage.image} 
                              alt={stage.title}
                              className="w-full h-20 md:h-48  rounded-none md:rounded-md shadow-image object-cover"
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          : null}
        </>
      )}
    </div>
  );
};

export default Service;
