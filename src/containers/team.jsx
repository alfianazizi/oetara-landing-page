import { FaAngleLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    // Row 1
    { id: 1, name: "Name", role: "Director" },
    { id: 2, name: "Name", role: "Director" },
    { id: 3, name: "Name", role: "Director" },
    { id: 4, name: "Name", role: "Director" },
    { id: 5, name: "Name", role: "Director" },
    // Row 2
    { id: 6, name: "Name", role: "Designer" },
    { id: 7, name: "Name", role: "Developer" },
    { id: 8, name: "Name", role: "Marketing" },
    { id: 9, name: "Name", role: "Content Writer" },
    { id: 10, name: "Name", role: "SEO Specialist" },
    { id: 11, name: "Name", role: "Project Manager" },
    { id: 12, name: "Name", role: "QA Engineer" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null);

  return (
    <div className="mx-auto container px-10 md:px-[5rem] py-12">
      
      {/* Breadcrumb */}
      <div className="py-10">
        <Link 
          to="/navigator"
          className="text-gray-600 flex gap-2 hover:text-[#EC1C24] transition-colors duration-200"
          aria-label="Back to Navigator"
        >
          <FaAngleLeft className='text-lg mt-1' /> 
          <p className='mb-0'>Navigator</p>
        </Link>
      </div>

      {/* Title Section */}
      <section className="mb-12">
        <motion.h1
          initial={{ opacity: 0, translateY: '-1.5rem' }} 
          animate={{ opacity: 1, translateY: 0 }} 
          transition={{ duration: 0.5 }} 
          className="text-4xl font-bold"
        >
          Our Navigator
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, translateY: '-1.5rem' }} 
          animate={{ opacity: 1, translateY: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }} 
          className="text-gray-600 mt-4"
        >
          We are Navigators not only crafting the right message but also setting 
          the measurable goals and will be your guidance through Digital World 
          Crowdedness.
        </motion.p>
      </section>

      {/* Team Section */}
      <section className="mb-20">
        <motion.h2 
          initial={{ opacity: 0, translateY: '-1.5rem' }} 
          animate={{ opacity: 1, translateY: 0 }} 
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl font-[600] text-center text-[#EC1C24] mb-10"
        >
          Our Creative Team
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
          <SwiperSlide>
            <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-2 md:gap-4">
              {teamMembers.map((member, key) => (
                <motion.div 
                  key={member.id}
                  initial={{ opacity: 0, translateY: '-1.5rem' }} 
                animate={{ opacity: 1, translateY: 0 }} 
                transition={{ duration: 0.5, delay: 0.6 * key}} 
                  className="cursor-pointer aspect-square relative group overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <svg className="w-full h-full object-cover" viewBox="0 0 100 100">
                    <rect width="100" height="100" fill="#F5F5F5" />
                    <text x="50%" y="50%" alignmentBaseline="middle" textAnchor="middle" fontSize="16" fill="#EC1C24" fontWeight="bold" opacity="0.5">F O T O</text>
                  </svg>
                  {member.name && (
                    <div className={`absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-center
                      ${member.name ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}
                    >
                      <div>
                        <h3 className="text-[10px] md:text-xl font-medium">{member.name}</h3>
                        <p className="text-[8px] md:text-lg text-gray-300">{member.role}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-2 md:gap-4">
              {teamMembers.map((member, key) => (
                <motion.div 
                  key={member.id}
                  initial={{ opacity: 0, translateY: '-1.5rem' }} 
                animate={{ opacity: 1, translateY: 0 }} 
                transition={{ duration: 0.5, delay: 0.6 * key}} 
                  className="cursor-pointer aspect-square relative group overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <svg className="w-full h-full object-cover" viewBox="0 0 100 100">
                    <rect width="100" height="100" fill="#F5F5F5" />
                    <text x="50%" y="50%" alignmentBaseline="middle" textAnchor="middle" fontSize="16" fill="#EC1C24" fontWeight="bold" opacity="0.5">F O T O</text>
                  </svg>
                  {member.name && (
                    <div className={`absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-center
                      ${member.name ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}
                    >
                      <div>
                        <h3 className="text-[10px] md:text-xl font-medium">{member.name}</h3>
                        <p className="text-[8px] md:text-lg text-gray-300">{member.role}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
        
        {/* Custom Pagination */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: Math.ceil(teamMembers.length / 6) }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                swiperRef.current.swiper.slideTo(index);
              }}
              className={`w-8 h-8 rounded-xl flex items-center justify-center mx-1 p-2 ${currentSlide === index ? 'bg-[#EC1C24] text-white' : 'bg-[#D1D3D4] text-[#EC1C24]'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team; 