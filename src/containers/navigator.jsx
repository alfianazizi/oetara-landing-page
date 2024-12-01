import Headers from '../layouts/Headers';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navigator = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const valueDetails = {
    O: {
      title: "Outstanding\nOutcome",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
    },
    E: {
      title: "Excellent\nExecution",
      description: "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
    },
    T: {
      title: "Trusted\nTeam",
      description: "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat."
    },
    A: {
      title: "Accurate\nAnalysis",
      description: "Vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim."
    },
    R: {
      title: "Real\nResult",
      description: "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming."
    },
    A2: {
      title: "Advance\nAssistant",
      description: "Feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit."
    }
  };

  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate('/careers');  // Navigate to careers page on button click
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <Headers />
      
      {/* Hero Section */}
      <section className="py-16">
        <h1 className="text-4xl font-bold mb-6">Navigator</h1>
        <p className="text-lg max-w-3xl">
          We are Navigators not only crafting the right message but also setting the measurable goals and will be your guidance through Digital World Crowdedness. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, diam nonummy nibh euismod tincidunt ut laoreet dolore
        </p>
      </section>

      {/* OETARA Values */}
      <section className="mb-20">
        <div className="flex justify-between items-start max-w-4xl mx-auto">
          {Object.entries(valueDetails).map(([key, value]) => (
            <div 
              className="flex flex-col items-center gap-3 cursor-pointer group"
              key={key}
              onClick={() => setSelectedValue(key)}
            >
              <span className={`
                text-2xl font-bold w-12 h-12 flex items-center justify-center
                ${selectedValue === key 
                  ? 'text-red-600' 
                  : 'text-gray-800 group-hover:text-red-600'}
              `}>
                {key.replace('A2', 'A')}
              </span>
              <p className="text-center text-xs text-gray-600 whitespace-pre-line max-w-[80px]">
                {value.title}
              </p>
            </div>
          ))}
        </div>

        {/* Description Box */}
        <div className={`
          mt-8 max-w-2xl mx-auto transition-all duration-300
          ${selectedValue ? 'opacity-100' : 'opacity-0'}
        `}>
          <div className="relative">
            {/* Red curved line */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-8">
              <svg className="w-full h-full" viewBox="0 0 64 32">
                <path
                  d="M 0 32 Q 32 0 64 32"
                  fill="none"
                  stroke="#EF4444"
                  strokeWidth="2"
                />
              </svg>
            </div>
            
            {/* Description text */}
            <div className="border border-red-200 rounded-lg p-6">
              <p className="text-center text-gray-600 text-sm">
                {selectedValue ? valueDetails[selectedValue].description : ''}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Navigators Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-red-600 text-center mb-4">Our Navigators</h2>
        <p className="text-center text-gray-600 mb-12">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
        <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="aspect-square">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d" alt="Navigator 1" />
          </div>
          <div className="aspect-square">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600878459138-e1123b37cb30" alt="Navigator 2" />
          </div>
          <div className="aspect-square bg-gray-900 flex items-center justify-center text-white">
            <div className="text-center">
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
      </section>

      {/* Join Team Section - Updated */}
      <section className="relative mb-20 rounded-2xl overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2"
          alt="Team working together" 
          className="w-full h-[500px] object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-4">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Join Our Team</h2>
            <p className="text-gray-600 mb-6">
              Be part of our growing team and help shape the future of digital marketing. Join us in creating innovative solutions.
            </p>
            <button 
              onClick={handleJoinClick}
              className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors"
            >
              Join Now
            </button>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-red-600 text-center mb-12">Our Clients</h2>
        <div className="grid grid-cols-5 gap-8 items-center mb-8">
          <img className="w-full h-12 object-contain" src="https://1000logos.net/wp-content/uploads/2016/10/Bank-Mandiri-Logo.png" alt="Mandiri" />
          <img className="w-full h-12 object-contain" src="https://1000logos.net/wp-content/uploads/2023/04/BRI-Logo-2016.png" alt="Bank BRI" />
          <img className="w-full h-12 object-contain" src="https://modalku.co.id/blog/wp-content/uploads/2021/12/Logo-Modalku-Biru.png" alt="Modalku" />
          <img className="w-full h-12 object-contain" src="https://1000logos.net/wp-content/uploads/2021/04/Pepsodent-logo.png" alt="Pepsodent" />
          <img className="w-full h-12 object-contain" src="https://1000logos.net/wp-content/uploads/2017/03/Unilever-Logo.png" alt="Unilever" />
        </div>
        <div className="grid grid-cols-6 gap-8 items-center">
          <img className="w-full h-12 object-contain" src="https://1000logos.net/wp-content/uploads/2022/07/Telkom-Indonesia-Logo.png" alt="Telkom" />
          <img className="w-full h-12 object-contain" src="https://1000logos.net/wp-content/uploads/2023/04/BNI-Logo-2004.png" alt="BNI" />
          <img className="w-full h-12 object-contain" src="https://1000logos.net/wp-content/uploads/2023/04/BTN-Logo.png" alt="BTN" />
          <img className="w-full h-12 object-contain" src="https://1000logos.net/wp-content/uploads/2021/08/Pertamina-Logo.png" alt="Pertamina" />
          <img className="w-full h-12 object-contain" src="https://1000logos.net/wp-content/uploads/2021/08/Indofood-Logo.png" alt="Indofood" />
          <img className="w-full h-12 object-contain" src="https://1000logos.net/wp-content/uploads/2021/03/Gojek-logo.png" alt="Gojek" />
        </div>
      </section>
    </div>
  );
};

export default Navigator;
