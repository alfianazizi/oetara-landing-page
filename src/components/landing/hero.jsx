import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ cover, cover_mobile, jalur}) => {
    return (
        <div className="relative h-[100vh] w-full overflow-hidden">
            <div className="flex justify-center items-center">
                <div className='absolute top-[16%] md:top-[10%] container px-5 md:px-10'>
                    <motion.div 
                        initial={{ opacity: 0, marginLeft: '10rem' }}
                        animate={{ opacity: 1, marginLeft: 0 }}
                        transition={{ 
                            duration: 2,
                            delay: 0.4,
                            opacity: { duration: 0 }
                        }}
                        className="title-landing font-['montserrat-extrabold']" 
                    >
                        <div className='flex'>
                            <motion.p
                            >
                                We 
                            </motion.p> &nbsp;
                            <motion.p
                                initial={{opacity: 0, marginTop: '2rem' }}
                                animate={{ opacity: 1, marginTop: 0 }}
                                transition={{ delay: 0.6,  ease: "backOut" }}
                            >
                                Provide
                            </motion.p> &nbsp;
                            <motion.p
                                initial={{opacity: 0, marginTop: '2rem' }}
                                animate={{ opacity: 1, marginTop: 0 }}
                                transition={{ delay: 0.8,  ease: "backOut" }}
                            >
                                Dire
                            </motion.p> 
                            <motion.p
                                initial={{opacity: 0, marginTop: '2rem' }}
                                animate={{ opacity: 1, marginTop: 0 }}
                                transition={{ delay: 1,  ease: "backOut" }}
                            >
                                ction,
                            </motion.p>    
                        </div>
                        <div className='flex'>
                            <motion.p
                                initial={{opacity: 0, marginTop: '2rem' }}
                                animate={{ opacity: 1, marginTop: 0 }}
                                transition={{ delay: 1.5,  ease: "backOut" }}
                            >
                                NOT
                            </motion.p> &nbsp;
                            <motion.p
                                initial={{opacity: 0, marginTop: '2rem' }}
                                animate={{ opacity: 1, marginTop: 0 }}
                                transition={{ delay: 1.6,  ease: "backOut" }}
                            >
                                Direc
                            </motion.p>
                            <motion.p
                                initial={{opacity: 0, marginTop: '2rem' }}
                                animate={{ opacity: 1, marginTop: 0 }}
                                transition={{ delay: 1.7, ease: "backOut" }}
                            >
                                tions
                            </motion.p>
                        </div>
                    </motion.div>
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
                    transition={{ delay: 3.5 }}
                />
            </motion.div>
            <motion.img 
                src={cover} 
                alt="cover" 
                className="hidden lg:inline-block w-[100%] h-[100vh]"
                initial={{
                    opacity: 1,
                    scale: 1.1,
                    y: 600,
                    rotateX: 10
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    rotateX: 0
                }}
                transition={{
                    duration: 2,
                    ease: "easeOut",
                    opacity: { duration: 1.5 },
                    scale: { duration: 2.2 },
                    y: { duration: 1.8, delay: 0.8 },
                }}
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