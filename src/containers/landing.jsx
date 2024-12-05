import Hero from '../components/landing/hero';
import Definition from '../components/landing/definition';
import cover from '../assets/pattern/hero.png';
import cover_mobile from '../assets/pattern/hero_mobile.png';
import jalur from '../assets/pattern/jalur.png';
import texture from '../assets/pattern/bg-texture.jpg';
import texture_2 from '../assets/pattern/bg_texture_1.jpg';
import OurService from '../components/landing/service';
import OurWork from '../components/landing/work';

import '../assets/css/landing.css';
import ContactUs from '../components/landing/contact';


const Landing = () => {
    return (
        <>
            <Hero cover={cover} cover_mobile={cover_mobile} jalur={jalur} />
            <Definition />
            <div className="bg-white pb-[10%] -mt-[5rem] lg:-mt-[8rem]">
                <div className="relative">
                    <img src={texture} alt="texture" className="w-full h-[100vh] lg:h-auto" />
                    <OurService />
                </div>
                <div className="relative lg:-mt-[5rem] ">
                    <img src={texture_2} alt="" className="w-full h-[100vh] lg:h-auto rounded-[5%] shadow-image" />
                    <OurWork />
                </div>
                <ContactUs />
            </div>
            
        </>
    )
}

export default Landing