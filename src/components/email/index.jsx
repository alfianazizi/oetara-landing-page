import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { postForm } from '../../api/contact';
import pin from '../../assets/pattern/SVG/pin.svg';
import phone from '../../assets/pattern/SVG/phone.svg';
import envelope from '../../assets/pattern/SVG/email.svg';

const ContactForm = ({ data }) => {
    const [body, setBody] = useState({ name: '', email: '', subject: '', message: '' })
    const [error, setError] = useState({ name: '', email: '', subject: '', message: '' });
    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false)
    const [isVisible, setIsVisible] = useState(false);
    const [loadForm, setLoadForm] = useState(false)
    const headerRef = useRef(null);
    const formRef = useRef(null);
    const contactInfoRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        });

        // Observe all refs
        [headerRef, formRef, contactInfoRef].forEach(currentRef => {
            if (currentRef.current) {
                observer.observe(currentRef.current);
            }
        });

        return () => {
            [headerRef, formRef, contactInfoRef].forEach(currentRef => {
                if (currentRef.current) {
                    observer.unobserve(currentRef.current);
                }
            });
        };
    }, [])

    const handleValidation = () => {
        const { name, email, subject, message } = body;
        setError({ name: '', email: '', subject: '', message: '' });
        if (!name || !email || !subject || !message) {
            if (!name) setError(prev => ({ ...prev, name: "Name is required." }));
            if (!email) setError(prev => ({ ...prev, email: "Email is required." }));
            if (!subject) setError(prev => ({ ...prev, subject: "Subject is required." }));
            if (!message) setError(prev => ({ ...prev, message: "Message is required." }));
            return false;
        }
        // Simple email format validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setError(prev => ({ ...prev, email: "Please enter a valid email address." }));
            return false;
        }
        return true;
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoadForm(true)
        if (handleValidation()) {
            let bodyForm = new FormData();
            bodyForm.append('your-name', body.name);
            bodyForm.append('your-email', body.email);
            bodyForm.append('your-subject', body.subject);
            bodyForm.append('your-message', body.message);
            bodyForm.append('_wpcf7_unit_tag', 'wpcf7-f123-p456-o1')
            const result = await postForm(bodyForm);
            try {
                setShowMessage(true)
                setBody({name: '', email: '', subject: '', message: ''})
                setMessage(result.message)
                setTimeout(() => {
                    setShowMessage(false)
                }, 15000)
                setLoadForm(false)
            } catch (err) {
                setShowMessage(true)
                setMessage('Error Occured!')
                setTimeout(() => {
                    setShowMessage(false)
                }, 15000)
                setLoadForm(false)
            }
        } else {
            setLoadForm(false)
        }
    };
    
    return (
        <div className="flex flex-col lg:flex-row md:space-x-8">
            {/* Contact Information Side */}
            <div className="lg:w-1/2 mb-6 md:mb-0">
                <motion.h2
                    ref={headerRef} 
                    initial={{ opacity: 0, translateY: '-1.5rem' }} 
                    animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                    transition={{ duration: 0.5 }} 
                    className="text-[#C01C30] text-[2rem] md:text-[2.5rem] lg:text-[4.168rem] font-['montserrat-semibold'] mb-3 lg:mb-10"
                >
                    Get in touch
                </motion.h2>
                <motion.p
                    ref={headerRef}
                    initial={{ opacity: 0, translateY: '-1.5rem' }} 
                    animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                    transition={{ duration: 0.5, delay: 0.1 }}  
                    className="text-[#606060] text-sm md:text-[1.341rem] font-['montserrat-medium'] leading-[1.2] mb-10"
                >
                    Leave us your details and a member of our team will get back to you as soon as possible.
                </motion.p>

                <div className="space-y-8">
                    <div className="flex items-center w-[100%] space-x-3">
                        <motion.div
                            ref={contactInfoRef}
                            initial={{ opacity: 0, translateX: '-1.5rem' }} 
                            animate={isVisible ? { opacity: 1, translateX: 0 } : {}} 
                            transition={{ duration: 0.5, delay: 0.2 }}  
                            className=""
                        >
                            <img src={pin} alt="" className='w-12 h-12 md:w-16 lg:h-16' />
                            {/* <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg> */}
                        </motion.div>
                        <div className="text-sm md:text-[16px] w-[80%]">
                            <motion.p 
                                ref={contactInfoRef}
                                initial={{ opacity: 0, translateX: '-1.5rem' }} 
                                animate={isVisible ? { opacity: 1, translateX: 0 } : {}} 
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="text-[#383838] font-['montserrat-bold'] md:text-[1.2rem] mb-1 md:mb-2"
                            >
                                Location
                            </motion.p>
                            <motion.p 
                                ref={contactInfoRef}
                                initial={{ opacity: 0, translateX: '-1.5rem' }} 
                                animate={isVisible ? { opacity: 1, translateX: 0 } : {}} 
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="text-[#606060] text-[0.7rem] md:text-[1rem] font-['montserrat-medium']"
                            >
                                {data && "acf" in data ? data.acf.address : ''}
                                {/* Jade Sedayu No.27, Gading Serpong, <br></br>
                                Jl Pondok Hijau Golf Raya, Tangerang. */}
                            </motion.p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3">
                        <motion.div
                            ref={contactInfoRef}
                            initial={{ opacity: 0, translateX: '-1.5rem' }} 
                            animate={isVisible ? { opacity: 1, translateX: 0 } : {}} 
                            transition={{ duration: 0.5, delay: 0.5 }} 
                            className=""
                        >
                            <img src={envelope} alt="" className='w-12 h-12 md:w-16 lg:h-16' />
                        </motion.div>
                        <div className="text-sm md:text-[16px] w-[80%]">
                            <motion.p 
                                ref={contactInfoRef}
                                initial={{ opacity: 0, translateX: '-1.5rem' }} 
                                animate={isVisible ? { opacity: 1, translateX: 0 } : {}} 
                                transition={{ duration: 0.5, delay: 0.6 }} 
                                className="text-[#383838] font-['montserrat-bold'] md:text-[1.2rem] mb-1 md:mb-2"
                            >
                                Email Us
                            </motion.p>
                            <div
                                className="text-[#606060] text-[0.7rem] md:text-[1rem] font-['montserrat-medium']"
                            >
                                {data && "acf" in data ? 
                                    data.acf.emails.map((item, index) => 
                                        <motion.p 
                                            key={index}
                                            ref={contactInfoRef} 
                                            initial={{ opacity: 0, translateX: '-1.5rem' }} 
                                            animate={isVisible ? { opacity: 1, translateX: 0 } : {}} 
                                            transition={{ duration: 0.5, delay: 0.2 * index }} 
                                            className='mb-1'
                                        >
                                            {item.email}
                                        </motion.p>
                                    )
                                : ''
                                }
                            </div>
                        </div>
                    </div>
                    {data && "acf" in data && data.acf.contacts.length < 0 ?
                        <div className="flex items-center space-x-3">
                            <motion.div
                                ref={contactInfoRef}
                                initial={{ opacity: 0, translateX: '-1.5rem' }} 
                                animate={isVisible ? { opacity: 1, translateX: 0 } : {}} 
                                transition={{ duration: 0.5, delay: 0.8 }}  
                                className=""
                            >
                                <img src={phone} alt="" className='w-12 h-12 md:w-16 lg:h-16' />
                            </motion.div>
                                <div className="text-sm md:text-[16px] w-[80%]">
                                    <motion.p
                                        ref={contactInfoRef} 
                                        initial={{ opacity: 0, translateX: '-1.5rem' }} 
                                        animate={isVisible ? { opacity: 1, translateX: 0 } : {}} 
                                        transition={{ duration: 0.5, delay: 0.9 }} 
                                        className="text-[#383838] font-['montserrat-bold'] md:text-[1.2rem] mb-1 md:mb-2"
                                    >
                                        Call Us
                                    </motion.p>
                                    <div 
                                        className="text-[#606060] text-[0.7rem] md:text-[1rem] font-['montserrat-medium']"
                                    >
                                        {data && "acf" in data ? 
                                            data.acf.contacts.map((item, index) => 
                                                <motion.p 
                                                    key={index}
                                                    ref={contactInfoRef}
                                                    initial={{ opacity: 0, translateX: '-1.5rem' }} 
                                                    animate={isVisible ? { opacity: 1, translateX: 0 } : {}} 
                                                    transition={{ duration: 0.5, delay: 0.2 * index }} 
                                                    className='mb-1'
                                                >
                                                    {item.phone} {item.name !== "" ? `(${item.name})` : ''}
                                                </motion.p>
                                            )
                                        : ''
                                        }
                                    </div>
                                </div>
                        </div>
                    : ''}
            </div>
            </div>

            {/* Contact Form Side */}
            <div className="lg:w-1/2 md:mt-2">
                <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
                    <motion.input
                        ref={formRef}
                        initial={{ opacity: 0, translateY: '-1.5rem' }} 
                        animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                        transition={{ duration: 0.5, delay: 1 }}
                        type="text"
                        value={body.name}
                        placeholder="Full Name"
                        className="w-full px-4 md:px-6 py-2 mt-3 md:py-3 md:text-[1.3rem] border-[1.16px] border-[#929497] placeholder:text-[#BBBDBF] rounded-full focus:outline-none focus:ring-1 focus:ring-[#C01C30] bg-white"
                        onChange={(e) => {setBody({...body, name: e.target.value}), setError({...error, name: ''})}}
                    />
                    {error.name && 
                        <motion.div
                            initial={{ opacity: 0, translateY: '-1.5rem' }} 
                            animate={{ opacity: 1, translateY: 0 }} 
                            transition={{ duration: 0.5 }}
                            className="text-[#C01C30] !mt-1 text-sm"
                        >
                            {error.name}
                        </motion.div>
                    }
                    <motion.input
                        ref={formRef}
                        initial={{ opacity: 0, translateY: '-1.5rem' }} 
                        animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                        transition={{ duration: 0.5, delay: 1.1 }}
                        type="email"
                        value={body.email}
                        placeholder="Email"
                        className="w-full px-4 md:px-6 py-2 mt-3 md:py-3 md:text-[1.3rem] border-[1.16px] border-[#929497] placeholder:text-[#BBBDBF] rounded-full focus:outline-none focus:ring-1 focus:ring-[#C01C30] bg-white"
                        onChange={(e) => {setBody({...body, email: e.target.value }), setError({...error, email: ''})}}
                    />
                    {error.email && 
                        <motion.div
                            initial={{ opacity: 0, translateY: '-1.5rem' }} 
                            animate={{ opacity: 1, translateY: 0 }} 
                            transition={{ duration: 0.5 }}
                            className="text-[#C01C30] !mt-1 text-sm"
                        >
                            {error.email}
                        </motion.div>
                    }
                    <motion.div className="relative">
                        <motion.select
                            ref={formRef}
                            initial={{ opacity: 0, translateY: '-1.5rem' }} 
                            animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                            transition={{ duration: 0.5, delay: 1.2 }}
                            value={body.subject}
                            className="w-full px-4 md:px-6 py-2 mt-0 md:py-3 md:text-[1.3rem] border-[1.16px] border-[#929497] 
                            placeholder:text-[#BBBDBF] rounded-full focus:outline-none focus:ring-1 focus:ring-[#C01C30] bg-white
                            appearance-none cursor-pointer"
                            onChange={(e) => {setBody({...body, subject: e.target.value }), setError({...error, subject: ''})}}
                        >
                            <option value="" disabled className="text-[#BBBDBF]">Select Subject</option>
                            <option value="KOL">KOL</option>
                            <option value="Community">Community</option>
                            <option value="Social Media Maintenance">Social Media Maintenance</option>
                            <option value="Campaign Strategies Ideation">Campaign Strategies Ideation</option>
                            <option value="360 Digital">360 Digital</option>
                            <option value="Live Streaming">Live Streaming</option>
                            <option value="Video Production">Video Production</option>
                            <option value="Social Media Ads">Social Media Ads</option>
                            <option value="Google Ads">Google Ads</option>
                            <option value="Design">Design</option>
                            <option value="Others">Others (sending a message to us below)</option>
                        </motion.select>
                        
                        {/* Custom arrow */}
                        <motion.div 
                            ref={formRef}
                            initial={{ opacity: 0, translateY: '-1.5rem' }} 
                            animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                            transition={{ duration: 0.5, delay: 1.3 }}
                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center mt-1 px-4 md:px-6 text-gray-700"
                        >
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                            </svg>
                        </motion.div>
                    </motion.div>
                    {error.subject && 
                        <motion.div
                            initial={{ opacity: 0, translateY: '-1.5rem' }} 
                            animate={{ opacity: 1, translateY: 0 }} 
                            transition={{ duration: 0.5 }}
                            className="text-[#C01C30] !mt-1 text-sm"
                        >
                            {error.subject}
                        </motion.div>
                    }
                    <motion.textarea
                        ref={formRef}
                        initial={{ opacity: 0, translateX: '-1.5rem' }} 
                        animate={isVisible ? { opacity: 1, translateX: 0 } : {}} 
                        transition={{ duration: 0.5, delay: 1.3 }}
                        placeholder="Message"
                        value={body.message}
                        rows="4"
                        className="w-full px-4 md:px-6 py-2 mt-3 md:py-3 md:text-[1.3rem] border-[1.16px] border-[#929497] placeholder:text-[#BBBDBF] rounded-[2rem] focus:outline-none focus:ring-1 focus:ring-[#C01C30] bg-white"
                        onChange={(e) => {setBody({...body, message: e.target.value }), setError({...error, message: ''})}}
                    />
                    {error.message && 
                        <motion.div
                            initial={{ opacity: 0, translateY: '-1.5rem' }} 
                            animate={{ opacity: 1, translateY: 0 }} 
                            transition={{ duration: 0.5 }}
                            className="text-[#C01C30] !mt-1 text-sm"
                        >
                            {error.message}
                        </motion.div>
                    }

                    {showMessage && message && 
                        <motion.div
                            initial={{ opacity: 0, translateY: '-1.5rem' }} 
                            animate={{ opacity: 1, translateY: 0 }} 
                            exit={{ opacity: 0, translateY: '-1.5rem' }} // Motion leave effect
                            transition={{ duration: 0.5 }}
                            className="text-green-600 !mt-1 text-sm"
                        >
                            {message}
                        </motion.div>
                    }
                    
                    <motion.button
                        ref={formRef}
                        initial={{ opacity: 0, translateX: '-1.5rem' }} 
                        animate={isVisible ? { opacity: 1, translateX: 0 } : {}} 
                        transition={{ duration: 0.5, delay: 1.4 }}
                        type="submit"
                        className={`${loadForm ? "bg-gray-200 text-[#C01C30]" : "bg-[#C01C30] text-white"} px-6 py-2 font-['montserrat-bold'] lg:text-[1.3rem] rounded-full border hover:border-[#C01C30] hover:bg-white hover:text-[#C01C30] hover:ring-0 transition-colors`}
                        disabled={loadForm}
                    >
                        {loadForm ? 
                            <div className='flex'>
                                <svg aria-hidden="true" className="w-6 h-6 text-gray-200 animate-spin dark:text-white fill-[#EC1C24] mr-3" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                                Submitting... 
                            </div>
                        : 
                            'Submit'
                        }
                    </motion.button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;