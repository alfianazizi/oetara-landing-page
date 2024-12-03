import { useState } from 'react';
import nav_4 from '../assets/image/navigation-web.png';

const Careers = () => {
  const [jobType, setJobType] = useState('');
  const [category, setCategory] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [selectedJobIndex, setSelectedJobIndex] = useState(null);
  const [isJobTypeModalOpen, setIsJobTypeModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isExperienceLevelModalOpen, setIsExperienceLevelModalOpen] = useState(false);
  const [isShowCareer, setIsShowCarieer] = useState(false)

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

  const handleCategorySelect = (value) => {
    setCategory(value);
    setIsCategoryModalOpen(false);
  };

  return (
    <div className="w-full mt-16 lg:mt-20 bg-[#F1F2F2]">
      {/* Hero Section */}
      <div className="relative h-[80vh] bg-cover bg-center text-white" 
        style={{ 
          backgroundImage: `url(${nav_4})`,
          backgroundPosition: 'bottom',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(0, 0, 0, 0.4)'}} />
        <div className="relative z-[8] h-[80vh] flex justify-center items-center max-w-7xl mx-auto px-4 py-16">
          <div>
            <div className="mb-12 text-center">
              <h1 className="text-lg lg:text-4xl font-[400] mb-4">Find Jobs, Employment & Career Opportunities</h1>
              <h2 className="text-5xl font-[400] leading-[1.2]">
                Search Your Job<br />
                & Join Our Team
              </h2>
            </div>

            {/* Filter Controls */}
            <div className="flex gap-2 lg:gap-4 justify-center w-full">
              <select 
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                className="hidden lg:inline-block p-3 rounded-md bg-white text-black w-1/3 lg:min-w-[200px]"
              >
                <option value="">Job Type</option>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="contract">Contract</option>
              </select>
              <button 
                onClick={() => setIsJobTypeModalOpen(true)} 
                className="inline-block lg:hidden p-2 text-[12px] rounded-md bg-white text-black w-1/3 lg:min-w-[200px]"
              >
                {jobType || "Job Type"}
              </button>
              
              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="hidden lg:inline-block p-3 rounded-md bg-white text-black min-w-[200px]"
              >
                <option value="">Category</option>
                <option value="planning">Planning</option>
                <option value="accounting">Accounting</option>
                <option value="motion">Motion Graphics</option>
              </select>
              <button 
                onClick={() => setIsCategoryModalOpen(true)} 
                className="inline-block lg:hidden p-2 text-[12px] rounded-md bg-white text-black w-1/3 lg:min-w-[200px]"
              >
                {category || "Category"}
              </button>

              <select 
                value={experienceLevel}
                onChange={(e) => setExperienceLevel(e.target.value)}
                className="hidden lg:inline-block p-3 rounded-md bg-white text-black w-1/3 lg:min-w-[200px]"
              >
                <option value="">Experience Level</option>
                <option value="mid">Mid Level</option>
                <option value="senior">Senior Level</option>
              </select>
              <button 
                onClick={() => setIsExperienceLevelModalOpen(true)} 
                className="inline-block lg:hidden p-2 text-[12px] rounded-md bg-white text-black w-1/3 lg:min-w-[200px]"
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
                onClick={() => console.log('reset')} 
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
                onClick={() => console.log('reset')} 
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
                onClick={() => console.log('reset')} 
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
      <div className="max-w-7xl mx-auto px-4 py-6 lg:py-16">
        <div className="flex gap-8">
          {/* Left Side - Fixed Job List */}
          <div className="w-[100%] lg:w-1/3 bg-white rounded-xl">
            {jobListings.map((job, index) => (
              <div 
                key={index} 
                className={`py-5 hover:lg:border-[#EC1C24] transition-shadow cursor-pointer ${selectedJobIndex === index ? 'border lg:border-[#EC1C24] rounded-lg px-6' : 'border-b border-[#BCBEC0] mx-6'}`}
                onClick={() => {setSelectedJobIndex(index); setIsShowCarieer(true)}}
              >
                <h3 className="text-xl font-bold mb-4">{job.title}</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-2"></span>
                    {job.type}
                  </p>
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-2"></span>
                    {job.level}
                  </p>
                </div>
                <div className="text-right mt-4">
                  <a 
                    className="text-[#EC1C24] text-sm font-medium"
                  >
                    Details {'>'}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Details Panel */}
          <div className="hidden lg:inline-block w-2/3 border border-gray-200 bg-white rounded-lg p-8">
            {selectedJobIndex !== null ? (
              <>
                <h3 className="text-2xl font-bold mb-4">{jobListings[selectedJobIndex].title}</h3>
                <p className="text-gray-600 mb-6">{jobListings[selectedJobIndex].description}</p>
                
                <h4 className="font-bold mb-6">WHAT WILL YOU DO?</h4>
                {Object.entries(jobListings[selectedJobIndex].responsibilities || {}).map(([category, items], idx) => (
                  <div key={idx} className="mb-6">
                    <p className="font-semibold mb-3">{`${idx + 1}. ${category}`}</p>
                    <ul className="list-none space-y-3">
                      {items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <button className="bg-[#EC1C24] hover:bg-red-600 text-white px-8 py-3 rounded">
                  Apply Now
                </button>
              </>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500">Select a job to view details</p>
              </div>
            )}
          </div>

          {isShowCareer ? 
            <div className="fixed lg:hidden inset-0 z-[12] flex items-end justify-center bg-black bg-opacity-50">
              <div className="bg-white rounded-2xl  w-full lg:w-1/3">
                <div className="flex justify-center">
                  <div className="border-b-[8px] rounded-full border-[#58595B] my-5 w-[30%]"></div>
                </div>
                <div className='px-4 h-[80vh]  overflow-x-scroll'>
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
                              <span className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <button className="bg-[#EC1C24] hover:bg-red-600 text-white px-4 py-2 text-sm rounded-full" onClick={() => setIsShowCarieer(false)}>
                      Apply Now
                    </button>
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