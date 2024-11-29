import Hero from '../components/hero';
import Definition from '../components/definition';
import cover from '../assets/pattern/hero.png';
import jalur from '../assets/pattern/jalur.png';

import texture from '../assets/pattern/bg-texture.jpg';

import '../assets/css/landing.css';

const Landing = () => {
    return (
        <div className="">
            <Hero cover={cover} jalur={jalur} />
            <Definition />
            <div className="bg-[#F5F5F5] -mt-[5rem]">
                <div className="relative">
                    <img src={texture} alt="texture" className="w-full" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <p className="text-[2rem] text-center font-[500] text-[#EC1C24] mb-8">
                            Our Service
                        </p>
                        <div className="flex gap-5 text-wrap lg:text-nowrap">
                            <div className="w-[10rem] h-[10rem] bg-white rounded-xl shadow-lg">
                                <div className=""></div>
                            </div>
                            <div className="w-[10rem] h-[10rem] bg-white rounded-xl shadow-lg"></div>
                            <div className="w-[10rem] h-[10rem] bg-white rounded-xl shadow-lg"></div>
                            <div className="w-[10rem] h-[10rem] bg-white rounded-xl shadow-lg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing