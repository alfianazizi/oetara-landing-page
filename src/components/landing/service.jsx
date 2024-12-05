import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import service_1 from '../../assets/pattern/SVG/service_1.svg';
import service_2 from '../../assets/pattern/SVG/service_2.svg';
import service_3 from '../../assets/pattern/SVG/service_3.svg';
import service_4 from '../../assets/pattern/SVG/service_4.svg';

const OurService = () => {
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

    const our_service = [
        {
            icon: service_1,
            title: {
                title_1: 'Influence people using',
                title_2: 'Impactful influencer'
            },
            text: 'KOL from Nano to Mega, Community, Live Streaming, Trending Topic'
        },
        {
            icon: service_2,
            title: {
                title_1: 'Creative Idea makes',
                title_2: 'Creative Output'
            },
            text: 'Social media Maintenance, Video Production, Digital Activation'
        },
        {
            icon: service_3,
            title: {
                title_1: 'Advertise Your Brand',
                title_2: ''
            },
            text: 'Meta Ads, Tiktok Ads, Google Ads, Linkedin Ads'
        },
        {
            icon: service_4,
            title: {
                title_1: 'Impressive Marketing',
                title_2: 'Strategy'
            },
            text: 'Digital Marketing 360, Influencer Marketing and Digital Ads strategy with impressive Accuration.'
        }
    ]
    return (
        <div className="absolute top-[55%] md:top-1/2 left-1/2 transform flex justify-center items-center -translate-x-1/2 -translate-y-1/2 container px-5 lg:px-10">
            <div className="w-full mx-auto">
                <motion.p 
                    ref={ref}
                    initial={{ opacity: 0, translateY: '-2rem' }} 
                    animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                    transition={{ duration: 1}} 
                    className="text-[2rem] lg:text-[3rem] text-center font-[500] text-[#EC1C24] mb-8"
                >
                    Our Service
                </motion.p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 justify-items-center">
                    {our_service.map((item, key) => 
                        <motion.div 
                            ref={ref}
                            key={key} 
                            initial={{ opacity: 0, scale: 0 }} 
                            animate={isVisible ? { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.5 * key } } : {}} 
                            whileHover={{ scale: 1.10 }}
                            className="bg-white rounded-xl shadow-lg py-4 lg:py-8 px-5 lg:px-8 xl:px-10 max-w-xs"
                        >
                            <div className="flex justify-center">
                                <div className="bg-[#F0F1F1] p-5 rounded-full">
                                    <img src={item.icon} alt="" className='w-8 h-8 lg:w-16 lg:h-16' />
                                </div>
                            </div>
                            <div className="py-3 text-center">
                                <p className="font-[500] py-0 text-sm lg:text-md">{item.title.title_1}</p>
                                <p className="font-[500] py-0 text-sm lg:text-md">{item.title.title_2}</p>
                            </div>
                            <div className="text-center text-sm">{item.text}</div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default OurService;