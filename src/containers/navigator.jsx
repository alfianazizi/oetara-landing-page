import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import alphaO from '../assets/logo/logo_black/O_logo_black.svg';
import alphaE from '../assets/logo/logo_black/E_logo_black.svg';
import alphaT from '../assets/logo/logo_black/T_logo_black.svg';
import alphaA from '../assets/logo/logo_black/A_logo_black.svg';
import alphaR from '../assets/logo/logo_black/R_logo_black.svg';

import bg_texture from '../assets/pattern/bg-texture.jpg';
import nav_4 from '../assets/image/navigation-web.png';

import Marquee from "react-fast-marquee";
import { motion } from 'motion/react';
import OurNavigator from '../components/navigator/our_nav';
import OurTeam from '../components/navigator/our_team';
import { getClient, getTeam } from '../api/navigator';


const Navigator = () => {
  const [selectedValue, setSelectedValue] = useState(0);
  const [team, setTeam] = useState([]);
  const [client, setClient] = useState([]);

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

  useEffect(() => {
    window.scrollTo(0, 0);
    handleTeam()
    handleClient()
  }, [])

  const handleTeam = async () => {
    const result = await getTeam();
    try {
      setTeam(result)
    } catch (err) {
      console.log(err)
    }
  }

  const handleClient = async () => {
    const result = await getClient();
    try {
      setClient(result)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="">  
      <div className='mx-auto container md:mt-10 h-[100vh] px-5 lg:px-10'>
        {/* Hero Section */}
        <section className="py-16">
          <motion.h1 
            initial={{ opacity: 0, translateY: '-2rem' }} 
            animate={{ opacity: 1, translateY: 0 }} 
            transition={{ duration: 1 }} 
            className="text-3xl md:text-[2.5rem] lg:text-[3rem] font-['montserrat-bold'] mt-5 md:mt-0 mb-6 md:mb-8"
          >
            Navigator
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, translateY: '-2rem' }} 
            animate={{ opacity: 1, translateY: 0 }} 
            transition={{ duration: 1, delay: 0.2 }}
            className="text-md md:text-[1.65rem]"
          >
            We are Navigators not only crafting the right message but also setting the measurable goals and will be your guidance through Digital World Crowdedness. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, diam nonummy nibh euismod tincidunt ut laoreet dolore
          </motion.p>
        </section>

        {/* OETARA Values */}
        <section className="mb-20 mt-10 md:mt-16">
          <div className="flex justify-center text-center lg:gap-[5rem] items-center">
            {valueDetails.map((value, index) => (
              <motion.div 
                initial={{ opacity: 0, translateX: '-2rem' }} 
                animate={{ opacity: 1, translateX: 0 }} 
                transition={{ duration: 0.3, delay: 0.1 * index+1 }}
                className="cursor-pointer text-center"
                key={index}
                onClick={() => setSelectedValue(index)}
              >
                <img 
                  src={value.icon} 
                  alt="logo" 
                  className={`w-8 h-8 md:w-20 md:h-20 mx-auto transition-all duration-300 ${
                    selectedValue === index ? 'scale-[1.20]' : ''
                  }`} 
                />
                <p className={`text-center font-['montserrat-medium'] lg:w-[80px] mt-5 transition-colors duration-300 text-[10px] md:text-[1rem] ${
                  selectedValue === index 
                    ? 'text-black' 
                    : 'text-[#231F20]/[42%] hover:text-[#231F20]'
                }`}>
                  {value.title}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Description Box */}
          <div className={`
            mt-10 max-w-4xl mx-auto transition-all duration-300
            ${selectedValue !== null ? 'opacity-100' : 'opacity-0'}
          `}>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.5, delay: 2 }}
              className="relative"
            >
              {/* Red curved line */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-8"></div>
              
              {/* Description text */}
              <div className="border border-[#EC1C24] rounded-lg p-6 relative">
                {/* Add the triangle pointer */}
                <div className={`absolute -top-5 
                  transition-all duration-300 
                  ${selectedValue === 0 && 'left-[2rem]' ||
                    selectedValue === 1 && 'left-[30%] lg:left-[12rem]' ||
                    selectedValue === 2 && 'left-[45%] lg:left-[22.5rem]' ||
                    selectedValue === 3 && 'left-[60%] lg:left-[33rem]' ||
                    selectedValue === 4 && 'left-[74%] lg:left-[43rem]' ||
                    selectedValue === 5 && 'left-[89%] lg:left-[53rem]'
                  } 
                  w-0 h-5 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-[#EC1C24]
                `}></div>
                <p className="text-center text-gray-600 text-sm md:text-xl">
                  {valueDetails[selectedValue].description}
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>    

      {/* Our Navigators Section */}
      <section className="relative ">
        <img src={bg_texture} alt="" className='w-full h-[50vh] md:h-[100vh] object-cover opacity-[50%]' />
        <OurNavigator data={team} />
      </section>

      {/* Join Team Section - Updated */}
      <section className="relative lg:mb-20 overflow-hidden h-[80vh] lg:h-[100vh]">
        <img 
          src={nav_4}
          alt="Team working together" 
          className="absolute bottom-[30%] md:bottom-0 w-full object-contain lg:object-cover"
        />
        <OurTeam handleJoinClick={handleJoinClick} />
      </section>

      {/* Clients Section */}
      <section className="mb-20 h-auto min-h-[50vh] lg:h-[80vh] flex justify-center items-center mt-14 lg:mt-0">
        <div className="w-full">
          <h2 className="text-2xl md:text-3xl lg:text-[4rem] font-['montserrat-semibold'] text-[#C01C30] text-center mb-8 md:mb-12 lg:mb-[8rem]">
            Our Clients
          </h2>
          
          {/* Desktop Marquee */}
          <div className="hidden md:block">
            <Marquee className='w-full' speed={40}>
              <div className="flex gap-8 lg:gap-16 items-center">
                {client.map((item, key) => (
                  <div key={key} className="flex justify-center items-center px-4">
                    {item.acf.logo !== "" ? (
                      <img 
                        src={item.acf.logo.url} 
                        alt="client" 
                        className='w-24 lg:w-32 object-contain' 
                      /> 
                    ) : (
                      <svg width="100" height="50" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" fill="gainsboro" />
                        <text x="50%" y="50%" alignmentBaseline="middle" textAnchor="middle" fontSize="16" fill="black" fontWeight="bold">L O G O</text>
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </Marquee>
          </div>

          {/* Desktop Marquee */}
          <div className="hidden md:block">
            <Marquee direction='ltr' className='w-full' speed={40}>
              <div className="flex gap-8 lg:gap-16 items-center">
                {client.map((item, key) => (
                  <div key={key} className="flex justify-center items-center px-4">
                    {item.acf.logo !== "" ? (
                      <img 
                        src={item.acf.logo.url} 
                        alt="client" 
                        className='w-24 lg:w-32 object-contain' 
                      /> 
                    ) : (
                      <svg width="100" height="50" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" fill="gainsboro" />
                        <text x="50%" y="50%" alignmentBaseline="middle" textAnchor="middle" fontSize="16" fill="black" fontWeight="bold">L O G O</text>
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </Marquee>
          </div>

          {/* Mobile Marquee */}
          <div className="md:hidden">
            <Marquee className='w-full' speed={30}>
              <div className="flex gap-6 items-center">
                {client.map((item, key) => (
                  <div key={key} className="flex justify-center items-center px-2">
                    {item.acf.logo !== "" ? (
                      <img 
                        src={item.acf.logo.url} 
                        alt="client" 
                        className='w-16 h-16 object-contain' 
                      /> 
                    ) : (
                      <svg width="64" height="32" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" fill="gainsboro" />
                        <text x="50%" y="50%" alignmentBaseline="middle" textAnchor="middle" fontSize="12" fill="black" fontWeight="bold">L O G O</text>
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navigator;
