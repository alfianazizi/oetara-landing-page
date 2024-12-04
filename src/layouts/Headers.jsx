import { useState, useEffect } from 'react';
import logo from '../assets/logo/logo.svg';
import logo_full_mobile from '../assets/logo/logo_full_mobile.svg';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';

const Headers = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHamburger, setIsHamburger] = useState({ isMenu: true, isClose: false})

  const activeLink = location.pathname.substring(1) || '';

  useEffect(() => {
    console.log(location.pathname)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`fixed top-0 left-0 z-[9] lg:relative flex justify-between items-center py-8 md:py-4 px-5 md:px-10 w-full transition-all duration-500
        ${isScrolled ? 'bg-white sm:shadow-md' : ''}`}>
        <div className="flex justify-between lg:justify-start items-center gap-5 md:gap-10 w-[100%]">
            <Link to="/" className="w-full lg:w-auto">
              <img src={logo} alt="logo" className="hidden lg:inline-block w-8 h-8 md:w-10 md:h-10" />
            </Link>
            <div className="view-desktop items-center gap-10">
                {['Navigator', 'Email', 'Service', 'Work'].map((link) => (
                    <a
                        key={link}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(`/${link.toLowerCase()}`);
                        }}
                        onMouseEnter={() => setHoveredLink(link)}
                        onMouseLeave={() => setHoveredLink(null)}
                        className={`px-3 py-1 relative hover:text-white ${
                            activeLink === link.toLowerCase() ? 'text-white' : ''
                        }`}
                    >
                        {link}
                        {(activeLink === link.toLowerCase() || hoveredLink === link) && (
                            <span className="absolute inset-0 bg-[#C01C30] rounded-xl -z-10 
                            transition-all duration-300 -rotate-[5deg]
                            animate-slideIn"></span>
                        )}
                    </a>
                ))}
            </div>
        </div>
      </div>

      {/* Mobile Logo - Moved outside header */}
      <Link to="/" onClick={() => setIsHamburger(...isHamburger,{ isClose: false})}>
        <div className='flex fixed top-0 right-0 px-5 py-2 md:py-4 z-[11] lg:hidden justify-center items-center w-full text-center'>
          <img src={logo_full_mobile} alt="logo" className='w-auto h-10' />
        </div>
      </Link>

      {/* Moved Menu Button outside header */}
      <div className="view-mobile fixed top-0 right-0 px-5 py-2 md:py-4 z-[11]">
          <div className="relative w-6 h-6 mt-2">
            <MdClose 
              className={`absolute text-2xl cursor-pointer transition-all duration-300
                ${isMenuOpen && isHamburger.isClose
                  ? 'opacity-100 rotate-0 visible' 
                  : 'opacity-0 rotate-90 invisible'}`}
              onClick={() => {setIsMenuOpen(false); setIsHamburger({ isMenu: true, isClose: false })}} 
            />
            <MdMenu 
              className={`absolute text-2xl cursor-pointer transition-all duration-300
                ${isHamburger.isMenu
                  ? 'opacity-100 rotate-0 visible' 
                  : 'opacity-0 rotate-90 invisible'}`}
              onClick={() => {setIsMenuOpen(true); setIsHamburger({ isMenu: false, isClose: true})}} 
            />
          </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-[8] transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-[100%] z-[10] bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="flex flex-col gap-10 h-[80vh] justify-center items-center">
          {['Navigator', 'Email', 'Service', 'Work'].map((link) => (
            <a
              key={link}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate(`/${link.toLowerCase()}`);
                setIsMenuOpen(false);
              }}
              className={`px-3 py-4 text-xl ${
                activeLink === link.toLowerCase() ? 'bg-[#C01C30] text-white w-[100%] text-center' : ''
              }`}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default Headers
