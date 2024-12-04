// import { useState } from 'react';
import '../styles/email.css';
import Headers from '../layouts/Headers';
const Email = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    
    <div className="email-container w-full min-h-screen flex flex-col overflow-x-hidden">
      <div className="contact-header mt-10 mb-10 px-4">
        <h3 className='text-[2rem] md:text-[3.2rem] leading[1.2] md:leading-[1.1] py-4 font-[600]'>Contact Us & Let&apos;s Collaborate!</h3>
        <p>Say us a Hello. Get to know each other. Tell us your story. We listen. We tell you our story. You listen. Then you ask simple question. We answer. We ask you back. You answer. And then we getting closer and...</p>
        <p>Oh hey, we haven&apos;t even start the conversation, but it looks like we already miss you. Please drop us a line.</p>
      </div>

      <div className="relative w-full flex-grow">
        <div className="bg-white shadow-lg p-8 w-full min-h-full relative z-1">
          <div className="flex flex-col md:flex-row md:space-x-8">
            {/* Contact Information Side */}
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-red-600 text-2xl font-bold mb-2">Get in touch</h2>
              <p className="text-gray-600 text-sm mb-6">Leave us your details and a member of our team will get back to you as soon as possible.</p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-red-600 p-2 rounded-full">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-700 font-medium">Location</span><br/>
                    <span className="text-gray-600">Jade Sedayu No.27, Gading Serpong,<br/>Jl Pondok Hijau Golf Raya, Tangerang.</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-red-600 p-2 rounded-full">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5z" />
                    </svg>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-700 font-medium">Email Us</span><br/>
                    <span className="text-gray-600">syamsari@oetara.co.id<br/>kevin@oetara.co.id</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-red-600 p-2 rounded-full">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-700 font-medium">Call Us</span><br/>
                    <span className="text-gray-600">+628131771202<br/>+628571831390</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Side */}
            <div className="md:w-1/2">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600 bg-white"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600 bg-white"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600 bg-white"
                />
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600 bg-white"
                />
                <button
                  type="submit"
                  className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map as background with fixed height */}
        <div className="hidden md:inline-block absolute -left-[50vw] top-[50%] md:top-[20vh] md:-right-[50vw] w-[150vw] md:w-[129vw] h-[100vh] md:h-[50vh] -z-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666466960686!2d106.82493841476885!3d-6.175392395527999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonumen%20Nasional!5e0!3m2!1sen!2sid!4v1680123456789!5m2!1sen!2sid"
            className="w-full h-full object-cover pointer-events-auto cursor-pointer"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>

        <div className='inline-block md:hidden w-full h-[50vh]'>
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666466960686!2d106.82493841476885!3d-6.175392395527999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonumen%20Nasional!5e0!3m2!1sen!2sid!4v1680123456789!5m2!1sen!2sid"
              className="w-full h-full object-cover pointer-events-auto cursor-pointer"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Email;