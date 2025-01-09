import { FaAngleLeft, FaChevronLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { getLetter, getNavTeam, getTeam } from '../api/navigator';

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoad, setIsLoad] = useState(false)
  const swiperRef = useRef(null);
  const [letter, setLetter] = useState({})
  const [team, setTeam] = useState([]);

  useEffect(() => {
    setIsLoad(true)
    handleLetter()
    handleTeam()
  }, [])

  const handleLetter =  async () => {
    const result = await getLetter();
    try {
      setLetter(result)
    } catch (err) {
      console.log(err)
    }
  }

  const handleTeam = async () => {
    const result = await getTeam();
    try {
      getNavigatorTeam(result)
    } catch (err) {
      console.log(err);
    }
  }

  const getNavigatorTeam = async (data) => {
    const result = await getNavTeam();
    try {
      const matchedItems = data.map(team => {
        const matchedRes = result.find(res => team['navigator-team'].includes(res.id));
        return {
          name: matchedRes ? matchedRes.name : '',
          data: team
        };
      });

      let filtered = {};
      matchedItems.forEach(item => {
        if (!filtered[item.name]) {
          filtered[item.name] = { ...item, data: [item.data] };
        } else {
          filtered[item.name].data.push(item.data);
        }
      });
      filtered = Object.values(filtered);
      setTeam(filtered)
      setIsLoad(false)
    } catch (err) {
      console.log('error', err)
    }
  }

  return (
    <div className="mx-auto container px-10 py-12">
      
      {/* Breadcrumb */}
      <div className="flex justify-center items-center lg:mt-10">
        <Link to="/navigator" className="hidden container md:flex items-center gap-2 text-[#929497] font-['montserrat-bold'] text-[1.5rem] mb-8 hover:text-[#C01C30]">
          <FaChevronLeft /> Navigator
        </Link>
      </div>

      {/* Title Section */}
      {!isLoad ? 
        <section className="mb-12">
          <motion.h1
            initial={{ opacity: 0, translateY: '-1.5rem' }} 
            animate={{ opacity: 1, translateY: 0 }} 
            transition={{ duration: 0.5 }} 
            className="text-3xl md:text-[2.5rem] lg:text-[3rem] mt-8 font-['montserrat-bold']"
          >
            {letter.length > 0 && "acf" in letter[0] ? letter[0]['acf']['our_navigator'] : 'Our Navigator'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, translateY: '-1.5rem' }} 
            animate={{ opacity: 1, translateY: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }} 
            className="text-[#231F20] lg:text-[1.5rem] my-4 lg:mb-20 lg:mt-8"
          >
            {letter.length > 0 && "acf" in letter[0] ? letter[0]['acf']['team_heading'] : ''}
          </motion.p>
        </section>
      :
        <div role="status" className="w-full mb-12 animate-pulse">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100%] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          <span className="sr-only">Loading...</span>
        </div>
      }

      {/* Team Section */}
      {!isLoad ? 
        <section className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, translateY: '-1.5rem' }} 
            animate={{ opacity: 1, translateY: 0 }} 
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl md:text-[2.5rem] lg:text-[3rem] font-['montserrat-semibold'] text-[#C01C30] text-center my-10 md:my-16"
          >
            Our {team && team[currentSlide] && team[currentSlide]['name']}
          </motion.h2>
          
          <Swiper
            ref={swiperRef}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
            onSlideChange={(swiper) => {
              setCurrentSlide(swiper.activeIndex);
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {team.length > 0 && team.map((item, i) => 
              <SwiperSlide key={i}>
                <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-2 md:gap-4">
                  {item.data.map((member, key) => (
                    <motion.div 
                      key={member.id}
                      initial={{ opacity: 0, translateY: '-1.5rem' }} 
                      animate={{ opacity: 1, translateY: 0 }} 
                      transition={{ duration: 0.5, delay: 0.6 * key}} 
                      className="cursor-pointer aspect-square relative group overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      <img src={member.acf.photo} alt="navigator" className="w-auto object-cover" />
                      {member.acf.name && (
                        <div className={`absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-center
                          ${member.acf.name ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}
                        >
                          <div>
                            <h3 className="text-[10px] md:text-xl font-['montserrat-bold']">{member.acf.name}</h3>
                            <p className="text-[8px] md:text-lg">{member.acf.position}</p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </SwiperSlide>
            )}
          </Swiper>
          
          {/* Custom Pagination */}
          <div className="flex justify-center mt-4 lg:mt-10">
            {Array.from({ length: Math.ceil(team.length) }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  swiperRef.current.swiper.slideTo(index);
                }}
                className={`w-8 h-8 rounded-xl flex items-center justify-center font-['montserrat-semibold'] mx-1 p-2 ${currentSlide === index ? 'bg-[#C01C30] text-white' : 'bg-[#D1D3D4] text-[#C01C30]'}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </section>
      :
        <div role="status" className="w-full mb-20 animate-pulse">
          <div className="flex justify-center">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80 mb-4"></div>
          </div>
          <div className="flex gap-4 mt-3">
            <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
              </svg>
            </div>
            <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
              </svg>
            </div>
            <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
              </svg>
            </div>
            <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
              </svg>
            </div>
          </div>
          <span className="sr-only">Loading...</span>
        </div> 
      }
    </div>
  );
};

export default Team; 