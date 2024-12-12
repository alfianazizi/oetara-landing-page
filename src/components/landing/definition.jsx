import alphaO from '../../assets/logo/O_logo.svg';
import alphaE from '../../assets/logo/E_logo.svg';
import alphaT from '../../assets/logo/T_logo.svg';
import alphaA from '../../assets/logo/A_logo.svg';
import alphaR from '../../assets/logo/R_logo.svg';

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react';

const Definition = () => {
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
        <div 
            className="bg-[#161616] h-[110vh] text-white relative definition-top rounded-b-[10%] md:rounded-b-[5%] lg:rounded-b-[10%] z-[2]"
            style={{ boxShadow: '0 -10px 20px #161616' }}
        >
            <div className="flex flex-col w-full justify-center items-center h-full gap-10 lg:gap-[8rem]">
                <div>
                    <motion.div 
                        ref={ref}
                        initial={{ opacity: 0, pathLength: 0 }} 
                        animate={isVisible ? { opacity: 1, pathLength: 1 } : {}} 
                        transition={{ duration: 1 }} 
                        className='border border-[#EC1C24] py-16 lg:py-[8rem] mx-5 md:mx-0 lg:px-[5rem] rounded-[2rem]'
                    >
                    </motion.div>
                    <div className="-mt-[32%] md:-mt-[21%] flex justify-center gap-3 lg:gap-[5rem] py-5 lg:py-[2rem] mx-5 px-5 lg:px-[5rem] rounded-[2rem]">
                        <motion.div 
                            ref={ref}
                            initial={{ opacity: 0, translateY: '-2rem' }} 
                            animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                            transition={{ duration: 1, delay: 0.5 }} 
                            className="text-center"
                        >
                            <img src={alphaO} alt="O" className="lg:w-[4.5rem] lg:h-[4.5rem] w-8 h-8 mx-auto" />
                            <p className="text-[0.5rem] mt-4 font-['montserrat-medium'] md:text-[1rem]">Outstanding <br></br> Outcome</p>
                        </motion.div>
                        <motion.div 
                            ref={ref}
                            initial={{ opacity: 0, translateY: '-2rem' }} 
                            animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                            transition={{ duration: 1, delay: 0.6 }} 
                            className="text-center"
                        >
                            <img src={alphaE} alt="E" className="lg:w-[4.5rem] lg:h-[4.5rem] w-8 h-8 mx-auto" />
                            <p className="text-[0.5rem] mt-4 font-['montserrat-medium'] md:text-[1rem]">Execellent <br></br> Execution</p>
                        </motion.div>
                        <motion.div 
                            ref={ref}
                            initial={{ opacity: 0, translateY: '-2rem' }} 
                            animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                            transition={{ duration: 1, delay: 0.7 }} 
                            className="text-center"
                        >
                            <img src={alphaT} alt="T" className="lg:w-[4.5rem] lg:h-[4.5rem] w-8 h-8 mx-auto" />
                            <p className="text-[0.5rem] mt-4 font-['montserrat-medium'] md:text-[1rem]">Trusted<br></br> Team</p>
                        </motion.div>
                        <motion.div 
                            ref={ref}
                            initial={{ opacity: 0, translateY: '-2rem' }} 
                            animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                            transition={{ duration: 1, delay: 0.8 }} 
                            className="text-center"
                        >
                            <img src={alphaA} alt="A" className="lg:w-[4.5rem] lg:h-[4.5rem] w-8 h-8 mx-auto" />
                            <p className="text-[0.5rem] mt-4 font-['montserrat-medium'] md:text-[1rem]">Accurate <br></br> Analysis</p>
                        </motion.div>
                        <motion.div 
                            ref={ref}
                            initial={{ opacity: 0, translateY: '-2rem' }} 
                            animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                            transition={{ duration: 1, delay: 0.9 }} 
                            className="text-center"
                        >
                            <img src={alphaR} alt="R" className="lg:w-[4.5rem] lg:h-[4.5rem] w-8 h-8 mx-auto" />
                            <p className="text-[0.5rem] mt-4 font-['montserrat-medium'] md:text-[1rem]">Real <br></br> Result</p>
                        </motion.div>
                        <motion.div 
                            ref={ref}
                            initial={{ opacity: 0, translateY: '-2rem' }} 
                            animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                            transition={{ duration: 1, delay: 1 }} 
                            className="text-center"
                        >
                            <img src={alphaA} alt="A" className="lg:w-[4.5rem] lg:h-[4.5rem] w-8 h-8 mx-auto" />
                            <p className="text-[0.5rem] mt-4 font-['montserrat-medium'] md:text-[1rem]">Advance <br></br> Assistant</p>
                        </motion.div>
                    </div>
                </div>
                <div className="pt-[3rem] lg:pt-[6rem] lg:w-[900px]">
                    <motion.p 
                        ref={ref}
                        initial={{ opacity: 0, translateY: '-2rem' }} 
                        animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                        transition={{ duration: 1, delay: 1.3 }} 
                        className="text-center text-[#E5E6E7] text-[1.5rem] md:text-[2rem] lg:text-[3rem] font-['montserrat-bold'] py-5"
                    >
                        We are Navigators
                    </motion.p>
                    <motion.p 
                        ref={ref}
                        initial={{ opacity: 0, translateY: '-2rem' }} 
                        animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                        transition={{ duration: 1, delay: 1.5 }} 
                        className="text-center text-[1rem] md:text-[2rem] px-5 font-[200] text-[#D0D2D3] font-['montserrat-regular']"
                    >
                        not only crafting the right message but also
                        setting the measurable goals and will be your
                        guidance through Digital World Crowdedness.
                    </motion.p>
                </div>
            </div> 
        </div>
    )
}

export default Definition