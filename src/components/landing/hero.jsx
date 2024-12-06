import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ cover, cover_mobile, jalur}) => {
    return (
        <div className="relative h-[100vh]">
            <div className="flex justify-center items-center">
                <div className='absolute top-[16%] md:top-[10%] container px-5 md:px-10'>
                    <motion.p 
                        className="title-landing font-[500]" 
                        // className="absolute left-[2rem] lg:left-[4rem] title-landing font-[500]" 
                        initial={{ opacity: 0, y: -20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1, delay: 1 }}
                    >
                        Navigating for Innovation
                    </motion.p>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }} 
                className="hidden lg:inline-block absolute w-[100%]"
            >
                <motion.img 
                    src={jalur} 
                    alt="route" 
                    className="animate-draw w-[100%] h-[100vh]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                />
            </motion.div>
            <motion.img 
                src={cover} 
                alt="cover" 
                className="hidden lg:inline-block w-[100%] h-[100vh]" 
                initial={{ opacity: 0, translateY: '10rem' }} 
                animate={{ opacity: 1, translateY: '0' }} 
                transition={{ duration: 2 }}
            />
            <motion.div 
                initial={{ opacity: 0, translateY: '10rem' }}
                animate={{ opacity: 1, translateY: '0' }}
                transition={{ duration: 2 }}
                className="inline-block md:hidden w-[100%] h-[100vh]" 
                style={{
                    backgroundImage: `url(${cover_mobile})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: '85%  top',
                }}
            ></motion.div>
        </div>
    )
}

export default Hero