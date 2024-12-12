import { useEffect, useState } from 'react';
import nav_4 from '../assets/image/navigation-web.png';
import { getJob } from '../api/navigator';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

const Careers = () => {
  const [jobType, setJobType] = useState('');
  const [category, setCategory] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [selectedJobIndex, setSelectedJobIndex] = useState(null);
  const [isJobTypeModalOpen, setIsJobTypeModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isExperienceLevelModalOpen, setIsExperienceLevelModalOpen] = useState(false);
  const [isShowCareer, setIsShowCarieer] = useState(false)
  const [isSlidingOut, setIsSlidingOut] = useState(false);
  const [careers, setCareers] = useState([]);
  const [detail, setDetail] = useState({})

  const jobListings = [
    {
      title: 'Planning Manager',
      type: 'Full Time',
      level: 'Manager',
      description: 'The purpose of this role is to manage a team of media planners and assist the Business Producers on a day to day basis...',
      responsibilities: {
        'Business Development Strategy': [
          'Develop and implement comprehensive business development strategies to tap into new markets.',
          'Identify potential clients and cultivate relationships to increase our client base.',
          'Collaborate with the leadership team to define business goals and align initiatives.',
        ],
        'Client Relationship Management': [
          'Build and maintain strong, long-lasting relationships with clients.',
          'Act as the main point of contact for clients, ensuring their needs are met.',
          'Negotiate contracts and close deals while ensuring a win-win for both parties.',
        ]
      }
    },
    {
      title: 'Accountant',
      type: 'Contract',
      level: 'Entry Level',
      description: '...',
    },
    {
      title: 'Motion Graphic',
      type: 'Internship',
      level: 'Internship',
      description: '...',
    },
    {
      title: 'Motion Graphic',
      type: 'Internship',
      level: 'Internship',
      description: '...',
    },
    {
      title: 'Motion Graphic',
      type: 'Internship',
      level: 'Internship',
      description: '...',
    }
  ];
  
  const handleJob = async () => {
    const result = await getJob();
    try {
      console.log(result)
      setCareers(result)
    } catch (err) {
      console.log(err)
    }
  }

  const handleCategorySelect = (value) => {
    setCategory(value);
    setIsCategoryModalOpen(false);
  };


  // Function to close the modal with slide effect
  const closeCareerModal = () => {
    setIsSlidingOut(true);
    setTimeout(() => {
      setIsShowCarieer(false);
      setIsSlidingOut(false);
    }, 300); // Match this duration with your CSS transition duration
  };

  const handleDetail = (id) => {
    const filtered = careers.filter(a => a.id == id)[0];
    setDetail(filtered)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    handleJob()
  }, [])

  return (
    <div className="w-full mt-16 lg:mt-0 bg-[#F1F2F2]">
      {/* Hero Section */}
      <div className="absolute z-[11] w-[100%]">
        <div className="flex justify-center items-center lg:mt-10">
          <Link to="/navigator" className="hidden container md:flex items-center px-5 md:px-10 gap-2 text-white font-['montserrat-bold'] text-[1.5rem] mb-8 hover:text-[#C01C30]">
            <FaChevronLeft /> Navigator
          </Link>
        </div>
      </div>
      <div className="relative h-[80vh] bg-cover bg-center text-white" 
        style={{ 
          backgroundImage: `url(${nav_4})`,
          backgroundPosition: 'bottom',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(0, 0, 0, 0.7)'}} />
        <div className="relative z-[8] h-[80vh] flex justify-center items-center container mx-auto px-4 py-16">
          <div>
            <div className="mb-12 text-center">
              <h1 className="text-lg lg:text-4xl font-['montserrat-bold'] mb-4">Find Jobs, Employment & Career Opportunities</h1>
              <h2 className="text-5xl font-['montserrat-bold'] leading-[1.2]">
                Search Your Job<br />
                & Join Our Team
              </h2>
            </div>

            {/* Filter Controls */}
            <div className="flex gap-2 lg:gap-4 justify-center w-full">
              <select 
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                className="hidden lg:inline-block p-3 pr-8 rounded-md bg-white text-[#231F20] font-['montserrat-semibold'] w-1/3 lg:min-w-[200px] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:8px_8px] bg-[right_12px_center] bg-no-repeat"
              >
                <option value="">Job Type</option>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="contract">Contract</option>
              </select>
              <button 
                onClick={() => setIsJobTypeModalOpen(true)} 
                className="inline-block lg:hidden p-2 text-[12px] rounded-md bg-white text-[#231F20] font-['montserrat-semibold'] w-1/3 lg:min-w-[200px]"
              >
                {jobType || "Job Type"}
              </button>
              
              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="hidden lg:inline-block p-3 pr-8 rounded-md bg-white text-[#231F20] font-['montserrat-semibold'] w-1/3 lg:min-w-[200px] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:8px_8px] bg-[right_12px_center] bg-no-repeat"
              >
                <option value="">Category</option>
                <option value="planning">Planning</option>
                <option value="accounting">Accounting</option>
                <option value="motion">Motion Graphics</option>
              </select>
              <button 
                onClick={() => setIsCategoryModalOpen(true)} 
                className="inline-block lg:hidden p-2 text-[12px] rounded-md bg-white text-[#231F20] font-['montserrat-semibold'] w-1/3 lg:min-w-[200px]"
              >
                {category || "Category"}
              </button>

              <select 
                value={experienceLevel}
                onChange={(e) => setExperienceLevel(e.target.value)}
                className="hidden lg:inline-block p-3 pr-8 rounded-md bg-white text-[#231F20] font-['montserrat-semibold'] w-1/3 lg:min-w-[200px] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:8px_8px] bg-[right_12px_center] bg-no-repeat"
              >
                <option value="">Experience Level</option>
                <option value="mid">Mid Level</option>
                <option value="senior">Senior Level</option>
              </select>
              <button 
                onClick={() => setIsExperienceLevelModalOpen(true)} 
                className="inline-block lg:hidden p-2 text-[12px] rounded-md bg-white text-[#231F20] font-['montserrat-semibold'] w-1/3 lg:min-w-[200px]"
              >
                {experienceLevel || "Experience Level"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Job Level Modal */}
      {isJobTypeModalOpen && (
        <div className="fixed inset-0 z-[9] flex items-end justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl  w-full lg:w-1/3">
            <div className="flex justify-center">
              <div className="border-b-[8px] rounded-full border-[#58595B] my-5 w-[30%]"></div>
            </div>
            <div className="flex justify-between p-4">
              <h3 className="text-lg font-[400] mb-4">Job Level</h3>
              <div 
                onClick={() => setIsJobTypeModalOpen(false)} 
                className="text-[#EC1C24]"
              >
                Reset
              </div>
            </div>
            <div className="flex flex-wrap gap-2 px-4 pb-2">
              {['All', 'Internship', 'Entry level', 'Associate', 'Mid-Senior level', 'Director'].map((cat) => (
                <button 
                  key={cat} 
                  onClick={() => handleCategorySelect(cat)} 
                  className="py-2 px-6 text-left bg-white border text-xs border-[#BCBEC0] rounded-full hover:bg-gray-200 w-auto h-auto"
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className='px-4 py-4'>
              <button className="w-full text-white bg-[#C01C30] text-sm" onClick={() => setIsJobTypeModalOpen(false)}>Show Result</button>
            </div>      
          </div>
        </div>
      )}

      {/* Category Modal */}
      {isCategoryModalOpen && (
        <div className="fixed inset-0 z-[9] flex items-end justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl  w-full lg:w-1/3">
            <div className="flex justify-center">
              <div className="border-b-[8px] rounded-full border-[#58595B] my-5 w-[30%]"></div>
            </div>
            <div className="flex justify-between p-4">
              <h3 className="text-lg font-[400] mb-4">Category</h3>
              <div 
                onClick={() => setIsCategoryModalOpen(false)} 
                className="text-[#EC1C24]"
              >
                Reset
              </div>
            </div>
            <div className="flex flex-wrap gap-2 px-4 pb-2">
              {['All', 'Internship', 'Entry level', 'Associate', 'Mid-Senior level', 'Director'].map((cat) => (
                <button 
                  key={cat} 
                  onClick={() => handleCategorySelect(cat)} 
                  className="py-2 px-6 text-left bg-white border text-xs border-[#BCBEC0] rounded-full hover:bg-gray-200 w-auto h-auto"
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className='px-4 py-4'>
              <button className="w-full text-white bg-[#C01C30] text-sm" onClick={() => setIsCategoryModalOpen(false)}>Show Result</button>
            </div>      
          </div>
        </div>
      )}

      {/* Job Level Modal */}
      {isExperienceLevelModalOpen && (
        <div className="fixed inset-0 z-[9] flex items-end justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl  w-full lg:w-1/3">
            <div className="flex justify-center">
              <div className="border-b-[8px] rounded-full border-[#58595B] my-5 w-[30%]"></div>
            </div>
            <div className="flex justify-between p-4">
              <h3 className="text-lg font-[400] mb-4">Experience Level</h3>
              <div 
                onClick={() => setIsExperienceLevelModalOpen(false)} 
                className="text-[#EC1C24]"
              >
                Reset
              </div>
            </div>
            <div className="flex flex-wrap gap-2 px-4 pb-2">
              {['All', 'Internship', 'Entry level', 'Associate', 'Mid-Senior level', 'Director'].map((cat) => (
                <button 
                  key={cat} 
                  onClick={() => handleCategorySelect(cat)} 
                  className="py-2 px-6 text-left bg-white border text-xs border-[#BCBEC0] rounded-full hover:bg-gray-200 w-auto h-auto"
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className='px-4 py-4'>
              <button className="w-full text-white bg-[#C01C30] text-sm" onClick={() => setIsExperienceLevelModalOpen(false)}>Show Result</button>
            </div>      
          </div>
        </div>
      )}

      {/* Modified Job Listings Layout */}
      <div className="container mx-auto px-5 md:px-10 py-6 lg:py-16">
        <div className="flex gap-8">
          {/* Left Side - Fixed Job List */}
          <div className="w-[100%] lg:w-1/3 h-[80vh] overflow-x-scroll scroll-tab bg-white rounded-xl">
            {careers.map((job, index) => (
              <div 
                key={index} 
                className={`py-5 hover:lg:border-[#FF2935] transition-shadow cursor-pointer rounded-xl ${selectedJobIndex === index ? 'border lg:border-[#FF2935] px-6' : 'border-b border-[#BCBEC0] mx-6'}`}
                onClick={() => {setSelectedJobIndex(index); setIsShowCarieer(true); handleDetail(job.id)}}
              >
                <h3 className="text-xl font-['montserrat-bold'] mb-4">{job.acf.job_title}</h3>
                <div className="space-y-2">
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-gray-600 font-['montserrat-bold'] rounded-full mr-2"></span>
                    {job.acf.job_type.name}
                  </p>
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-[#58595B] font-['montserrat-medium'] rounded-full mr-2"></span>
                    {job.acf.job_experience.name}
                  </p>
                </div>
                <div className="text-right mt-4">
                  <a 
                    className="text-[#FF2935] flex justify-end w-full hover:text-[#C01C30] text-sm font-['montserrat-semibold']"
                    onClick={() => handleDetail(job.id)}
                  >
                    Details <FaChevronRight className='mt-1 ml-3' />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Details Panel */}
          <div className="hidden lg:inline-block w-2/3 border border-[#FF2935] bg-white rounded-lg p-8">
            {selectedJobIndex !== null && detail ? (
              <>
                <h3 className="text-2xl font-['montserrat-bold'] mb-4">{detail.acf.job_title}</h3>
                <p className="text-[#231F20] text-[1.1rem] mb-6" dangerouslySetInnerHTML={{__html: detail.acf.job_position_description}}></p>
                
                <h4 className="font-[montserrat-bold] mb-6">WHAT WILL YOU DO?</h4>
                <div className="mb-6 text-[1rem] font-['montserrat-semibold']" dangerouslySetInnerHTML={{ __html: detail.acf.job_activity_description}} ></div>
                
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3RgPhjSHg-GKy75tftNnppESmB1woIK0NJyPC5hlWqlGU_A/viewform" target="_blank">
                  <button className="bg-[#C01C30] font-['montserrat-bold'] hover:bg-[#C01C30] hover:border-none focus:outline-none focus:ring-0 text-white px-8 py-3 rounded-full">
                    Apply Now
                  </button>
                </a>
              </>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500">Select a job to view details</p>
              </div>
            )}
          </div>

          {isShowCareer ? 
            <div className={`fixed lg:hidden inset-0 z-[12] flex items-end justify-center bg-black bg-opacity-50 transition-transform duration-300 ${isSlidingOut ? 'transform translate-y-full' : 'transform translate-y-0'}`} onClick={() => closeCareerModal()}>
              <div className="bg-white rounded-2xl w-full lg:w-1/3">
                <div className="flex justify-center" onClick={() => closeCareerModal()}>
                  <div className="border-b-[8px] rounded-full border-[#58595B] my-5 w-[30%]"></div>
                </div>
                <div className='px-4 h-[80vh] overflow-x-scroll'>
                  <h3 className="text-xl font-[600] pb-4 pt-6">{jobListings[0]['title']}</h3>
                  <p>{jobListings[0]['description']}</p>

                  <div className='py-6'>
                    <h4 className="font-bold mb-6">WHAT WILL YOU DO?</h4>
                    {Object.entries(jobListings[selectedJobIndex].responsibilities || {}).map(([category, items], idx) => (
                      <div key={idx} className="mb-6">
                        <p className="font-semibold mb-3">{`${idx + 1}. ${category}`}</p>
                        <ul className="list-none space-y-3">
                          {items.map((item, i) => (
                            <li key={i} className="flex items-start">
                              {/* <span className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2"></span> */}
                              <span className='ml-5'>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3RgPhjSHg-GKy75tftNnppESmB1woIK0NJyPC5hlWqlGU_A/viewform" target="_blank">
                      <button className="bg-[#EC1C24] hover:bg-red-600 text-white px-4 py-2 text-sm rounded-full">
                        Apply Now
                      </button>
                    </a>
                  </div>
                </div>     
              </div>
            </div>
          : null}
        </div>
      </div>
    </div>
  );
};

export default Careers; 