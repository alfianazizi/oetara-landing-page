import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import alphaO from '../assets/logo/logo_black/O_logo_black.svg';
import alphaE from '../assets/logo/logo_black/E_logo_black.svg';
import alphaT from '../assets/logo/logo_black/T_logo_black.svg';
import alphaA from '../assets/logo/logo_black/A_logo_black.svg';
import alphaR from '../assets/logo/logo_black/R_logo_black.svg';

import bg_texture from '../assets/pattern/bg-texture.jpg';
import nav_4 from '../assets/image/navigation-web.png';

import Marquee from "react-fast-marquee";
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import OurNavigator from '../components/navigator/our_nav';
import OurTeam from '../components/navigator/our_team';
import { getClient, getTeam } from '../api/navigator';


const Navigator = () => {
  const [selectedValue, setSelectedValue] = useState(0);
  const [team, setTeam] = useState([]);
  const [client, setClient] = useState([]);
  const [ourClient, setOurClient] = useState([]);
  const [startAnimation, setStartAnimation] = useState(false);
  const refRotate = useRef(null)
  const [isVisible, setIsVisible] = useState(false);
  const [clicked, setClicked] = useState(false)

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

  const rotateValue = useMotionValue(0);
  const rotate = useTransform(rotateValue, [0, 1], [0, 360]);

  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate('/careers');  // Navigate to careers page on button click
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
          setIsVisible(true);
          setStartAnimation(true);
          observer.disconnect();
      }
    });

    if (refRotate.current) {
        observer.observe(refRotate.current);
    }

    return () => {
        if (refRotate.current) {
            observer.unobserve(refRotate.current);
        }
    };
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
    handleTeam()
    handleClient()
  }, []);

  useEffect(() => {
    if (startAnimation) {
        rotate.set(0);
        animate(rotate, 360, {
            duration: 2.5,
            ease: "linear",
            onComplete: () => {
                rotate.set(360);  // Ensure final position
            }
        });
    }
  }, [startAnimation]);

  const rotatingBg = useTransform(rotate, (r) => {
    if (r === 360) {
        return '#EC1C24';
    }
    return `linear-gradient(${r + 45}deg, #EC1C24 0%, #FFFFFF 50%, #FFFFFF 100%)`;
  });

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
      const highlight = result.filter(a => a.acf.highlight === true);
      const non_highlight = result.filter(a => a.acf.highlight === false);
      const body = [];

      body.push({row: highlight});
      body.push({row: non_highlight});
      setOurClient(body)
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
                key={value.id}
                onClick={() => {setSelectedValue(index), setClicked(true)}}
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
              <div className="rounded-lg p-6 relative z-[10] bg-white">
                {/* Add the triangle pointer */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3 }}
                  className={`absolute -top-5 
                  transition-all duration-300 
                  ${selectedValue === 0 && 'left-[8%] lg:left-[2.5rem]' ||
                    selectedValue === 1 && 'left-[28%] lg:left-[12rem]' ||
                    selectedValue === 2 && 'left-[44%] lg:left-[22rem]' ||
                    selectedValue === 3 && 'left-[59%] lg:left-[32rem]' ||
                    selectedValue === 4 && 'left-[73%] lg:left-[42rem]' ||
                    selectedValue === 5 && 'left-[87%] lg:left-[52rem]'
                  } 
                  w-0 h-5 border-l-[12px] lg:border-l-[14px] border-l-transparent border-r-[12px] lg:border-r-[14px] border-r-transparent border-b-[12px] lg:border-b-[14px] border-b-[#EC1C24]
                `}></motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3 }} 
                  className="text-center text-gray-600 text-sm md:text-xl"
                >
                  {valueDetails[selectedValue].description}
                </motion.p>
              </div>
              <motion.div 
                ref={refRotate}
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ delay: 3, opacity: {delay: 0.1} }}
                className='absolute -inset-1 bg-[#EC1C24] rounded-xl'
                style={{ 
                  background: !clicked ? rotatingBg : '#EC1C24',
                }}
              ></motion.div>
            </motion.div>
          </div>
        </section>
      </div>    

      {/* Our Navigators Section */}
      <section className="relative ">
        <div 
          className="absolute w-full h-[1rem] inset-0 bg-gradient-to-b from-white z-[10]"
        ></div>
        <img 
          src={bg_texture} 
          alt="" 
          className='w-full h-[50vh] md:h-[100vh] object-cover' 
          style={{ opacity: 0.48 }}
        />
        <OurNavigator data={team} />
      </section>

      {/* Join Team Section - Updated */}
      <section className="relative lg:mb-20 overflow-hidden h-[40vh] lg:h-[100vh]">
        <img 
          src={nav_4}
          alt="Team working together" 
          className="absolute top-0 md:bottom-0 w-full object-contain lg:object-cover"
        />
        <OurTeam handleJoinClick={handleJoinClick} />
      </section>

      {/* Clients Section */}
      <section className="mb-20 h-auto min-h-[50vh] lg:h-[80vh] flex justify-center items-center mt-20 lg:mt-0">
        <div className="w-full">
          <h2 className="text-2xl md:text-3xl lg:text-[4rem] font-['montserrat-semibold'] text-[#C01C30] text-center mb-8 md:mb-12 lg:mb-[8rem]">
            Our Clients
          </h2>

          {ourClient.map((item, i) =>
            <div>
              {i === 1 ? 
                <>
                  <div className='md:flex gap-4 hidden'>
                    <Marquee direction="right" className='w-full' speed={40}>
                      {item.row.concat(item.row, item.row).map(a =>  // Duplicate the items by concatenating the array three times
                        <div key={a.id} className="px-4">
                          {a.acf.logo !== "" ? (
                            <img 
                              src={a.acf.logo.url} 
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
                      )}
                    </Marquee>
                  </div>
                  <div className='flex flex-col gap-4 md:hidden'>
                    <Marquee direction="right" className='w-full' speed={40}>
                      {item.row.concat(item.row, item.row).slice(0, Math.ceil(item.row.length / 2)).map(a =>  // Duplicate and slice for mobile view
                        <div key={a.id} className="px-4">
                          {a.acf.logo !== "" ? (
                            <img 
                              src={a.acf.logo.url} 
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
                      )}
                    </Marquee>
                    <Marquee direction="left" className='w-full' speed={40}>
                      {item.row.concat(item.row, item.row).slice(Math.ceil(item.row.length / 2)).map(a =>  // Duplicate and slice for mobile view
                        <div key={a.id} className="px-4">
                          {a.acf.logo !== "" ? (
                            <img 
                              src={a.acf.logo.url} 
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
                      )}
                    </Marquee>
                  </div>
                </>
              :
                <Marquee className='w-full' speed={40}>
                  {item.row.concat(item.row, item.row).map(a =>  // Duplicate the items by concatenating the array three times
                    <div key={a.id} className="px-4">
                      {a.acf.logo !== "" ? (
                        <img 
                          src={a.acf.logo.url} 
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
                  )}
                </Marquee>
              }
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Navigator;
