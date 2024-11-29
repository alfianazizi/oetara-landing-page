import { useState, useEffect } from 'react';
import logo from '../assets/logo/logo.svg';
import { FaUserLarge } from 'react-icons/fa6';
import { IoSearchSharp } from 'react-icons/io5';
import { RiMenu2Line } from 'react-icons/ri';

const Headers = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 z-[9] flex justify-between items-center py-2 md:py-4 px-5 md:px-10 w-full transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : ''
    }`}>
        <div className="flex items-center gap-5 md:gap-10">
            <img src={logo} alt="logo" className="w-8 h-8 md:w-10 md:h-10" />
            <div className="view-desktop items-center gap-10">
                <a href="#">Navigator</a>
                <a href="#">Email</a>
                <a href="#">Service</a>
                <a href="#">Work</a>
            </div>
            <div className="view-mobile">
                <RiMenu2Line className="text-2xl" />
            </div>
        </div>
        {/* <div className="flex items-center gap-8">
            <IoSearchSharp className="text-2xl" />
            <FaUserLarge className="text-2xl" />
        </div> */}
    </div>
  )
}

export default Headers
