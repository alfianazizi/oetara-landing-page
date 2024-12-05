import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa6';

const OurWork = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    const our_work = [
        {
            title: 'KOL Service',
            desc: 'for Dejavu'
        },
        {
            title: 'KOL Service',
            desc: 'for Dejavu'
        },
        {
            title: 'KOL Service',
            desc: 'for Dejavu'
        },
        {
            title: 'KOL Service',
            desc: 'for Dejavu'
        },
        {
            title: 'KOL Service',
            desc: 'for Dejavu'
        },
        {
            title: 'KOL Service',
            desc: 'for Dejavu'
        }
    ]

    const handleWork = () => {
        navigate('/work');
    }

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
        <div className="absolute container top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%] lg:w-[90%]">
            <div className="w-full mx-auto px-10 lg:px-[5rem]">
                <motion.p 
                    ref={ref}
                    initial={{ opacity: 0, translateY: '-2rem' }} 
                    animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                    transition={{ duration: 1}} 
                    className="text-[2rem] lg:text-[3rem] text-center font-[500] text-[#EC1C24] mb-8"
                >
                    Our Work
                </motion.p>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 justify-items-center mb-8">
                    {our_work.map((item, key) => (
                        <motion.div 
                            ref={ref}
                            key={key} 
                            initial={{ opacity: 0, scale: 0 }} 
                            animate={isVisible ? { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.5 * key } } : {}} 
                            whileHover={{ scale: 1.03 }}
                            className="flex flex-col items-center w-[100%] relative group"
                        >
                            <svg className='rounded-xl shadow-image object-cover' viewBox="0 0 290 227">
                                <rect width="100%" height="100%" fill="lightgray" />
                                <text x="145" y="113.5" textAnchor="middle" dominantBaseline="middle" fill="gray" fontSize="14">Image Work</text>
                            </svg>
                            {/* Hover Overlay */}
                            <div className="absolute rounded-xl inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                                <p className="md:text-xl font-medium md:mb-4 ">{item.title}</p>
                                {item.desc && <p className="text-sm md:text-lg md:mb-4">{item.desc}</p>}
                                <span className="md:mt-2 md:text-2xl">→</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="flex justify-center mt-16">
                    <motion.button 
                        ref={ref}
                        initial={{ opacity: 0, translateY: '-2rem' }} 
                        animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                        transition={{ duration: 1, delay: 2.8}} 
                        className='py-2 px-10 bg-white rounded-full font-[600] flex items-center shadow-2xl hover:bg-gray-50 transition-colors' 
                        onClick={() => handleWork()}
                    >
                        <span className='lg:text-[18px] mr-5'>See all our work</span>
                        <FaChevronRight size={18} />
                    </motion.button>
                </div>
            </div>
        </div>
    )
}

export default OurWork;