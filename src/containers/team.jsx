import { FaAngleLeft, FaChevronLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { getTeam } from '../api/navigator';

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
  const [team, setTeam] = useState([]);

  useEffect(() => {
    handleTeam()
  }, [])

  const handleTeam = async () => {
    const result = await getTeam();
    try {
      // Slice the result into chunks of 12
      const chunkedTeam = sliceIntoChunks(result, 12);
      setTeam(chunkedTeam);
    } catch (err) {
      console.log(err);
    }
  }

  // Utility function to slice an array into chunks
  const sliceIntoChunks = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  }

  return (
    <div className="mx-auto container px-10 py-12">
      
      {/* Breadcrumb */}
      {/* <div className="py-10">
        <Link 
          to="/navigator"
          className="text-gray-600 flex gap-2 hover:text-[#EC1C24] transition-colors duration-200"
          aria-label="Back to Navigator"
        >
          <FaAngleLeft className='text-lg mt-1' /> 
          <p className='mb-0'>Navigator</p>
        </Link>
      </div> */}
      <div className="flex justify-center items-center lg:mt-10">
        <Link to="/navigator" className="hidden container md:flex items-center gap-2 text-[#929497] font-['montserrat-bold'] text-[1.5rem] mb-8 hover:text-[#C01C30]">
          <FaChevronLeft /> Navigator
        </Link>
      </div>

      {/* Title Section */}
      <section className="mb-12">
        <motion.h1
          initial={{ opacity: 0, translateY: '-1.5rem' }} 
          animate={{ opacity: 1, translateY: 0 }} 
          transition={{ duration: 0.5 }} 
          className="text-3xl md:text-[2.5rem] lg:text-[3rem] mt-8 font-['montserrat-bold']"
        >
          Our Navigator
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, translateY: '-1.5rem' }} 
          animate={{ opacity: 1, translateY: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }} 
          className="text-[#231F20] text-[1.5rem] my-4 lg:mb-20 lg:mt-8"
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
          className="text-3xl md:text-[2.5rem] lg:text-[3rem] font-['montserrat-semibold'] text-[#C01C30] text-center my-10 md:my-16"
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
          {team.length > 0 && team.map((item, key) => 
            <SwiperSlide>
              <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-2 md:gap-4">
                {item.map((member, key) => (
                  <motion.div 
                    key={member.id}
                    initial={{ opacity: 0, translateY: '-1.5rem' }} 
                  animate={{ opacity: 1, translateY: 0 }} 
                  transition={{ duration: 0.5, delay: 0.6 * key}} 
                    className="cursor-pointer aspect-square relative group overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <img src={member.acf.photo} alt="navigator" className="w-auto object-cover" />
                    {/* <svg className="w-full h-full object-cover" viewBox="0 0 100 100">
                      <rect width="100" height="100" fill="#F5F5F5" />
                      <text x="50%" y="50%" alignmentBaseline="middle" textAnchor="middle" fontSize="16" fill="#EC1C24" fontWeight="bold" opacity="0.5">F O T O</text>
                    </svg> */}
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
          {Array.from({ length: Math.ceil(team.length / 6) }).map((_, index) => (
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
    </div>
  );
};

export default Team; 