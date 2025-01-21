import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const OurTeam = ({handleJoinClick}) => {
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
        <div className="absolute inset-0 flex items-end bottom-[5%] lg:bottom-10 justify-center">
            <div className="flex flex-wrap justify-between max-w-3xl px-4 py-4 mx-8 bg-white shadow-lg lg:flex-nowrap lg:py-8 lg:px-8 rounded-xl lg:mx-4">
                <div className='w-[100%] lg:w-[60%]'>
                <motion.h2 
                    ref={ref}
                    initial={{ opacity: 0, translateY: '-1.5rem' }} 
                    animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-2xl md:text-[2.5rem] font-['montserrat-semibold'] text-[#C01C30] py-2 lg:py-4 px-4"
                >
                    Join Us!
                </motion.h2>
                <motion.p
                    ref={ref}
                    initial={{ opacity: 0, translateY: '-1.5rem' }} 
                    animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-[#231F20] text-sm px-4 py-2"
                >
                    Step into the world of digital navigation with us—where exciting, creative campaigns lead the way to unforgettable success!
                </motion.p>
                </div>
                <div className='w-[100%] lg:w-auto flex justify-start lg:justify-center items-center'>
                <motion.button 
                    ref={ref}
                    initial={{ opacity: 0, translateY: '-2rem' }} 
                    animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                    transition={{ duration: 0.5, delay: 0.3 }}
                    onClick={handleJoinClick}
                    className="bg-[#C01C30] border hover:border-[#C01C30] h-auto text-[0.9rem] lg:text-[1rem] text-white px-8 py-2 lg:py-3 rounded-full hover:bg-white hover:text-[#C01C30] font-['montserrat-bold'] transition-colors"
                >
                    Join Now
                </motion.button>
                </div>
            </div>
        </div>
    )
}

export default OurTeam;