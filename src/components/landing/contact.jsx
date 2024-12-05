import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const ContactUs = () => {
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
        <div className="bg-white py-10 md:py-20 px-10 -mt-[40%] lg:-mt-[20%] relative mx-[6%] rounded-2xl shadow-xl">
            <div className="max-w-7xl mx-auto">
                <div className="grid  lg:grid-cols-2 gap-20">
                    {/* Left Column */}
                    <div>
                        <motion.h2 
                            ref={ref}
                            initial={{ opacity: 0, translateY: '-2rem' }} 
                            animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                            transition={{ duration: 1 }} 
                            className="text-[#EC1C24] text-3xl md:text-5xl font-medium mb-4"
                        >
                            Get in touch
                        </motion.h2>
                        <motion.p 
                            ref={ref}
                            initial={{ opacity: 0, translateY: '-2rem' }} 
                            animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                            transition={{ duration: 1, delay: 0.2 }} 
                            className="text-gray-600 mb-12"
                        >
                            Leave us your details and a member of our team will get back to you as soon as possible.
                        </motion.p>

                        {/* Location */}
                        <div className="flex items-start gap-6 mb-8">
                            <motion.div 
                                ref={ref}
                                initial={{ opacity: 0, translateX: '-2rem' }} 
                                animate={isVisible ? { opacity: 1, translateX: 0 } : {}} 
                                transition={{ duration: 0.5, delay: 0.4 }} 
                                className="bg-[#EC1C24] p-3 rounded-full"
                            >
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                            </motion.div>
                            <div>
                                <motion.h3 
                                    ref={ref}
                                    initial={{ opacity: 0, translateX: '-2rem' }} 
                                    animate={isVisible ? { opacity: 1, translateX: 0 } : {}} 
                                    transition={{ duration: 0.5, delay: 0.6 }} 
                                    className="font-medium mb-2"
                                >
                                    Location
                                </motion.h3>
                                <motion.p 
                                    ref={ref}
                                    initial={{ opacity: 0, translateX: '-2rem' }} 
                                    animate={isVisible ? { opacity: 1, translateX: 0 } : {}} 
                                    transition={{ duration: 0.5, delay: 0.8 }} 
                                    className="text-gray-600"
                                >
                                    Jade Selatan No.27, Gading Serpong,<br />Jl Pondok Hijau Golf Raya, Tangerang.
                                </motion.p>
                            </div>
                        </div>

                        {/* Email Us */}
                        <div className="flex items-start gap-6 mb-8">
                            <motion.div 
                                ref={ref}
                                initial={{ opacity: 0, translateX: '-2rem' }} 
                                animate={isVisible ? { opacity: 1, translateX: 0 } : {}} 
                                transition={{ duration: 0.5, delay: 1 }} 
                                className="bg-[#EC1C24] p-3 rounded-full"
                            >
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </motion.div>
                            <div>
                                <motion.h3 
                                    ref={ref}
                                    initial={{ opacity: 0, translateX: '-2rem' }} 
                                    animate={isVisible ? { opacity: 1, translateX: 0 } : {}} 
                                    transition={{ duration: 0.5, delay: 1.1 }} 
                                    className="font-medium mb-2"
                                >
                                    Email Us
                                </motion.h3>
                                <motion.p 
                                    ref={ref}
                                    initial={{ opacity: 0, translateX: '-2rem' }} 
                                    animate={isVisible ? { opacity: 1, translateX: 0 } : {}} 
                                    transition={{ duration: 0.5, delay: 1.2 }} 
                                    className="text-gray-600"
                                >
                                    syamsan@oetara.co.id
                                </motion.p>
                                <motion.p 
                                    ref={ref}
                                    initial={{ opacity: 0, translateX: '-2rem' }} 
                                    animate={isVisible ? { opacity: 1, translateX: 0 } : {}} 
                                    transition={{ duration: 0.5, delay: 1.3 }} 
                                    className="text-gray-600"
                                >
                                    kevin@oetara.co.id
                                </motion.p>
                            </div>
                        </div>

                        {/* Call Us */}
                        <div className="flex items-start gap-6">
                            <motion.div
                                ref={ref}
                                initial={{ opacity: 0, translateX: '-2rem' }} 
                                animate={isVisible ? { opacity: 1, translateX: 0 } : {}} 
                                transition={{ duration: 0.5, delay: 1.4 }}  
                                className="bg-[#EC1C24] p-3 rounded-full"
                            >
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </motion.div>
                            <div>
                                <motion.h3 
                                    ref={ref}
                                    initial={{ opacity: 0, translateX: '-2rem' }} 
                                    animate={isVisible ? { opacity: 1, translateX: 0 } : {}} 
                                    transition={{ duration: 0.5, delay: 1.5 }} 
                                    className="font-medium mb-2"
                                >
                                    Call Us
                                </motion.h3>
                                <motion.p
                                    ref={ref}
                                    initial={{ opacity: 0, translateX: '-2rem' }} 
                                    animate={isVisible ? { opacity: 1, translateX: 0 } : {}} 
                                    transition={{ duration: 0.5, delay: 1.6 }}  
                                    className="text-gray-600"
                                >
                                    +6281317712002
                                </motion.p>
                                <motion.p 
                                    ref={ref}
                                    initial={{ opacity: 0, translateX: '-2rem' }} 
                                    animate={isVisible ? { opacity: 1, translateX: 0 } : {}} 
                                    transition={{ duration: 0.5, delay: 1.6 }} 
                                    className="text-gray-600"
                                >
                                    +6285718313907
                                </motion.p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div>
                        <form className="space-y-3 md:space-y-6 md:mt-8">
                            <motion.input
                                ref={ref}
                                initial={{ opacity: 0, translateY: '-2rem' }} 
                                animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                                transition={{ duration: 0.5, delay: 1.7 }} 
                                type="text"
                                placeholder="Full Name"
                                className="w-full px-4 py-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:border-[#EC1C24]"
                            />
                            <motion.input
                                ref={ref}
                                initial={{ opacity: 0, translateY: '-2rem' }} 
                                animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                                transition={{ duration: 0.5, delay: 1.8 }} 
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:border-[#EC1C24]"
                            />
                            <motion.input
                                ref={ref}
                                initial={{ opacity: 0, translateY: '-2rem' }} 
                                animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                                transition={{ duration: 0.5, delay: 1.9 }} 
                                type="text"
                                placeholder="Subject"
                                className="w-full px-4 py-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:border-[#EC1C24]"
                            />
                            <motion.textarea
                                ref={ref}
                                initial={{ opacity: 0, translateY: '-2rem' }} 
                                animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                                transition={{ duration: 0.5, delay: 2 }} 
                                placeholder="Message"
                                rows="4"
                                className="w-full px-4 py-3 rounded-3xl bg-white border border-gray-300 focus:outline-none focus:border-[#EC1C24]"
                            ></motion.textarea>
                            <motion.button
                                ref={ref}
                                initial={{ opacity: 0, translateY: '-2rem' }} 
                                animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                                transition={{ duration: 0.5, delay: 2.1 }} 
                                type="submit"
                                className="bg-[#EC1C24] text-white px-8 py-3 rounded-full hover:bg-[#d11920] transition-colors"
                            >
                                Submit
                            </motion.button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default ContactUs;