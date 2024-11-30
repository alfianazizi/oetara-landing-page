import Hero from '../components/hero';
import Definition from '../components/definition';
import cover from '../assets/pattern/hero.png';
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


const Landing = () => {
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
        },
        {
            image: work_1,
            title: 'KOL Service',
            desc: 'for Dejavu'
        },
    ]
    return (
        <div className="">
            <Hero cover={cover} jalur={jalur} />
            <Definition />
            <div className="bg-[#F5F5F5] -mt-[8rem] ">
                <div className="relative">
                    <img src={texture} alt="texture" className="w-full h-auto" />
                    <div className="absolute top-1/2 left-1/2 transform flex justify-center items-center -translate-x-1/2 -translate-y-1/2 w-[80%] px-10">
                        <div className="w-full mx-auto">
                            <p className="text-[3rem] text-center font-[500] text-[#EC1C24] mb-8">
                                Our Service
                            </p>
                            <div className="grid grid-cols-4 gap-8 justify-items-center">
                                {our_service.map((item, key) => 
                                    <div key={key} className="bg-white rounded-xl shadow-lg py-8 px-10 max-w-xs">
                                        <div className="flex justify-center">
                                            <div className="bg-[#F0F1F1] p-5 rounded-full">
                                                <img src={item.icon} alt="" className='w-16 h-16' />
                                            </div>
                                        </div>
                                        <div className="py-3 text-center">
                                            <p className="font-[500] py-0">{item.title.title_1}</p>
                                            <p className="font-[500] py-0">{item.title.title_2}</p>
                                        </div>
                                        <div className="text-center text-sm">{item.text}</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative -mt-[5rem]">
                        <img src={texture_2} alt="" className="w-full rounded-[5%] shadow-image" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%]">
                            <div className="w-full mx-auto px-10">
                                <p className="text-[3rem] text-center font-[500] text-[#EC1C24] mb-8">
                                    Our Work
                                </p>
                                <div className="grid grid-cols-3 gap-8 justify-items-center">
                                    {our_work.map((item, key) => 
                                        <img key={key} src={item.image} alt="" className='rounded-xl shadow-image w-[100%] object-cover' />
                                    )}
                                </div>
                            </div>
                            <div className="flex justify-center pt-10">
                                <div className='py-2 px-10 bg-white rounded-full font-[600] flex shadow-2xl'>
                                    <p className='text-[18px] mr-5'>See all our work</p> 
                                    <FaChevronRight size={18} className='mt-1' /> 
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Landing