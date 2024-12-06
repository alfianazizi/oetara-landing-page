import { Link, useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getWorkById } from '../api/work';
import CountUp from 'react-countup';
import { getClientById } from '../api/navigator';

const DetailWork = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
    
  const [detail, setDetail] = useState({});
  const [isLoad, setIsLoad] = useState(false);
  const [photo, setPhoto] = useState('');

  const campaignResults = [
    "Media plan + KOL: Total Results (including boosted): 377.5M impressions (+42% vs. L1)",
    "Engagement Rate: 175%",
    "TikTok Hashtag Challenge: 99M impressions",
    "Press conference KinKat: Total PR Value: 8.74 billion IDR",
    "Highlight: Collaboration with Wonderful Indonesia and local UMKM"
  ];


  useEffect(() => {
    handleDetailWork()
  }, [])

  const handleDetailWork = async () => {
    setIsLoad(true)
    const result = await getWorkById(slug)
    try {
      setDetail(result[0])
      const client_id = result[0].acf.client[0].ID;
      handleClient(client_id)
      setIsLoad(false)
    } catch (err) {
      setIsLoad(false)
    }
  }

  const handleClient = async (id) => {
    const result = await getClientById(id)
    try {
      setPhoto(result.acf.logo.url);
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="mx-auto py-8" onClick={() => navigate('/work')}>
      <div className="flex justify-center items-center">
        <Link to="/work" className="hidden container px-5 md:px-10 md:flex items-center gap-2 text-gray-600 mb-8">
          <span>←</span> Case Study
        </Link>
        
      </div>

      {/* Hero Section */}
      <div className="relative h-[200px] md:h-[300px] overflow-hidden mt-8 md:mt-0">
        {!isLoad ? 
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "acf" in detail && "image_header" in detail.acf && detail.acf.image_header !== "" ? `url(${detail.acf.image_header})` : ``,
              backgroundRepeat: 'no-repeat'
            }}
          />
        : 
          <div 
            className="absolute inset-0 bg-cover bg-center"
          >
            <svg className='w-[100%]' viewBox="0 0 290 227">
                <rect width="100%" height="100%" fill="gainsboro" />
                <text x="145" y="113.5" textAnchor="middle" dominantBaseline="middle" fill="gray" fontSize="28">Cover Header</text>
            </svg>
          </div>
        }
      </div>
      
      <div className="flex justify-center items-center">
        <div className="container">
          <div className="relative px-7 flex items-center gap-6 -mt-[1rem] md:-mt-[3rem]">
            <div className="flex items-center justify-center flex-wrap md:flex-nowrap gap-2 md:gap-8">
              <div className='w-[100%] md:w-auto h-[10vh] md:h-[18vh]  flex items-center'>
                {photo !== '' ? 
                  <img src={photo} alt="avatar" class="w-32 md:w-[16rem] -mt-10 object-cover rounded-lg shadow-lg" />
                :
                  <svg className='w-32 md:w-[16rem] -mt-10 object-cover rounded-lg shadow-lg' viewBox="0 0 290 227">
                      <rect width="100%" height="100%" fill="lightgray" />
                      <text x="145" y="113.5" textAnchor="middle" dominantBaseline="middle" fill="gray" fontSize="28">Image</text>
                  </svg>
                }
              </div>
              <div className='w-[100%] md:w-auto mt-5 md:mt-10'>
                <h1 className="text-3xl font-bold mb-1">{"acf" in detail && detail.acf.title}</h1>
                <h2 className="text-xl">{"title" in detail &&  detail.title.rendered.indexOf('/&#8211;/g') === -1 ? 'for '+ detail.title.rendered.split(/&#8211;/g)[0] : ''}</h2>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className={`grid grid-cols-1 ${"acf" in detail && detail.acf.metric.length >= 3 ? 'md:grid-cols-3' : "acf" in detail && detail.acf.metric.length == 2 ? 'md:grid-cols-2' : "acf" in detail && detail.acf.metric.length === 1 ? 'md:grid-cols-1' : 'md:grid-cols-3'} md:gap-8 mt-8 mb-12 md:justify-items-center`}>
            {"acf" in detail && detail.acf.metric.map((metric, index) =>
              <div key={index} className="md:text-center px-8 py-2">
                <div className="pb-2">{metric.metric_name}</div>
                <div className="flex flex-nowrap md:flex-wrap w-[50%] md:w-[100%]">
                  <div className="text-red-500 text-4xl font-bold w-[100%]">
                    {metric.metric_type !== 'number' ? 
                      metric.metric_value 
                    : 
                      <CountUp
                        start={0}
                        end={metric.metric_value}
                      />
                    }
                  </div>
                  <div className="text-red-500 font-[500] ml-2 md:ml-0 mt-2 md:mt-0 w-[100%]">{metric.metric_label}</div>
                </div>
              </div>
            )}
          </div>

          {/* Content Sections */}
          <section className="mb-12 px-8">
            <h3 className="text-2xl font-[500] mb-4">Background</h3>
            <p className="md:text-lg text-gray-600" dangerouslySetInnerHTML={"acf" in detail && detail.acf.background ? { __html: detail.acf.background } : { __html: '' }}></p>
          </section>

          <section className="mb-12 px-8">
            <h3 className="text-2xl font-[500] mb-4">Execution</h3>
            <p className="md:text-lg text-gray-600 mb-6" dangerouslySetInnerHTML={"acf" in detail && detail.acf.execution ? { __html: detail.acf.execution } : { __html: '' }}></p>
            
            {/* Campaign Images */}
            <div className="flex flex-wrap w-full gap-1 md:gap-4 my-12">
              {"acf" in detail && detail.acf.work_gallery.map((item, key) => 
                <img
                  key={key}
                  src={item.url}
                  alt={`Campaign ${item}`}
                  className={`${detail.acf.work_gallery.length < 1 ? 'w-full' : 'w-1/4'} h-[20vh] md:h-[50vh] object-contain md:object-cover md:rounded-lg`}
                />
              )}
              {/* {[1, 2, 3, 4].map((item, key) => (
                <div key={key} className='h-[20vh] md:h-[50vh] rounded-lg bg-[#D3D3D3] shadow-lg flex items-center'>
                  <svg className='object-cover' viewBox="0 0 290 227">
                      <rect width="100%" height="100%" fill="#D3D3D3" />
                      <text x="145" y="113.5" textAnchor="middle" dominantBaseline="middle" fill="gray" fontSize="28">Image</text>
                  </svg>
                </div>
              ))} */}
            </div>
          </section>

          <section className="mb-12 px-8">
            <h3 className="text-2xl font-[500] mb-4">Results</h3>
            <p className="md:text-lg text-gray-600 mb-6" dangerouslySetInnerHTML={"acf" in detail && detail.acf.result ? { __html: detail.acf.result } : { __html: '' }}></p>
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
