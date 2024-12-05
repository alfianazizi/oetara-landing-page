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
        <div className="absolute inset-0 flex items-end bottom-0 lg:bottom-10 justify-center">
            <div className="bg-white flex justify-between flex-wrap lg:flex-nowrap p-4 lg:p-8 rounded-xl shadow-lg mx-4 max-w-3xl">
                <div className='w-[100%] lg:w-[70%]'>
                <motion.h2 
                    ref={ref}
                    initial={{ opacity: 0, translateY: '-1.5rem' }} 
                    animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-2xl font-bold text-red-600 mb-4"
                >
                    Join Our Team
                </motion.h2>
                <motion.p
                    ref={ref}
                    initial={{ opacity: 0, translateY: '-1.5rem' }} 
                    animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-gray-600 mb-6"
                >
                    Be part of our growing team and help shape the future of digital marketing. Join us in creating innovative solutions.
                </motion.p>
                </div>
                <div className='w-[100%] lg:w-auto flex justify-start lg:justify-center items-center'>
                <motion.button 
                    ref={ref}
                    initial={{ opacity: 0, translateY: '-2rem' }} 
                    animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                    transition={{ duration: 0.5, delay: 0.3 }}
                    onClick={handleJoinClick}
                    className="bg-red-600 h-auto text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors"
                >
                    Join Now
                </motion.button>
                </div>
            </div>
        </div>
    )
}

export default OurTeam;