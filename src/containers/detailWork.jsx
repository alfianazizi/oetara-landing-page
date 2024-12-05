import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const DetailWork = ({ id }) => {
    const navigate = useNavigate();
    console.log(id);
  const metrics = [
    {
      label: "Total KOL",
      value: "15",
      unit: "KOL",
    },
    {
      label: "KPI",
      value: "500.000",
      unit: "views",
    },
    {
      label: "Result",
      value: "622.193",
      unit: "views",
    }
  ];

  const campaignResults = [
    "Media plan + KOL: Total Results (including boosted): 377.5M impressions (+42% vs. L1)",
    "Engagement Rate: 175%",
    "TikTok Hashtag Challenge: 99M impressions",
    "Press conference KinKat: Total PR Value: 8.74 billion IDR",
    "Highlight: Collaboration with Wonderful Indonesia and local UMKM"
  ];

  return (
    <div className="mx-auto py-8" onClick={() => navigate('/work')}>
      <div className="flex justify-center items-center">
        <Link to="/work" className="hidden container px-5 md:px-10 md:flex items-center gap-2 text-gray-600 mb-8">
          <span>←</span> Case Study
        </Link>
        
      </div>

      {/* Hero Section */}
      <div className="relative h-[200px] md:h-[300px] overflow-hidden mt-8 md:mt-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1516959512470-53955cd40f40?auto=format&w=1200&q=80')`
          }}
        />
        {/* <div className="absolute -bottom-8 left-8 flex items-center gap-6">
          <div className="bg-white p-4 rounded-lg w-32 h-32 flex items-center justify-center shadow-lg">
            <img 
              src="https://logo.clearbit.com/dejavu.co.id" 
              alt="Dejavu Logo"
              className="max-w-full"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-1">Utilizing KOL services</h1>
            <h2 className="text-lg">for Client Dejavu</h2>
          </div>
        </div> */}
      </div>
      
      <div className="flex justify-center items-center">
        <div className="container">
          <div className="relative px-7 flex items-center gap-6 -mt-[3rem]">
            <div className="flex items-center justify-center flex-wrap md:flex-nowrap gap-2 md:gap-8">
              <div className='w-[100%] md:w-auto h-[10vh] md:h-[18vh]  flex items-center'>
                <svg className='w-32 md:w-[16rem] -mt-10 object-cover rounded-lg shadow-lg' viewBox="0 0 290 227">
                    <rect width="100%" height="100%" fill="lightgray" />
                    <text x="145" y="113.5" textAnchor="middle" dominantBaseline="middle" fill="gray" fontSize="28">Image</text>
                </svg>
              </div>
              <div className='w-[100%] md:w-auto mt-5 md:mt-10'>
                <h1 className="text-3xl font-bold mb-1">Utilizing KOL services</h1>
                <h2 className="text-xl">for Client Dejavu</h2>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 mt-8 mb-12">
            {metrics.map((metric, index) => {
                const [count, setCount] = useState(0);

                useEffect(() => {
                    let start = 0;
                    const end = parseFloat(metric.value.replace(/,/g, ''));
                    const duration = 2000;
                    const incrementTime = duration / end;

                    const timer = setInterval(() => {
                        if (start < end) {
                            start++;
                            setCount(start);
                        } else {
                            clearInterval(timer);
                        }
                    }, incrementTime);

                    return () => clearInterval(timer);
                }, [metric.value]);

                return (
                  <div key={index} className="md:text-center px-8 py-2">
                    <div className="text-gray-600 pb-2">{metric.label}</div>
                    <div className="flex flex-nowrap md:flex-wrap">
                      <div className="text-red-500 text-4xl font-bold w-[100%]">{count.toLocaleString()}</div>
                      <div className="text-red-500 ml-2 md:ml-0 mt-2 md:mt-0 w-[100%]">{metric.unit}</div>
                    </div>
                  </div>
                );
            })}
          </div>

          {/* Content Sections */}
          <section className="mb-12 px-8">
            <h3 className="text-2xl font-[500] mb-4">Background</h3>
            <p className="md:text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
          </section>

          <section className="mb-12 px-8">
            <h3 className="text-2xl font-[500] mb-4">Execution</h3>
            <p className="md:text-lg text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
            
            {/* Campaign Images */}
            <div className="grid grid-cols-4 gap-1 md:gap-4 my-12">
              {[1, 2, 3, 4].map((item) => (
                // <img
                //   key={item}
                //   src={`https://picsum.photos/400/600?random=${item}`}
                //   alt={`Campaign ${item}`}
                //   className="w-full md:rounded-lg"
                // />
                <div className='h-[20vh] md:h-[50vh] rounded-lg bg-[#D3D3D3] shadow-lg flex items-center'>
                  <svg className='object-cover' viewBox="0 0 290 227">
                      <rect width="100%" height="100%" fill="#D3D3D3" />
                      <text x="145" y="113.5" textAnchor="middle" dominantBaseline="middle" fill="gray" fontSize="28">Image</text>
                  </svg>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 px-8">
            <h3 className="text-2xl font-[500] mb-4">Results</h3>
            <p className="md:text-lg text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>

              <h4 className="md:text-lg font-[500] mb-4">Data awareness and engagement:</h4>
              <ul className="md:text-lg list-disc pl-6 space-y-2">
                {campaignResults.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

DetailWork.propTypes = {
    id: PropTypes.string
};

export default DetailWork;
