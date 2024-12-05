import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import nav_1 from '../../assets/image/navigator-1.jpg';
import nav_2 from '../../assets/image/navigator-2.jpg';
import nav_3 from '../../assets/image/navigator-3.jpg';

const OurNavigator = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    const our_nav = [
        {
            image: nav_1,
            name: 'Name',
            type: 'Direktur'
        },
        {
            image: nav_2,
            name: 'Name',
            type: 'Direktur'
        },
        {
            image: nav_3,
            name: 'Name',
            type: 'Direktur'
        },
    ]

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
                className="text-3xl font-[600] text-[#C01C30] text-center mb-4"
            >
                Our Navigators
            </motion.h2>
            <motion.p 
                ref={ref}
                initial={{ opacity: 0, translateY: '-2rem' }} 
                animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center text-gray-600 mb-12 text-xl"
            >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.
            </motion.p>
            <div className="grid grid-cols-3 gap-2 lg:gap-8 max-w-4xl lg:max-w-7xl mx-auto">
                {our_nav.map((item, key) => (
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, scale: 0 }} 
                        animate={isVisible ? { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.2 * key } } : {}} 
                        key={key} 
                        className="aspect-square flex flex-col items-center w-[100%] relative group"
                    >
                        <img className="w-full h-full object-cover object-top" src={item.image} alt="Navigator 1" />
                        {/* Hover Overlay */}
                        <div className="cursor-pointer absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                            <h3 className="text-sm lg:text-xl font-medium">{item.name}</h3>
                            <p className="text-xs lg:text-md text-gray-300">{item.type}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <motion.div
                ref={ref} 
                initial={{ opacity: 0, translateY: '-2rem' }} 
                animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                transition={{ duration: 0.5, delay: 1 }}
                className="text-center mt-8"
            >
              <Link to="/team" className="text-gray-600 hover:text-[#EC1C24] md:text-xl inline-flex items-center">
                See all our navigator <span className="ml-2">→</span>
              </Link>
            </motion.div>
          </div>
        </div>
    )
}

export default OurNavigator;