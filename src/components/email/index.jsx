import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { postForm } from '../../api/contact';
import pin from '../../assets/pattern/SVG/pin.svg';
import phone from '../../assets/pattern/SVG/phone.svg';
import envelope from '../../assets/pattern/SVG/email.svg';

const ContactForm = () => {
    const [body, setBody] = useState({ name: '', email: '', subject: '', message: '' })
    const [error, setError] = useState({ name: '', email: '', subject: '', message: '' });
    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false)
    const [isVisible, setIsVisible] = useState(false);
    const [loadForm, setLoadForm] = useState(false)
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
            try {
                await postForm(bodyForm);
                setShowMessage(true)
                setBody({name: '', email: '', subject: '', message: ''})
                setMessage('The message was successfully sent.')
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
        <div className="flex flex-col md:flex-row md:space-x-8">
            {/* Contact Information Side */}
            <div className="md:w-1/2 mb-6 md:mb-0">
                <motion.h2
                    ref={ref} 
                    initial={{ opacity: 0, translateY: '-1.5rem' }} 
                    animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                    transition={{ duration: 0.5, delay: 0.8 }} 
                    className="text-red-600 text-2xl md:text-[28px] font-bold mb-2"
                >
                    Get in touch
                </motion.h2>
                <motion.p
                    ref={ref}
                    initial={{ opacity: 0, translateY: '-1.5rem' }} 
                    animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                    transition={{ duration: 0.5, delay: 0.9 }}  
                    className="text-gray-600 text-sm md:text-lg mb-6"
                >
                    Leave us your details and a member of our team will get back to you as soon as possible.
                </motion.p>

                <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, translateX: '-1.5rem' }} 
                        animate={isVisible ? { opacity: 1, translateX: 0 } : {}} 
                        transition={{ duration: 0.5, delay: 1 }}  
                        className=""
                    >
                        <img src={pin} alt="" className='w-10 h-10' />
                        {/* <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg> */}
                    </motion.div>
                    <div className="text-sm md:text-[16px]">
                        <motion.p 
                            ref={ref}
                            initial={{ opacity: 0, translateX: '-1.5rem' }} 
                            animate={isVisible ? { opacity: 1, translateX: 0 } : {}} 
                            transition={{ duration: 0.5, delay: 1.1 }}
                            className="text-gray-700 font-medium mb-1"
                        >
                            Location
                        </motion.p>
                        <motion.p 
                            ref={ref}
                            initial={{ opacity: 0, translateX: '-1.5rem' }} 
                            animate={isVisible ? { opacity: 1, translateX: 0 } : {}} 
                            transition={{ duration: 0.5, delay: 1.2 }}
                            className="text-gray-600 text-sm"
                        >
                            Jade Sedayu No.27, Gading Serpong,<br/>Jl Pondok Hijau Golf Raya, Tangerang.
                        </motion.p>
                    </div>
                </div>

                <div className="flex items-center space-x-3">
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, translateX: '-1.5rem' }} 
                        animate={isVisible ? { opacity: 1, translateX: 0 } : {}} 
                        transition={{ duration: 0.5, delay: 1.2 }} 
                        className=""
                    >
                        <img src={envelope} alt="" className='w-10 h-10' />
                        
                        {/* <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5z" />
                        </svg> */}
                    </motion.div>
                    <div className="text-sm md:text-[16px]">
                        <motion.p 
                            ref={ref}
                            initial={{ opacity: 0, translateX: '-1.5rem' }} 
                            animate={isVisible ? { opacity: 1, translateX: 0 } : {}} 
                            transition={{ duration: 0.5, delay: 1.3 }} 
                            className="text-gray-700 font-medium mb-1"
                        >
                        Email Us
                        </motion.p>
                        <motion.p
                            ref={ref} 
                            initial={{ opacity: 0, translateX: '-1.5rem' }} 
                            animate={isVisible ? { opacity: 1, translateX: 0 } : {}} 
                            transition={{ duration: 0.5, delay: 1.4 }} 
                            className="text-gray-600 text-sm"
                        >
                            syamsan@oetara.co.id<br/>kevin@oetara.co.id
                        </motion.p>
                    </div>
                </div>

                <div className="flex items-center space-x-3">
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, translateX: '-1.5rem' }} 
                        animate={isVisible ? { opacity: 1, translateX: 0 } : {}} 
                        transition={{ duration: 0.5, delay: 1.5 }}  
                        className=""
                    >
                        <img src={phone} alt="" className='w-10 h-10' />
                        {/* <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg> */}
                    </motion.div>
                    <div className="text-sm md:text-[16px]">
                        <motion.p
                            ref={ref} 
                            initial={{ opacity: 0, translateX: '-1.5rem' }} 
                            animate={isVisible ? { opacity: 1, translateX: 0 } : {}} 
                            transition={{ duration: 0.5, delay: 1.6 }} 
                            className="text-gray-700 font-medium"
                        >
                            Call Us
                        </motion.p>
                        <motion.p 
                            ref={ref}
                            initial={{ opacity: 0, translateX: '-1.5rem' }} 
                            animate={isVisible ? { opacity: 1, translateX: 0 } : {}} 
                            transition={{ duration: 0.5, delay: 1.7 }} 
                            className="text-gray-600 text-sm"
                        >
                            +628131771202<br/>+628571831390
                        </motion.p>
                    </div>
                </div>
            </div>
            </div>

            {/* Contact Form Side */}
            <div className="md:w-1/2">
                <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
                    <motion.input
                        ref={ref}
                        initial={{ opacity: 0, translateY: '-1.5rem' }} 
                        animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                        transition={{ duration: 0.5, delay: 1 }}
                        type="text"
                        value={body.name}
                        placeholder="Full Name"
                        className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600 bg-white"
                        onChange={(e) => {setBody({...body, name: e.target.value}), setError({...error, name: ''})}}
                    />
                    {error.name && 
                        <motion.div
                            initial={{ opacity: 0, translateY: '-1.5rem' }} 
                            animate={{ opacity: 1, translateY: 0 }} 
                            transition={{ duration: 0.5 }}
                            className="text-red-600 !mt-1 text-sm"
                        >
                            {error.name}
                        </motion.div>
                    }
                    <motion.input
                        ref={ref}
                        initial={{ opacity: 0, translateY: '-1.5rem' }} 
                        animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                        transition={{ duration: 0.5, delay: 1.1 }}
                        type="email"
                        value={body.email}
                        placeholder="Email"
                        className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600 bg-white"
                        onChange={(e) => {setBody({...body, email: e.target.value }), setError({...error, email: ''})}}
                    />
                    {error.email && 
                        <motion.div
                            initial={{ opacity: 0, translateY: '-1.5rem' }} 
                            animate={{ opacity: 1, translateY: 0 }} 
                            transition={{ duration: 0.5 }}
                            className="text-red-600 !mt-1 text-sm"
                        >
                            {error.email}
                        </motion.div>
                    }
                    <motion.input
                        ref={ref}
                        initial={{ opacity: 0, translateY: '-1.5rem' }} 
                        animate={isVisible ? { opacity: 1, translateY: 0 } : {}} 
                        transition={{ duration: 0.5, delay: 1.2 }}
                        type="text"
                        value={body.subject}
                        placeholder="Subject"
                        className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600 bg-white"
                        onChange={(e) => {setBody({...body, subject: e.target.value }), setError({...error, subject: ''})}}
                    />
                    {error.subject && 
                        <motion.div
                            initial={{ opacity: 0, translateY: '-1.5rem' }} 
                            animate={{ opacity: 1, translateY: 0 }} 
                            transition={{ duration: 0.5 }}
                            className="text-red-600 !mt-1 text-sm"
                        >
                            {error.subject}
                        </motion.div>
                    }
                    <motion.textarea
                        ref={ref}
                        initial={{ opacity: 0, translateX: '-1.5rem' }} 
                        animate={isVisible ? { opacity: 1, translateX: 0 } : {}} 
                        transition={{ duration: 0.5, delay: 1.3 }}
                        placeholder="Message"
                        value={body.message}
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600 bg-white"
                        onChange={(e) => {setBody({...body, message: e.target.value }), setError({...error, message: ''})}}
                    />
                    {error.message && 
                        <motion.div
                            initial={{ opacity: 0, translateY: '-1.5rem' }} 
                            animate={{ opacity: 1, translateY: 0 }} 
                            transition={{ duration: 0.5 }}
                            className="text-red-600 !mt-1 text-sm"
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
                        ref={ref}
                        initial={{ opacity: 0, translateX: '-1.5rem' }} 
                        animate={isVisible ? { opacity: 1, translateX: 0 } : {}} 
                        transition={{ duration: 0.5, delay: 1.4 }}
                        type="submit"
                        className={`${loadForm ? "bg-gray-200 text-[#EC1C24]" : "bg-[#EC1C24] text-white"} px-6 py-2 rounded-md hover:bg-red-700 transition-colors`}
                        disabled={loadForm}
                    >
                        {loadForm ? 
                            <div className='flex'>
                                <svg aria-hidden="true" class="w-6 h-6 text-gray-200 animate-spin dark:text-white fill-[#EC1C24] mr-3" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
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