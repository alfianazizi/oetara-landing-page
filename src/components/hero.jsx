import React from 'react';

const Hero = ({ cover, jalur}) => {
    return (
        <div className="relative h-[100vh]">
            <p className="absolute left-[4rem] title-landing font-[500]">Navigating for Innovation</p>
            <div className="absolute -left-3 route-container">
                <img 
                    src={jalur} 
                    alt="route" 
                    className="animate-draw" 
                />
            </div>
            <img src={cover} alt="cover" className="w-[100%] h-[100vh]" />
        </div>
    )
}

export default Hero