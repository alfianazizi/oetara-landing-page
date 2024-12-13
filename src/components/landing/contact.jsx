import { useEffect, useState } from 'react';
import { getInformation } from '../../api/information';
import ContactForm from '../email';

const ContactUs = () => {
    const [info, setInfo] = useState({})
    
    const handleInformation = async () => {
        const result = await getInformation()
        try {
          setInfo(result[0])
        } catch (err) {
          console.log(err)
        }
    }

    useEffect(() => {
        handleInformation()
    }, [])

    return (
        <div className="flex justify-center items-center px-5 md:px-10">
            <div className='container px-5 md:px-10'>
                <div 
                    className="bg-white py-10 lg:py-20 px-5 md:px-0 lg:px-10 -mt-[40%] lg:-mt-[20%] relative rounded-2xl"
                    style={{ boxShadow: 'rgba(149, 157, 165, 0.7) 0px 8px 50px'}}
                >
                    <div className="mx-auto md:mx-[3rem]">
                        <ContactForm data={info} />
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default ContactUs;