import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { getWork } from '../api/work';
import { useEffect, useState } from 'react';

const CaseStudy = () => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [isLoad, setIsLoad] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0);
    handleWork()
  }, [])

  const handleWork = async () => {
    setIsLoad(true)
    const result = await getWork();
    try {
      setList(result)
      setIsLoad(false)
    } catch (err) {
      setIsLoad(false)
    }
  }

  return (
    <section className="my-12">
      <div className="container mx-auto px-8 md:px-12 py-12">
        <motion.h3 
          initial={{ opacity: 0, translateY: '-1.5rem' }} 
          animate={{ opacity: 1, translateY: 0 }} 
          transition={{ duration: 0.5 }} 
          className="text-3xl md:text-[2.5rem] lg:text-[3rem] font-['montserrat-bold'] mt-5 md:mt-0 mb-6 md:mb-8"
        >
          Case Study
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, translateY: '-1.5rem' }} 
          animate={{ opacity: 1, translateY: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}  
          className="mb-8 lg:mb-12 text-md md:text-[1.65rem] text-[#231F20]"
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
          nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </motion.p>

        {!isLoad ? 
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {list.map((item, key) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0 }} 
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.1 * key } }} 
                whileHover={{ scale: 1.02 }}
                key={item.id} 
                className={`relative group cursor-pointer rounded-lg overflow-hidden
                  ${item.id === 2 ? 'col-span-1 row-span-1' : ''}
                  ${item.id === 1 || item.id === 3 ? 'col-span-1 row-span-1' : ''}
                  ${item.id === 4 || item.id === 5 ? 'col-span-1' : ''}
                `}
                onClick={() => {
                  if (window.innerWidth <= 768) { // Check for mobile resolution
                    setTimeout(() => navigate(`/work/detail-work/${item.slug}`), 1000); // 1 seconds delay
                  } else {
                    navigate(`/work/detail-work/${item.slug}`); // No delay for larger screens
                  }
                }}
                style={{ boxShadow: 'rgba(149, 157, 165, 0.7) 0px 8px 24px'}}
              >
                {item.acf.image_header !== "" ?
                  <img 
                    src={item.acf.image_header} 
                    alt="work_header"
                    className="w-full h-full object-cover"
                    style={{ aspectRatio: item.id === 2 ? '1/1' : '4/3' }}
                  />
                :
                  <svg className='rounded-none md:rounded-lg shadow-image object-cover' viewBox="0 0 290 227">
                      <rect width="100%" height="100%" fill="lightgray" />
                      <text x="145" y="113.5" textAnchor="middle" dominantBaseline="middle" fill="gray" fontSize="20">Image Work</text>
                  </svg>
                }
                {/* Hover Overlay */}
                <div className="absolute rounded-xl inset-0 bg-black/[76%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-2 text-center">
                  <p className="text-[0.8rem] md:text-[1.498rem] font-['montserrat-semibold'] md:mb-8">{item.title.rendered.indexOf('/&#8211;/g') === -1 ? item.title.rendered.split(/&#8211;/g)[1] : item.title.rendered.replace(/&#8211;/g, '–')}</p>
                  {item && item.title && <p className="text-[0.8rem] md:text-[1.592rem] font-['montserrat-bold'] md:mb-6">{item.title.rendered.indexOf('/&#8211;/g') === -1 ? 'for '+ item.title.rendered.split(/&#8211;/g)[0] : ''}</p>}
                  <span className="md:mt-2 md:text-[3rem]">→</span>
                </div>
              </motion.div>
            ))}
          </div>
        :
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-8">
            <div role="status" className="flex items-center justify-center h-56 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
            <div role="status" className="flex items-center justify-center h-56 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
            <div role="status" className="flex items-center justify-center h-56 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
            <div role="status" className="flex items-center justify-center h-56 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
            <div role="status" className="flex items-center justify-center h-56 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
            <div role="status" className="flex items-center justify-center h-56 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        }
      </div>
    </section>
  );
};

export default CaseStudy;
