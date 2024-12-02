import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import alphaO from '../assets/logo/logo_black/O_logo_black.svg';
import alphaE from '../assets/logo/logo_black/E_logo_black.svg';
import alphaT from '../assets/logo/logo_black/T_logo_black.svg';
import alphaA from '../assets/logo/logo_black/A_logo_black.svg';
import alphaR from '../assets/logo/logo_black/R_logo_black.svg';

import bg_texture from '../assets/pattern/bg-texture.jpg';

import nav_1 from '../assets/image/navigator-1.jpg';
import nav_2 from '../assets/image/navigator-2.jpg';
import nav_3 from '../assets/image/navigator-3.jpg';
import nav_4 from '../assets/image/navigation-web.png';

import Marquee from "react-fast-marquee";


const Navigator = () => {
  const [selectedValue, setSelectedValue] = useState(0);

  const valueDetails = [{
      icon: alphaO,
      title: "Outstanding\nOutcome",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
    },
    {
      icon: alphaE,
      title: "Excellent\nExecution",
      description: "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
    },
    {
      icon: alphaT,
      title: "Trusted\nTeam",
      description: "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat."
    },
    {
      icon: alphaA,
      title: "Accurate\nAnalysis",
      description: "Vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim."
    },
    {
      icon: alphaR,
      title: "Real\nResult",
      description: "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming."
    },
    {
      icon: alphaA,
      title: "Advance\nAssistant",
      description: "Feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit."
    }]

  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate('/careers');  // Navigate to careers page on button click
  };

  return (
    <div className="mt-[4rem]">  
      <div className='mx-auto px-5 lg:px-[5%]'>
        {/* Hero Section */}
        <section className="py-16">
          <h1 className="text-3xl lg:text-4xl font-[600] mb-6">Navigator</h1>
          <p className="text-md lg:text-lg">
            We are Navigators not only crafting the right message but also setting the measurable goals and will be your guidance through Digital World Crowdedness. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, diam nonummy nibh euismod tincidunt ut laoreet dolore
          </p>
        </section>

        {/* OETARA Values */}
        <section className="mb-20 mt-16">
          <div className="flex justify-between items-start mx-w-2xl lg:max-w-4xl mx-auto">
            {valueDetails.map((value, index) => (
              <div 
                className="cursor-pointer text-center"
                key={index}
                onClick={() => {setSelectedValue(index); console.log(valueDetails[selectedValue])}}
              >
                <img 
                  src={value.icon} 
                  alt="logo" 
                  className={`w-8 h-8 lg:w-16 lg:h-16 mx-auto transition-all duration-300 ${
                    selectedValue === index ? 'scale-110' : ''
                  }`} 
                />
                <p className={`text-center lg:w-[80px] mt-5 transition-colors duration-300 text-[10px] lg:text-md ${
                  selectedValue === index 
                    ? 'text-black font-medium' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}>
                  {value.title}
                </p>
              </div>
            ))}
          </div>

          {/* Description Box */}
          <div className={`
            mt-10 max-w-4xl mx-auto transition-all duration-300
            ${selectedValue !== null ? 'opacity-100' : 'opacity-0'}
          `}>
            <div className="relative">
              {/* Red curved line */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-8">
                
              </div>
              
              {/* Description text */}
              <div className="border border-[#EC1C24] rounded-lg p-6">
                <p className="text-center text-gray-600 text-sm">
                  {valueDetails[selectedValue].description}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>    

      {/* Our Navigators Section */}
      <section className="lg:mb-20 relative ">
        <img src={bg_texture} alt="" className='h-[50vh] lg:h-auto object-cover' />
        <div className='absolute top-1/2 left-1/2 transform flex justify-center items-center -translate-x-1/2 -translate-y-1/2 w-[100%] lg:w-[80%] px-5 lg:px-10'>
          <div className="w-full h-auto">
            <h2 className="text-3xl font-[600] text-[#C01C30] text-center mb-4">Our Navigators</h2>
            <p className="text-center text-gray-600 mb-12">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
            <div className="grid grid-cols-3 gap-2 lg:gap-8 max-w-4xl mx-auto">
              <div className="aspect-square flex flex-col items-center w-[100%] relative group">
                <img className="w-full h-full object-cover object-top" src={nav_1} alt="Navigator 1" />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                  <h3 className="text-xl font-medium">Shee Fulan</h3>
                  <p className="text-gray-300">Direktur</p>
                </div>
              </div>
              <div className="aspect-square flex flex-col items-center w-[100%] relative group">
                <img className="w-full h-full object-cover object-top" src={nav_2} alt="Navigator 1" />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                  <h3 className="text-xl font-medium">Shee Fulan</h3>
                  <p className="text-gray-300">Direktur</p>
                </div>
              </div>
              <div className="aspect-square flex flex-col items-center w-[100%] relative group">
                <img className="w-full h-full object-cover object-top" src={nav_3} alt="Navigator 1" />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                  <h3 className="text-xl font-medium">Shee Fulan</h3>
                  <p className="text-gray-300">Direktur</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/team" className="text-gray-600 hover:text-red-600 inline-flex items-center">
                See all our navigator <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Join Team Section - Updated */}
      <section className="relative lg:mb-20 overflow-hidden h-[50vh] lg:h-auto">
        <img 
          src={nav_4}
          alt="Team working together" 
          className="w-full object-contain lg:object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-end bottom-0 lg:bottom-10 justify-center">
          <div className="bg-white flex justify-between flex-wrap lg:flex-nowrap p-4 lg:p-8 rounded-xl shadow-lg mx-4 max-w-3xl">
            <div className='w-[100%] lg:w-[70%]'>
              <h2 className="text-2xl font-bold text-red-600 mb-4">Join Our Team</h2>
              <p className="text-gray-600 mb-6">
                Be part of our growing team and help shape the future of digital marketing. Join us in creating innovative solutions.
              </p>
            </div>
            <div className='w-[100%] lg:w-auto flex justify-start lg:justify-center items-center'>
              <button 
                onClick={handleJoinClick}
                className="bg-red-600 h-auto text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors"
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="mb-20 mt-14 lg:mt-0">
        <h2 className="text-3xl font-bold text-red-600 text-center mb-12">Our Clients</h2>
        <Marquee>
          <div className="flex gap-10 items-center mb-8">
            <div className="flex justify-center items-center">
              <svg width="100" height="50" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="gainsboro" />
                <text x="50%" y="50%" alignmentBaseline="middle" textAnchor="middle" fontSize="16" fill="black" fontWeight="bold">L O G O</text>
              </svg>
            </div>
            <div className="flex justify-center items-center">
              <svg width="100" height="50" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="gainsboro" />
                <text x="50%" y="50%" alignmentBaseline="middle" textAnchor="middle" fontSize="16" fill="black" fontWeight="bold">L O G O</text>
              </svg>
            </div>
            <div className="flex justify-center items-center">
              <svg width="100" height="50" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="gainsboro" />
                <text x="50%" y="50%" alignmentBaseline="middle" textAnchor="middle" fontSize="16" fill="black" fontWeight="bold">L O G O</text>
              </svg>
            </div>
            <div className="flex justify-center items-center">
              <svg width="100" height="50" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="gainsboro" />
                <text x="50%" y="50%" alignmentBaseline="middle" textAnchor="middle" fontSize="16" fill="black" fontWeight="bold">L O G O</text>
              </svg>
            </div>
            <div className="flex justify-center items-center">
              <svg width="100" height="50" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="gainsboro" />
                <text x="50%" y="50%" alignmentBaseline="middle" textAnchor="middle" fontSize="16" fill="black" fontWeight="bold">L O G O</text>
              </svg>
            </div>
            <div className="flex justify-center items-center">
              <svg width="100" height="50" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="gainsboro" />
                <text x="50%" y="50%" alignmentBaseline="middle" textAnchor="middle" fontSize="16" fill="black" fontWeight="bold">L O G O</text>
              </svg>
            </div>
            <div className="flex justify-center items-center">
              <svg width="100" height="50" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="gainsboro" />
                <text x="50%" y="50%" alignmentBaseline="middle" textAnchor="middle" fontSize="16" fill="black" fontWeight="bold">L O G O</text>
              </svg>
            </div>
            <div className="flex justify-center items-center">
              <svg width="100" height="50" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="gainsboro" />
                <text x="50%" y="50%" alignmentBaseline="middle" textAnchor="middle" fontSize="16" fill="black" fontWeight="bold">L O G O</text>
              </svg>
            </div>
            <div className="flex justify-center items-center">
              <svg width="100" height="50" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="gainsboro" />
                <text x="50%" y="50%" alignmentBaseline="middle" textAnchor="middle" fontSize="16" fill="black" fontWeight="bold">L O G O</text>
              </svg>
            </div>
            <div className="flex justify-center items-center">
              <svg width="100" height="50" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="gainsboro" />
                <text x="50%" y="50%" alignmentBaseline="middle" textAnchor="middle" fontSize="16" fill="black" fontWeight="bold">L O G O</text>
              </svg>
            </div>
            <div className="flex justify-center items-center">
              <svg width="100" height="50" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="gainsboro" />
                <text x="50%" y="50%" alignmentBaseline="middle" textAnchor="middle" fontSize="16" fill="black" fontWeight="bold">L O G O</text>
              </svg>
            </div>
            <div className="flex justify-center items-center">
              <svg width="100" height="50" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="gainsboro" />
                <text x="50%" y="50%" alignmentBaseline="middle" textAnchor="middle" fontSize="16" fill="black" fontWeight="bold">L O G O</text>
              </svg>
            </div>
          </div>
        </Marquee>
        <Marquee direction='ltr' className='mt-6'>
          <div className="flex gap-10 items-center">
          <div className="flex justify-center items-center">
              <svg width="100" height="50" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="gainsboro" />
                <text x="50%" y="50%" alignmentBaseline="middle" textAnchor="middle" fontSize="16" fill="black" fontWeight="bold">L O G O</text>
              </svg>
            </div>
            <div className="flex justify-center items-center">
              <svg width="100" height="50" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="gainsboro" />
                <text x="50%" y="50%" alignmentBaseline="middle" textAnchor="middle" fontSize="16" fill="black" fontWeight="bold">L O G O</text>
              </svg>
            </div>
            <div className="flex justify-center items-center">
              <svg width="100" height="50" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="gainsboro" />
                <text x="50%" y="50%" alignmentBaseline="middle" textAnchor="middle" fontSize="16" fill="black" fontWeight="bold">L O G O</text>
              </svg>
            </div>
            <div className="flex justify-center items-center">
              <svg width="100" height="50" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="gainsboro" />
                <text x="50%" y="50%" alignmentBaseline="middle" textAnchor="middle" fontSize="16" fill="black" fontWeight="bold">L O G O</text>
              </svg>
            </div>
            <div className="flex justify-center items-center">
              <svg width="100" height="50" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="gainsboro" />
                <text x="50%" y="50%" alignmentBaseline="middle" textAnchor="middle" fontSize="16" fill="black" fontWeight="bold">L O G O</text>
              </svg>
            </div>
            <div className="flex justify-center items-center">
              <svg width="100" height="50" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="gainsboro" />
                <text x="50%" y="50%" alignmentBaseline="middle" textAnchor="middle" fontSize="16" fill="black" fontWeight="bold">L O G O</text>
              </svg>
            </div>
            <div className="flex justify-center items-center">
              <svg width="100" height="50" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="gainsboro" />
                <text x="50%" y="50%" alignmentBaseline="middle" textAnchor="middle" fontSize="16" fill="black" fontWeight="bold">L O G O</text>
              </svg>
            </div>
          </div>
        </Marquee>
      </section>
    </div>
  );
};

export default Navigator;
