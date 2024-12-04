import React from 'react';

const Hero = ({ cover, cover_mobile, jalur}) => {
    return (
        <div className="relative h-[100vh]">
            <p className="absolute left-[2rem] lg:left-[4rem] title-landing font-[500]">Navigating for Innovation</p>
            <div className="hidden lg:inline-block absolute w-[100%]">
                <img 
                    src={jalur} 
                    alt="route" 
                    className="animate-draw w-[100%] h-[100vh]" 
                />
            </div>
            <img src={cover} alt="cover" className="hidden lg:inline-block w-[100%] h-[100vh]" />
            <div className="inline-block md:hidden w-[100%] h-[100vh]" style={{
                backgroundImage: `url(${cover_mobile})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: '85%  top',
            }}>

            </div>
            {/* <img src={cover_mobile} alt="cover_mobile" className='inline-block lg:hidden w-[100%] h-[100vh] object-cover float-right ml-auto' /> */}
        </div>
    )
}

export default Hero