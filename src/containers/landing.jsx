import Hero from '../components/hero';
import Definition from '../components/definition';
import cover from '../assets/pattern/hero.png';
import cover_mobile from '../assets/pattern/hero_mobile.jpg';
import jalur from '../assets/pattern/jalur.png';

import texture from '../assets/pattern/bg-texture.jpg';
import texture_2 from '../assets/pattern/bg_texture_1.jpg';
import service_1 from '../assets/pattern/SVG/service_1.svg';
import service_2 from '../assets/pattern/SVG/service_2.svg';
import service_3 from '../assets/pattern/SVG/service_3.svg';
import service_4 from '../assets/pattern/SVG/service_4.svg';

import work_1 from '../assets/pattern/work/work_1.jpg';
import '../assets/css/landing.css';
import { FaChevronRight } from 'react-icons/fa6';

import { useNavigate } from 'react-router-dom';


const Landing = () => {
    const navigate = useNavigate();
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

    const our_work = [
        {
            image: work_1,
            title: 'KOL Service',
            desc: 'for Dejavu'
        },
        {
            image: work_1,
            title: 'KOL Service',
            desc: 'for Dejavu'
        },
        {
            image: work_1,
            title: 'KOL Service',
            desc: 'for Dejavu'
        },
        {
            image: work_1,
            title: 'KOL Service',
            desc: 'for Dejavu'
        },
        {
            image: work_1,
            title: 'KOL Service',
            desc: 'for Dejavu'
        },
        {
            image: work_1,
            title: 'KOL Service',
            desc: 'for Dejavu'
        }
    ]

    const handleWork = () => {
        navigate('/work');
    }
    return (
        <>
            <Hero cover={cover} cover_mobile={cover_mobile} jalur={jalur} />
            <Definition />
            <div className="bg-white pb-[10%] -mt-[5rem] lg:-mt-[8rem]">
                <div className="relative">
                    <img src={texture} alt="texture" className="w-full h-[100vh] lg:h-auto" />
                    <div className="absolute top-[55%] md:top-1/2 left-1/2 transform flex justify-center items-center -translate-x-1/2 -translate-y-1/2 w-[100%] lg:w-[80%] px-5 lg:px-10">
                        <div className="w-full mx-auto">
                            <p className="text-[2rem] lg:text-[3rem] text-center font-[500] text-[#EC1C24] mb-8">
                                Our Service
                            </p>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 justify-items-center">
                                {our_service.map((item, key) => 
                                    <div key={key} className="bg-white rounded-xl shadow-lg py-4 lg:py-8 px-5 lg:px-10 max-w-xs">
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
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative lg:-mt-[5rem] ">
                    <img src={texture_2} alt="" className="w-full h-[100vh] lg:h-auto rounded-[5%] shadow-image" />
                    <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%]">
                        <div className="w-full mx-auto px-10">
                            <p className="text-[2rem] lg:text-[3rem] text-center font-[500] text-[#EC1C24] mb-8">
                                Our Work
                            </p>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 justify-items-center mb-8">
                                {our_work.map((item, key) => (
                                    <div key={key} className="flex flex-col items-center w-[100%] relative group">
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
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center mt-16">
                                <button className='py-2 px-10 bg-white rounded-full font-[600] flex items-center shadow-2xl hover:bg-gray-50 transition-colors' onClick={() => handleWork()}>
                                    <span className='lg:text-[18px] mr-5'>See all our work</span>
                                    <FaChevronRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white py-20 px-10 -mt-[40%] lg:-mt-[20%] relative mx-[6%] rounded-2xl shadow-xl">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid  lg:grid-cols-2 gap-20">
                            {/* Left Column */}
                            <div>
                                <h2 className="text-[#EC1C24] text-5xl font-medium mb-4">Get in touch</h2>
                                <p className="text-gray-600 mb-12">
                                    Leave us your details and a member of our team will get back to you as soon as possible.
                                </p>

                                {/* Location */}
                                <div className="flex items-start gap-6 mb-8">
                                    <div className="bg-[#EC1C24] p-3 rounded-full">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-medium mb-2">Location</h3>
                                        <p className="text-gray-600">Jade Selatan No.27, Gading Serpong,<br />Jl Pondok Hijau Golf Raya, Tangerang.</p>
                                    </div>
                                </div>

                                {/* Email Us */}
                                <div className="flex items-start gap-6 mb-8">
                                    <div className="bg-[#EC1C24] p-3 rounded-full">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-medium mb-2">Email Us</h3>
                                        <p className="text-gray-600">syamsan@oetara.co.id</p>
                                        <p className="text-gray-600">kevin@oetara.co.id</p>
                                    </div>
                                </div>

                                {/* Call Us */}
                                <div className="flex items-start gap-6">
                                    <div className="bg-[#EC1C24] p-3 rounded-full">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-medium mb-2">Call Us</h3>
                                        <p className="text-gray-600">+6281317712002</p>
                                        <p className="text-gray-600">+6285718313907</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Contact Form */}
                            <div>
                                <form className="space-y-6 mt-8">
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full px-4 py-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:border-[#EC1C24]"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full px-4 py-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:border-[#EC1C24]"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        className="w-full px-4 py-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:border-[#EC1C24]"
                                    />
                                    <textarea
                                        placeholder="Message"
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-3xl bg-white border border-gray-300 focus:outline-none focus:border-[#EC1C24]"
                                    ></textarea>
                                    <button
                                        type="submit"
                                        className="bg-[#EC1C24] text-white px-8 py-3 rounded-full hover:bg-[#d11920] transition-colors"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Landing