import { Link } from 'react-router-dom';
import logo_full from '../assets/logo/logo_full.svg';
import { useEffect, useState } from 'react';
import { getInformation } from '../api/information';

const Footer = () => {
    const [info, setInfo] = useState({});

    const getApi = async () => {
        const information = await getInformation();
        try {
            setInfo(information[0])
        } catch (err) {
            console.log(err)
        }

    }
    useEffect(() => {
        getApi()
    }, [])

    return (
        <div className="bg-[#1E1E1E] flex justify-center items-center text-white py-16">
                <div className="px-5 container lg:px-10">
                    <Link to="/">
                        <img src={logo_full} alt="Oetara" className="h-12 mb-12" />
                    </Link>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20 !text-white">
                        {/* Company Section */}
                        <div>
                            <h3 className="text-xl font-medium mb-4">Company</h3>
                            <ul className="space-y-2">
                                <Link to="/navigator">
                                    <li className="text-gray-400 font-[600] py-1 hover:text-white cursor-pointer">Navigator</li>
                                </Link>
                                <Link to="/email">
                                    <li className="text-gray-400 font-[600] py-1 hover:text-white cursor-pointer">Email</li>
                                </Link>
                                <Link to="service">
                                    <li className="text-gray-400 font-[600] py-1 hover:text-white cursor-pointer">Service</li>
                                </Link>
                                <Link to="work">
                                    <li className="text-gray-400 font-[600] py-1 hover:text-white cursor-pointer">Work</li>
                                </Link>
                            </ul>
                        </div>

                        {/* Policies Section */}
                        <div>
                            <h3 className="text-xl font-medium mb-4">Policies</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li className="text-gray-400 hover:text-white cursor-pointer">Privacy policy</li>
                                <li className="text-gray-400 hover:text-white cursor-pointer">Terms and Conditions</li>
                                <li className="text-gray-400 hover:text-white cursor-pointer">Cookies</li>
                            </ul>
                        </div>

                        {/* Career Section */}
                        <div>
                            <h3 className="text-xl font-medium mb-4">Career</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><Link to="/navigator" className="text-gray-400 hover:text-white">Who We Are</Link></li>
                                <li><Link to="/email" className="text-gray-400 hover:text-white">Work with us</Link></li>
                            </ul>
                        </div>

                        {/* Connect Section */}
                        <div>
                            <h3 className="text-xl font-medium mb-4">Connect</h3>
                            <div className="flex flex-wrap gap-2 md:gap-4">
                                {info && "acf" in info && info.acf.socials.map((item, key) => {
                                    let ico = '';

                                    if (item.icon.indexOf('dashicon') > -1) {
                                        ico = <i className={`dashicons ${item.icon} text-[1.25rem]`}></i>
                                    } else {
                                        ico = <img src={item.icon} alt="" className='w-5 h-5 object-contain' />
                                    }

                                    return (
                                        <a 
                                            href={item.url} 
                                            target='_blank' 
                                            className="bg-[#C01C30] text-white p-2 rounded-full transition-all duration-300 hover:scale-105 hover:text-white h-[40px] w-[40px] flex items-center justify-center">
                                            {ico}
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    
                    {/* Copyright */}
                    <div className="mt-16 pt-8 border-t border-gray-800 text-gray-400 text-sm">
                        <p>© 2024 Oetara | Oetara adalah merek milik PT SANVINSI ASKARA UTARA Terdaftar pada Direktorat Jendral Kekayaan Intelektual Republik Indonesia.</p>
                    </div>
                </div>
            </div>
    )
}

export default Footer;