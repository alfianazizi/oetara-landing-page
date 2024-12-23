import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const OurNavigator = ({data, our_nav}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div className='absolute top-1/2 left-1/2 transform flex justify-center items-center -translate-x-1/2 -translate-y-1/2 w-[100%] lg:w-[80%] px-5 lg:px-10'>
          <div className="w-full h-auto">
            <motion.h2 
                ref={ref}
                initial={{ opacity: 0, translateY: '-2rem' }} 
                animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-[4rem] font-['montserrat-semibold'] text-[#C01C30] text-center mb-8 md:mb-10"
            >
                Our Navigators
            </motion.h2>
            <motion.p 
                ref={ref}
                initial={{ opacity: 0, translateY: '-2rem' }} 
                animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center text-[#231F20] mb-12 md:text-[2rem] md:px-[10%] leading-[1.3]"
            >
                {our_nav}
            </motion.p>
            <div className="grid grid-cols-3 gap-2 lg:gap-8 max-w-4xl lg:max-w-7xl mx-auto">
                {data.length > 0 && data.slice(0,3).map((item, key) => (
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, scale: 0 }} 
                        animate={isVisible ? { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.2 * key } } : {}} 
                        key={key} 
                        className="aspect-square flex flex-col items-center w-[100%] relative group"
                    >
                        <img className="w-full h-full object-cover object-top" src={item.acf.photo} alt="Navigator 1" />
                        {/* Hover Overlay */}
                        <div className="cursor-pointer absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                            <h3 className="text-sm md:text-[1.5rem] font-['montserrat-bold'] mb-3">{item.acf.name}</h3>
                            <p className="text-xs md:text-[1.2rem] text-gray-300">{item.acf.position}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <motion.div
                ref={ref} 
                initial={{ opacity: 0, translateY: '-2rem' }} 
                animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                transition={{ duration: 0.5, delay: 1 }}
                className="text-center py-8 md:py-10"
            >
              <Link to="/team" className="text-black hover:text-[#C01C30] md:text-xl inline-flex items-center">
                See all our navigator <FaChevronRight size={18} className='ml-5' />
              </Link>
            </motion.div>
          </div>
        </div>
    )
}

export default OurNavigator;